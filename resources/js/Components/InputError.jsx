export default function InputError({ message, className = '', ...props }) {
    return(
        <p {...props} className={'text-sm text-red-600 ' + className}>
            {message}
        </p>
    )
}
