import React from "react";

export default function ElevatedContainer({ children }) {
    return (
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 space-y-6">
            <div className=" p-4 sm:p-8 bg-white shadow-sm rounded-lg border my-10">
                {children}
            </div>
        </div>
    );
}
