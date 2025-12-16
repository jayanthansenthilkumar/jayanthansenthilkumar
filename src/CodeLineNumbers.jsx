import React from 'react';

const CodeLineNumbers = ({ lines }) => {
    return (
        <div className="hidden md:flex flex-col items-end pr-4 select-none text-gruvbox-gray opacity-50 text-sm font-mono min-w-[3rem]">
            {Array.from({ length: lines }, (_, i) => (
                <span key={i + 1}>{i + 1}</span>
            ))}
        </div>
    );
};

export default CodeLineNumbers;
