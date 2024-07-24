import { useEffect } from 'react';
import Checkbox from '@/Components/Checkbox';
import GuestLayout from '@/Layouts/GuestLayout';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import Button from '@/Components/Button';
import TextInput from '@/Components/TextInput';
import { Head, Link, useForm,usePage } from '@inertiajs/react';

export default function Login({ status, canResetPassword }) {
    const {flash} = usePage().props;
    const { data, setData, post, processing, errors, reset } = useForm({
        phone_number: '',
        password: '',
        remember: false,
    });

    useEffect(() => {
        return () => {
            reset('password');
        };
    }, []);

    const submit = (e) => {
        e.preventDefault();

        post(route('login'), {
            onError: () => {
                    setData('password', '');
            },
        });
    };

    return (
        <GuestLayout>
            <Head title="Log in" />
            {flash.message &&(
            <div className="flex items-center p-4 mb-4 text-sm rounded-lg bg-green-400" role="alert">
                <svg className="flex-shrink-0 inline w-4 h-4 me-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
                </svg>
                <span className="sr-only">Info</span>
                <div className='font-medium'>{flash.message}
                </div>
            </div>
            )}
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
            <form onSubmit={submit} className=''>
                <div>
                    <InputLabel htmlFor="No Hp" value="No Handphone" />

                    <TextInput
                        id="phone_number"
                        type="number"
                        name="phone_number"
                        placeholder="Masukkan No Handphone"
                        value={data.phone_number}
                        className="block w-full mt-2"
                        isFocused={true}
                        onChange={(e) => setData('phone_number', e.target.value)}
                    />

                    <InputError message={errors.phone_number} className="mt-2" />
                </div>

                <div className="mt-4">
                    <InputLabel htmlFor="password" value="Password" />

                    <TextInput
                        id="password"
                        type="password"
                        name="password"
                        placeholder="Masukkan Password"
                        value={data.password}
                        className="block w-full mt-2"
                        autoComplete="current-password"
                        onChange={(e) => setData('password', e.target.value)}
                    />

                    <InputError message={errors.password} className="mt-2" />
                </div>

                <div className="block mt-4">
                    <label className="flex items-center">
                        <Checkbox
                            name="remember"
                            checked={data.remember}
                            onChange={(e) => setData('remember', e.target.checked)}
                        />
                        <span className="text-sm text-gray-600 ms-2">Ingat Saya</span>
                    </label>
                </div>

                <Button className="w-full mt-6 mb-3" disabled={processing}>
                    Masuk
                </Button>

                <div className='flex justify-between'>
				{canResetPassword && (
                    <Link
                        href={route('password.request')}
                        className="text-sm text-gray-600 underline rounded-md hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                        Lupa password?
                    </Link>
                )}
				<Link
                        href={route('register')}
                        className="text-sm text-gray-600 underline rounded-md hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                        Belum Punya Akun?
                    </Link>
				</div>
            </form>
        </GuestLayout>
    );
}
