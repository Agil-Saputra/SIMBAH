import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import Button from '@/Components/Button';
import TextInput from '@/Components/TextInput';
import { useForm, usePage } from '@inertiajs/react';
import { Transition } from '@headlessui/react';
import swal from 'sweetalert';

export default function UpdateProfileInformation({className = '' }) {
    const user = usePage().props.auth.user;

    const { data, setData, patch, errors, processing, recentlySuccessful } = useForm({
        full_name: user.full_name,
        phone_number: user.phone_number,
    });

    const submit = (e) => {
        e.preventDefault();
        patch(route('profile.update'), {
            onSuccess: () => {
                swal({
                    title: "Success",
                    text: "Profile berhasil diperbarui!",
                    icon: "success",
                  });
            },
            onError: (errors) => {
                swal({
                    title: "Error",
                    text: "Profile gagal diperbarui!",
                    icon: "error",
                  });
            }
        });
    };
    

    return (
        <section className={className}>
            <header>
                <h2 className="text-lg font-medium text-gray-900">Informasi Profile</h2>

                <p className="mt-1 text-sm text-gray-600">
                    Perbarui Nama & Nomor Telepon Anda
                </p>
            </header>

            <form onSubmit={submit} className="mt-6 space-y-6">
                <div>
                    <InputLabel htmlFor="full_name" value="Nama" />

                    <TextInput
                        id="full_name"
                        className="mt-1 block w-full"
                        value={data.full_name}
                        onChange={(e) => setData('full_name', e.target.value)}
                        required
                        isFocused
                        autoComplete="full_name"
                    />

                    <InputError className="mt-2" message={errors.name} />
                </div>
                <div>
                    <InputLabel htmlFor="phone_number" value="Nomor Telepon" />

                    <TextInput
                        id="phone_number"
                        className="mt-1 block w-full"
                        value={data.phone_number}
                        onChange={(e) => setData('phone_number', e.target.value)}
                        required
                        isFocused
                        autoComplete="phone_number"
                    />

                    <InputError className="mt-2" message={errors.phone_number} />
                </div>

                <div className="flex items-center gap-4">
                    <Button disabled={processing}>Simpan</Button>

                    <Transition
                        show={recentlySuccessful}
                        enter="transition ease-in-out"
                        enterFrom="opacity-0"
                        leave="transition ease-in-out"
                        leaveTo="opacity-0"
                    >
                        <p className="text-sm text-gray-600">Tersimpan</p>
                    </Transition>
                </div>
            </form>
        </section>
    );
}
