import React, { useEffect } from "react";
import { useForm, usePage } from "@inertiajs/react";
import swal from "sweetalert";
import Modal from "../Modal";
import TextInput from "../TextInput";
import InputLabel from "../InputLabel";
import InputError from "../InputError";
import Button from "../Button";

export default function ModifyKategoriModal({ show, onClose, type, dataEdit }) {
    const { data, setData, post, patch, processing, errors, reset } = useForm({
        namaKategori: "",
        deskripsi: "",
        harga: "",
    });
    useEffect(() => {
        if (dataEdit) {
            setData({
                namaKategori: dataEdit.nama_kategori,
                deskripsi: dataEdit.deskripsi,
                harga: dataEdit.harga,
            });
        }
    }, [dataEdit]);

    const submit = (e) => {
        e.preventDefault();
        if (type === "edit") {
            patch(route("administrator.kategori.update", { id: dataEdit.id }), {
                onSuccess: () => {
                    swal({
                        title: "Success",
                        text: "Data Kategori berhasil diupdate!",
                        icon: "success",
                        buttons: {
                            confirm: {
                                text: "Lanjutkan",
                                className: "bg-primary",
                            },
                        },
                    }).then(() => {
                        reset();
                        onClose();
                    });
                },
            });
        } else {
            post(route("administrator.kategori.store"), {
                onSuccess: () => {
                    swal({
                        title: "Success",
                        text: "Kategori berhasil ditambahkan!",
                        icon: "success",
                        buttons: {
                            confirm: {
                                text: "Lanjutkan",
                                className: "bg-primary",
                            },
                        },
                    }).then(() => {
                        reset();
                        onClose();
                    });
                },
            });
        }
    };

    return (
        <Modal show={show} onClose={onClose}>
            <form onSubmit={submit} className="grid gap-4">
                <div>
                    <InputLabel htmlFor="namaKategori" value="Nama Kategori" />
                    <TextInput
                        id="namaKategori"
                        name="namaKategori"
                        placeholder="Masukkan Nama Kategori"
                        value={data.namaKategori}
                        required
                        className="block w-full mt-2"
                        isFocused={true}
                        onChange={(e) =>
                            setData("namaKategori", e.target.value)
                        }
                    />
                    <InputError
                        message={errors.deskripsi}
                        className="mt-2"
                    />
                </div>
                <div>
                    <InputLabel htmlFor="deskripsi" value="Deskripsi" />
                    <TextInput
                        id="deskripsi"
                        name="deskripsi"
                        placeholder="Masukkan Deskripsi"
                        value={data.deskripsi}
                        required
                        className="block w-full mt-2"
                        isFocused={true}
                        onChange={(e) =>
                            setData("deskripsi", e.target.value)
                        }
                    />
                    <InputError
                        message={errors.namaKategori}
                        className="mt-2"
                    />
                </div>
                <div>
                    <InputLabel htmlFor="harga" value="Harga (Rp)" />
                    <TextInput
                        id="harga"
                        name="harga"
                        type="number"
                        placeholder="Masukkan Harga"
                        value={data.harga}
                        required
                        className="block w-full mt-2"
                        isFocused={true}
                        onChange={(e) =>
                            setData("harga", e.target.value)
                        }
                    />
                    <InputError
                        message={errors.harga}
                        className="mt-2"
                    />
                </div>
                <Button className="w-full mt-6 mb-3" disabled={processing}>
                    {type === "edit" ? "Edit Kategori" : "Tambah Kategori"}
                </Button>
            </form>
        </Modal>
    );
}
