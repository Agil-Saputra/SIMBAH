import { useEffect } from "react";
import GuestLayout from "@/Layouts/GuestLayout";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import Button from "@/Components/Button";
import TextInput from "@/Components/TextInput";
import { Head, Link, useForm,usePage } from "@inertiajs/react";

export default function Register() {
    const {flash} = usePage().props;    
    const { data, setData, post, processing, errors, reset } = useForm({
        name: "",
        phone_number: "",
        password: "",
        password_confirmation: "",
    });

    useEffect(() => {
        return () => {
            reset("password", "password_confirmation");                     
        };
    }, []);

            const submit = (e) => {
        e.preventDefault();

        post(route("register"), {
            onError: () => {
                    setData('password', '');
                    setData('password_confirmation', '');
            },
        });
    };

    return (
        <GuestLayout>
            <Head title="Register" />
            {flash.error &&(
            <div className="flex items-center p-4 mb-4 text-sm rounded-lg bg-red-400" role="alert">
                <svg className="flex-shrink-0 inline w-4 h-4 me-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
                </svg>
                <span className="sr-only">Info</span>
                <div className='font-medium'>{flash.error}
                </div>
            </div>
            )}
            <form onSubmit={submit}>
                <div>
                    <InputLabel htmlFor="name" value="Nama Lengkap" />

                    <TextInput
                        id="name"
                        name="name"
						placeholder="contoh: Agus Saputra"
                        value={data.name}
                        className="block w-full mt-1"
                        autoComplete="name"
                        isFocused={true}
                        onChange={(e) => setData("name", e.target.value)}
                        required
                    />

                    <InputError message={errors.name} className="mt-2" />
                </div>

                <div className="mt-4">
                    <InputLabel htmlFor="phone_number" value="No Handphone" />

                    <TextInput
                        id="phone_number"
                        type="number"
                        name="phone_number"
						placeholder="contoh: 089394934933"
                        value={data.phone_number}
                        className="block w-full mt-1"
                        autoComplete="phone_number  "
                        onChange={(e) => setData("phone_number", e.target.value)}
                        required
                    />

                    <InputError message={errors.phone_number} className="mt-2" />
                </div>

                <div className="mt-4">
                    <InputLabel htmlFor="password" value="Password" />

                    <TextInput
                        id="password"
                        type="password"
                        name="password"
						placeholder="Harus lebih dari 8 karakter"
                        value={data.password}
                        className="block w-full mt-1"
                        autoComplete="new-password"
                        onChange={(e) => setData("password", e.target.value)}
                        required
                    />

                 {
					errors.password && <InputError message="Password Harus lebih dari 8 karakter" className="mt-2" />
				 }
                </div>

                <div className="mt-4">
                    <InputLabel
                        htmlFor="password_confirmation"
                        value="Konfirmasi Password"
                    />

                    <TextInput
                        id="password_confirmation"
                        type="password"
                        name="password_confirmation"
						placeholder="Harus lebih dari 8 karakter"
                        value={data.password_confirmation}
                        className="block w-full mt-1"
                        autoComplete="new-password"
                        onChange={(e) =>
                            setData("password_confirmation", e.target.value)
                        }
                        required
                    />

                    <InputError
                        message={errors.password_confirmation}
                        className="mt-2"
                    />
                </div>

                <Button className="w-full mt-6 mb-4" disabled={processing}>
                    Daftar
                </Button>
                <Link
                    href={route("login")}
                    className="text-sm text-gray-600 underline rounded-md hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                    Sudah Punya Akun?
                </Link>
            </form>
        </GuestLayout>
    );
}
