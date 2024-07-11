import React from "react";

export default function Button({
    className = "",
    type,
    disabled,
    children,
    href,
    ...props
}) {
    return (
        <button
            {...props}
            className={
                "hover:bg-[0CB5A7] transition-all ease-in-out duration-200 py-2 px-6 rounded-lg font-bold " +
                (type == "secondary"
                    ? "bg-white text-primary border-primary border-2"
                    : "bg-primary text-white ") +
                className
            }
        >
            { children }
        </button>
    );
}
