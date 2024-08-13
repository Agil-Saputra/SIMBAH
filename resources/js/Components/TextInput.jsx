import { TextField } from "@mui/material";

export default function TextInput({ type = 'text', className = '', ...props }) {

    return (
        <TextField
            {...props}
            type={type}
            className={
                'rounded-[4px] shadow-sm' +
                className
            }
        />
    );
};
