import { useState, useRef } from 'react';
import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react';
import { ExclamationTriangleIcon } from '@heroicons/react/24/outline';

import Button from '@/components/ui/Button';
import {
    getCustomers,
    setTableData,
    setFilterData,
    useAppDispatch,
    useAppSelector,
} from '../store';
import CustomerTableSearch from './CustomerTableSearch';
import CustomerTableFilter from './CustomerTableFilter';
import cloneDeep from 'lodash/cloneDeep';
import type { TableQueries } from '@/@types/common';

const CustomersTableTools = () => {
    const dispatch = useAppDispatch();

    const inputRef = useRef<HTMLInputElement>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [showAddressForm, setShowAddressForm] = useState(false);
    const tableData = useAppSelector(
        (state) => state.crmCustomers.data.tableData
    );

    const [formState, setFormState] = useState({
        name:'',
        nickname: '',
        iqamaName: '',
        nationality: '',
        dob:'',
        religion: '',
        mobileNumber:'',
        arrivalDate: '',
        contractDate:'',
        experience: '',
        skills: '',
        salary:''
    });

    const handleInputChange = (val: string) => {
        const newTableData = cloneDeep(tableData);
        newTableData.query = val;
        newTableData.pageIndex = 1;
        if (typeof val === 'string' && val.length > 1) {
            fetchData(newTableData);
        }

        if (typeof val === 'string' && val.length === 0) {
            fetchData(newTableData);
        }
    };

    const fetchData = (data: TableQueries) => {
        dispatch(setTableData(data));
        dispatch(getCustomers(data));
    };

    const onClearAll = () => {
        const newTableData = cloneDeep(tableData);
        newTableData.query = '';
        if (inputRef.current) {
            inputRef.current.value = '';
        }
        dispatch(setFilterData({ status: '' }));
        fetchData(newTableData);
    };

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setShowAddressForm(false); // Close address form when modal is closed
    };

    const handleFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormState({
            ...formState,
            [name]: value
        });
    };

    const handleSubmit = () => {
        // Add logic to handle form submission, e.g., sending data to an API or updating state
        console.log(formState);
        setShowAddressForm(true);
        closeModal();
    };
    
    const handleAddressFormSubmit = () => {
        // Handle address form submission
        console.log('Address form submitted');
        closeModal(); // Close modal after address form submission
    };

    return (
        <div className="md:flex items-center justify-between">
            <div className="md:flex items-center gap-4">
                <CustomerTableSearch
                    ref={inputRef}
                    onInputChange={handleInputChange}
                />
                <CustomerTableFilter />
            </div>
            <div className="mb-4">
                <Button className="space-x-6 mr-4" size="sm" onClick={openModal}>
                    Add +
                </Button>

                <Button size="sm" onClick={onClearAll}>
                    Clear All
                </Button>
            </div>

            <Dialog className="relative z-10" open={isModalOpen} onClose={closeModal}>
                <DialogBackdrop
                    transition
                    className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
                />

                <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                    <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                        <DialogPanel
                            transition
                            className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-8 sm:w-full sm:max-w-lg data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95"
                        >
                            <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                                <div className="sm:flex sm:items-start">
                                    
                                    <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                                        <DialogTitle as="h3" className="text-base font-semibold leading-6 text-gray-900">
                                            Add New Religion
                                        </DialogTitle>
                                        <div className="mt-2">
                                            <p className="text-sm text-gray-500">
                                                Fill in the details to add a new religion to the table.
                                            </p>
                                            <form className="mt-4 grid grid-cols-1 gap-y-4 sm:grid-cols-2 sm:gap-x-6">
                                                <div className="sm:col-span-1">
                                                    <label className="block text-sm font-medium text-gray-700">Name</label>
                                                    <input
                                                        type="text"
                                                        name="name"
                                                        value={formState.name}
                                                        onChange={handleFormChange}
                                                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                                    />
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                                <button
                                    type="button"
                                    className="inline-flex w-full justify-center rounded-md bg-green-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-500 sm:ml-3 sm:w-auto"
                                    onClick={handleSubmit}
                                >
                                    Add
                                </button>
                                <button
                                    type="button"
                                    className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                                    onClick={closeModal}
                                    data-autofocus
                                >
                                    Cancel
                                </button>
                            </div>
                        </DialogPanel>
                    </div>
                </div>
            </Dialog>
        </div>
    );
};

export default CustomersTableTools;
