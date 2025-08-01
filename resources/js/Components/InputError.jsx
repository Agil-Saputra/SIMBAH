export default function InputError({ message, className = '', ...props }) {
    return(
        <p {...props} className={'text-sm text-red-600 mt-2' + className}>
            {message}
        </p>
    )
}
