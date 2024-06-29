// AddressForm.tsx
import React, { useState } from 'react';

interface AddressFormProps {
    onSubmit: () => void;
    onCancel: () => void;
}

const AddressForm: React.FC<AddressFormProps> = ({ onSubmit, onCancel }) => {
    const [address, setAddress] = useState('');

    const handleAddressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setAddress(e.target.value);
    };

    const handleSubmit = () => {
        // Perform submit logic, e.g., send data to server
        onSubmit();
    };

    return (
        <div>
            <label className="block text-sm font-medium text-gray-700">Address</label>
            <input
                type="text"
                value={address}
                onChange={handleAddressChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
            <div className="mt-4 flex justify-end">
                <button
                    type="button"
                    className="inline-flex justify-center px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    onClick={onCancel}
                >
                    Cancel
                </button>
                <button
                    type="button"
                    className="ml-3 inline-flex justify-center px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    onClick={handleSubmit}
                >
                    Submit
                </button>
            </div>
        </div>
    );
};

export default AddressForm;
