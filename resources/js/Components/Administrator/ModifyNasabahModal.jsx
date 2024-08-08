import React, { useEffect } from 'react';
import { useForm, router, usePage } from '@inertiajs/react';
import swal from 'sweetalert';
import Modal from "../Modal";
import TextInput from "../TextInput";
import InputLabel from "../InputLabel";
import InputError from "../InputError";
import Button from "../Button";
import { Inertia } from '@inertiajs/inertia';

export default function ModifyNasabahModal({ show, onClose, type, dataEdit}) {
    console.log(dataEdit);
    const { data, setData, post, processing, errors, reset } = useForm({
        phoneNumber: "",
        fullName: "",
		password: "",
    });
  const { flash } = usePage().props;
  useEffect(() => {
    if (dataEdit) {
      setData({
        phoneNumber: dataEdit.phone_number,
        fullName: dataEdit.full_name,
      });
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
    
        const url = type === "edit" ? `/administrator/nasabah/edit/${dataEdit?.id}` : '/administrator/nasabah';
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
                    <InputLabel htmlFor="phoneNumber" value="No Telepon" />
                    <TextInput
                        id="phoneNumber"
						type="number"
                        name="phone_number"
                        placeholder="Masukkan No Telepon Nasabah"
                        value={data.phoneNumber} required
                        className="block w-full mt-2"
                        isFocused={true}
                        onChange={(e) => setData("phoneNumber", e.target.value)}
                    />

                    <InputError message={errors.phoneNumber} className="mt-2" />
                </div>
                <div>
                    <InputLabel htmlFor="fullName" value="Nama Lengkap" />
                    <TextInput
                        id="fullName"
                        name="fullName"
                        placeholder="Masukkan Nama Lengkap Nasabah"
                        value={data.fullName} required
                        className="block w-full mt-2"
                        isFocused={true}
                        onChange={(e) => setData("fullName", e.target.value)}
                    />

                    <InputError message={errors.fullName} className="mt-2" />
                </div>
                        <div>
                            <InputLabel htmlFor="password" value="Password" />
                            <TextInput
                                id="password"
                                type="password"
                                name="password"
                                placeholder="Masukkan Password Nasabah"
                                value={data.password} required={type !== "edit"}
                                className="block w-full mt-2"
                                isFocused={true}
                                onChange={(e) => setData("password", e.target.value)}
                            />
                            <InputError message={errors.password} className="mt-2" />
                        </div>

                <Button className="w-full mt-6 mb-3" disabled={processing}>
                    {type == "edit" ? "Edit Nasabah" : "Tambah Nasabah"}
                </Button>
            </form>
        </Modal>
    );
}
