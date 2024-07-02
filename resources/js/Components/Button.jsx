import React from "react";
import { Link } from "@inertiajs/react";

export default function Button({
    className = "",
    type,
    disabled,
    children,
    href,
    link,
    ...props
}) {
    return (
        <button
            {...props}
            className={
                "py-2 px-6 rounded-lg font-bold " +
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
