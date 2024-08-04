import React from 'react'
import { useForm } from '@inertiajs/react';
import Modal from '../Modal';
import TextInput from '../TextInput';
import InputLabel from '../InputLabel';
import InputError from '../InputError';
import Button from '../Button';

export default function modifyKategoriModal({show, onClose, type, id}) {
	const { data, setData, post, processing, errors, reset } = useForm({
        namaKategori: '',
    });

    const submit = (e) => {
        e.preventDefault();

        if (type == "edit") {
			post(route('edit'), {
				onError: () => {
					   return
				},
			});
		} else if (type == "add") {
			post(route('add'), {
				onError: () => {
					   return
				},
			});
		}
};
  return (
	<Modal show={show} onClose={onClose}>
		 <form onSubmit={submit}>
		 <div>
                    <InputLabel htmlFor="namaKategori" value="Nama Kategori" />
                    <TextInput
                        id="namaKategori"
                        name="namaKategori"
                        placeholder="Masukkan Nama Kategori"
                        value={data.namaKategori}
                        className="block w-full mt-2"
                        isFocused={true}
                        onChange={(e) => setData("namaKategori", e.target.value)}
                    />

                    <InputError message={errors.noTelepon} className="mt-2" />
                </div>

                <Button className="w-full mt-6 mb-3" disabled={processing}>
				{type == "edit" ? "Edit Kategori" : "Tambah Kategori"}
                </Button>
        </form>
	</Modal>
  )
}

