import React, { useState, useRef } from 'react';
import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react';
import { Link, useNavigate } from 'react-router-dom';

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
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/app/forms/WorkerAddForm');
    };

    const inputRef = useRef<HTMLInputElement>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
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
        setFormState({
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
        closeModal();
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
                <Button className="space-x-6 mr-4" size="sm" onClick={handleClick}>
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
                                    <DialogTitle as="h3" className="text-base font-semibold leading-6 text-gray-900">
                                        Add New Worker
                                    </DialogTitle>
                                    <div className="mt-2">
                                        <p className="text-sm text-gray-500">
                                            Fill in the details to add a new worker to the table.
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
                                            <div className="sm:col-span-1">
                                                <label className="block text-sm font-medium text-gray-700">Nickname</label>
                                                <input
                                                    type="text"
                                                    name="nickname"
                                                    value={formState.nickname}
                                                    onChange={handleFormChange}
                                                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                                />
                                            </div>
                                            <div className="sm:col-span-1">
                                                <label className="block text-sm font-medium text-gray-700">Iqama Name</label>
                                                <input
                                                    type="text"
                                                    name="iqamaName"
                                                    value={formState.iqamaName}
                                                    onChange={handleFormChange}
                                                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                                />
                                            </div>
                                            <div className="sm:col-span-1">
                                                <label className="block text-sm font-medium text-gray-700">Nationality</label>
                                                <select
                                                    name="nationality"
                                                    value={formState.nationality}
                                                    onChange={handleFormChange}
                                                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                                >
                                                    <option value="">Select Nationality</option>
                                                    <option value="nationality1">India</option>
                                                    <option value="nationality2">Pakistan</option>
                                                    {/* Add more options as needed */}
                                                </select>
                                            </div>
                                            <div className="sm:col-span-1">
                                                <label className="block text-sm font-medium text-gray-700">Date of Birth</label>
                                                <input
                                                    type="text"
                                                    name="dob"
                                                    value={formState.dob}
                                                    onChange={handleFormChange}
                                                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                                />
                                            </div>
                                            <div className="sm:col-span-1">
                                                <label className="block text-sm font-medium text-gray-700">Religion</label>
                                                <select
                                                    name="religion"
                                                    value={formState.religion}
                                                    onChange={handleFormChange}
                                                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                                >
                                                    <option value="">Select Religion</option>
                                                    <option value="religion1">Islam</option>
                                                    <option value="religion2">Christianity</option>
                                                    {/* Add more options as needed */}
                                                </select>
                                            </div>
                                            <div className="sm:col-span-1">
                                                <label className="block text-sm font-medium text-gray-700">Mobile Number</label>
                                                <input
                                                    type="text"
                                                    name="mobileNumber"
                                                    value={formState.mobileNumber}
                                                    onChange={handleFormChange}
                                                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                                />
                                            </div>
                                            <div className="sm:col-span-1">
                                                <label className="block text-sm font-medium text-gray-700">Arrival Date</label>
                                                <input
                                                    type="text"
                                                    name="arrivalDate"
                                                    value={formState.arrivalDate}
                                                    onChange={handleFormChange}
                                                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                                />
                                            </div>
                                            <div className="sm:col-span-1">
                                                <label className="block text-sm font-medium text-gray-700">Contract End Date</label>
                                                <input
                                                    type="text"
                                                    name="contractDate"
                                                    value={formState.contractDate}
                                                    onChange={handleFormChange}
                                                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                                />
                                            </div>
                                            <div className="sm:col-span-1">
                                                <label className="block text-sm font-medium text-gray-700">Experience</label>
                                                <input
                                                    type="text"
                                                    name="experience"
                                                    value={formState.experience}
                                                    onChange={handleFormChange}
                                                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                                />
                                            </div>
                                            <div className="sm:col-span-1">
                                                <label className="block text-sm font-medium text-gray-700">Skills</label>
                                                <input
                                                    type="text"
                                                    name="skills"
                                                    value={formState.skills}
                                                    onChange={handleFormChange}
                                                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                                />
                                            </div>
                                            <div className="sm:col-span-1">
                                                <label className="block text-sm font-medium text-gray-700">Salary</label>
                                                <input
                                                    type="text"
                                                    name="salary"
                                                    value={formState.salary}
                                                    onChange={handleFormChange}
                                                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                                />
                                            </div>
                                        </form>
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
