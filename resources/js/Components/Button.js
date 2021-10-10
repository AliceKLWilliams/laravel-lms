import React from 'react';

export default function Button({ type = 'submit', className = '', processing, children }) {
    return (
        <button
            type={type}
            className={
                `button ${
                    processing && 'opacity-25'
                } ` + className
            }
            disabled={processing}
        >
            {children}
        </button>
    );
}
