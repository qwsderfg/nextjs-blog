import React from 'react'

export default function ConnectModal({ visible, onClose }) {

    if(!visible) return null;

    return (
        <div class='fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex justify-center items-center'>
            <div class='bg-white p-2 rounded'>
                <p class=''>Connect Wallet</p>
                <button onClick={onClose}>X</button>
            </div>
        </div>
    )
}