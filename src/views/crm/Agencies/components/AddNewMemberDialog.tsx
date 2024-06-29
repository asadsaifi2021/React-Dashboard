import { useState, useRef, ChangeEvent } from 'react';
import Input from '@/components/ui/Input';
import Avatar from '@/components/ui/Avatar';
import ScrollBar from '@/components/ui/ScrollBar';
import Button from '@/components/ui/Button';
import wildCardSearch from '@/utils/wildCardSearch';
import {
    updateBoardMembers,
    closeDialog,
    useAppDispatch,
    useAppSelector,
} from '../components/store';
import { HiOutlineSearch } from 'react-icons/hi';
import debounce from 'lodash/debounce';
import cloneDeep from 'lodash/cloneDeep';

type Member = {
    id: string;
    name: string;
    email: string;
    img: string;
};

const AddNewMemberDialog: React.FC<{ onClose: () => void }> = ({ onClose }) => {
    const inputRef = useRef<HTMLInputElement>(null);
    const dispatch = useAppDispatch();

    const allMembers = useAppSelector((state) => state.scrumBoard.data.allMembers);
    const boardMembers = useAppSelector((state) => state.scrumBoard.data.boardMembers);

    const [memberList, setMemberList] = useState<Member[]>(allMembers);

    const debounceFn = debounce(handleDebounceFn, 500);

    function handleDebounceFn(query: string) {
        const data = wildCardSearch(allMembers, query);
        setMemberList(data as Member[]);
    }

    const onSearch = (e: ChangeEvent<HTMLInputElement>) => {
        debounceFn(e.target.value);
    };

    const existingMember = (id: string): boolean => {
        return boardMembers.some((member: { id: string; }) => member.id === id);
    };

    const onAddMember = (member: Member) => {
        const data = cloneDeep(boardMembers);
        data.push(member);
        dispatch(updateBoardMembers(data));
    };

    const onRemoveMember = (id: string) => {
        const data = cloneDeep(boardMembers).filter((member: { id: string; }) => member.id !== id);
        dispatch(updateBoardMembers(data));
    };

    return (
        <div>
            <div className="text-center mb-6">
                <h4 className="mb-2">Add people</h4>
                <p>Invite existing team member to this project.</p>
            </div>
            <Input
                ref={inputRef}
                prefix={<HiOutlineSearch className="text-lg" />}
                placeholder="Quick search member"
                onChange={onSearch}
            />
            <div className="mt-4">
                <p className="font-semibold uppercase text-xs mb-4">
                    {memberList.length} members available
                </p>
                <div className="overflow-y-auto h-80 mb-6">
                    <ScrollBar>
                        {memberList.map((member: Member) => (
                            <div
                                key={member.id}
                                className="py-3 pr-5 rounded-lg flex items-center justify-between"
                            >
                                <div className="flex items-center gap-2">
                                    <Avatar shape="circle" src={member.img} />
                                    <div>
                                        <p className="heading-text font-bold">
                                            {member.name}
                                        </p>
                                        <p>{member.email}</p>
                                    </div>
                                </div>
                                {existingMember(member.id) ? (
                                    <Button
                                        size="xs"
                                        onClick={() => onRemoveMember(member.id)}
                                    >
                                        <span className="text-red-500">Remove</span>
                                    </Button>
                                ) : (
                                    <Button
                                        size="xs"
                                        onClick={() => onAddMember(member)}
                                    >
                                        Add
                                    </Button>
                                )}
                            </div>
                        ))}
                    </ScrollBar>
                </div>
                <Button block variant="solid" onClick={onClose}>
                    Done
                </Button>
            </div>
        </div>
    );
};

export default AddNewMemberDialog;
