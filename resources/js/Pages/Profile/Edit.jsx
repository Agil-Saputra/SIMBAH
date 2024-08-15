import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import UpdatePasswordForm from './Partials/UpdatePasswordForm';
import UpdateProfileInformationForm from './Partials/UpdateProfileInformationForm';
import { Head } from '@inertiajs/react';
import ElevatedContainer from '@/Components/ElevatedContainer';

export default function Edit({ auth, status }) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Profile</h2>}
        >
            <Head title="Profile" />
                    <ElevatedContainer>
                        <UpdateProfileInformationForm
                            status={status}
                            className="max-w-xl"
                        />
                    </ElevatedContainer>

                    <ElevatedContainer>
                        <UpdatePasswordForm className="max-w-xl" />
                    </ElevatedContainer>
        </AuthenticatedLayout>
    );
}
