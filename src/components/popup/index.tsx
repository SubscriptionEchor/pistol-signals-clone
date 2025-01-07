// ConfirmationPopup.js
import React from 'react';

const ConfirmationPopup = ({ isOpen, onClose, onConfirm }) => {
    if (!isOpen) return null;

    return (
        <div onClick={onClose} className="fixed inset-0 z-50 flex items-center justify-center px-5 sm:px-0 bg-gray-700 bg-opacity-70">
            <div onClick={(e) => e?.stopPropagation()} className="bg-black w-full max-w-md rounded-lg p-6">
                <h2 className="text-lg font-semibold mb-4">Confirm Sign Out</h2>
                <p className="mb-4">Are you sure you want to sign out?</p>
                <div className="flex justify-end">
                    <button onClick={onClose} className="bg-gray-300 text-gray-700 px-4 py-2 rounded mr-2">
                        Cancel
                    </button>
                    <button onClick={onConfirm} className="bg-red-500 text-white px-4 py-2 rounded">
                        Sign Out
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ConfirmationPopup;