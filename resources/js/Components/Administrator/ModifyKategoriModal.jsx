import React, { useEffect } from 'react';
import { useForm, router, usePage } from '@inertiajs/react';
import swal from 'sweetalert';
import Modal from '../Modal';
import TextInput from '../TextInput';
import InputLabel from '../InputLabel';
import InputError from '../InputError';
import Button from '../Button';
import { Inertia } from '@inertiajs/inertia';

export default function ModifyKategoriModal({ show, onClose, type, dataEdit }) {
  const { data, setData, post, processing, errors, reset } = useForm({
    namaKategori: '',
  });

  const { flash } = usePage().props;

  useEffect(() => {
    if (dataEdit) {
      setData('namaKategori', dataEdit.nama_kategori);
    }
  }, [dataEdit]);


  useEffect(() => {
    if (flash.message) {
      reset();
      swal({
        title: "Success",
        text: flash.message,
        icon: "success",
      });
      onClose();
    }
  }, [flash.message]);

  const submit = (e) => {
    e.preventDefault();

    const url = type === "edit" ? `/administrator/kategori/edit/${dataEdit?.id}` : '/administrator/kategori';
    if (type === "edit") {
      Inertia.patch(url, data);
    } else {
      Inertia.post(url, data);
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
            value={data.namaKategori} required
            className="block w-full mt-2"
            isFocused={true}
            onChange={(e) => setData('namaKategori', e.target.value)}
          />
          <InputError message={errors.namaKategori} className="mt-2" />
        </div>
        <Button className="w-full mt-6 mb-3" disabled={processing}>
          {type === "edit" ? "Edit Kategori" : "Tambah Kategori"}
        </Button>
      </form>
    </Modal>
  );
}
