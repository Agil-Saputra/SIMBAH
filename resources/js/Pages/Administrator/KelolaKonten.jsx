import { useState } from "react";
import AdministratorLayout from "@/Layouts/AdministratorLayout";
import ElevatedContainer from "@/Components/ElevatedContainer";
import InputLabel from "@/Components/InputLabel";
import InputError from "@/Components/InputError";
import TextInput from "@/Components/TextInput";
import { useForm } from "@inertiajs/react";
import Button from "@/Components/Button";
import { Head } from "@inertiajs/react";
import ActivityCard from "./ActivityCard";
import { CameraAlt, Delete } from "@mui/icons-material";
import axios from 'axios';
import swal from "sweetalert";

export default function KelolaKonten(dataKonten) {
    const [previewImage, setPreviewImage] = useState(null); // Hanya satu preview
    const [imageFile, setImageFile] = useState(null); // Hanya satu file
    const rows = dataKonten.konten;
    const { data, setData, post, processing, errors, reset } = useForm({
        namaKegiatan: "",
        deskripsiKegiatan: "",
        tanggalKegiatan: "",
        image: null, // Hanya satu gambar
    });

    const handleFileChange = (event) => {
        const file = event.target.files[0]; // Ambil file pertama saja
        setImageFile(file); // Simpan file untuk upload

        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setPreviewImage(reader.result); // Simpan preview
            };
            reader.readAsDataURL(file); // Membuat preview
        }
    };

    const submit = (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append("namaKegiatan", data.namaKegiatan);
        formData.append("deskripsiKegiatan", data.deskripsiKegiatan);
        formData.append("tanggalKegiatan", data.tanggalKegiatan);

        if (imageFile) {
            formData.append("image", imageFile); // Pastikan file ditambahkan
        }

        axios.post(route("administrator.kelola-konten.store"), formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        })
            .then(response => {
                swal({
                    title: "Success",
                    text: "Data Konten berhasil ditambahkan!",
                    icon: "success",
                    buttons: {
                        confirm: {
                            text: "Lanjutkan",
                            className: "bg-primary",
                        },
                    },
                }).then(() => {
                    reset();
                    setPreviewImage(null);
                    setImageFile(null);
                });

            })
            .catch(error => {
                console.log("Error response:", error);
            });
    };

    return (
        <>
            <Head title="Kelola Konten" />
            <AdministratorLayout>
                <ElevatedContainer>
                    <h1 className="text-2xl font-bold mb-6">
                        Tambahkan Data Kegiatan Baru
                    </h1>
                    <form onSubmit={submit} className="grid gap-4">
                        <div>
                            <InputLabel
                                htmlFor="namaKegiatan"
                                value="Nama Kegiatan"
                            />
                            <TextInput
                                id="namaKegiatan"
                                name="namaKegiatan"
                                placeholder="Masukkan Nama Kegiatan"
                                value={data.namaKategori}
                                required
                                className="block w-full mt-2"
                                isFocused={true}
                                onChange={(e) =>
                                    setData("namaKegiatan", e.target.value)
                                }
                            />
                            <InputError
                                message={errors.deskripsi}
                                className="mt-2"
                            />
                        </div>
                        <div>
                            <InputLabel
                                htmlFor="deskripsiKegiatan"
                                value="Deskripsi Kegiatan"
                            />
                            <TextInput
                                id="deskripsiKegiatan"
                                name="deskripsiKegiatan"
                                placeholder="Masukkan Deskripsi"
                                value={data.deskripsi}
                                required
                                className="block w-full mt-2"
                                isFocused={true}
                                onChange={(e) =>
                                    setData("deskripsiKegiatan", e.target.value)
                                }
                            />
                            <InputError
                                message={errors.namaKategori}
                                className="mt-2"
                            />
                        </div>
                        <div>
                            <InputLabel
                                htmlFor="tanggalKegiatan"
                                value="Tanggal Kegiatan"
                            />
                            <TextInput
                                id="tanggalKegiatan"
                                name="tanggal Kegiatan"
                                type="date"
                                placeholder="Masukkan Tanggal Kegiatan"
                                value={data.harga}
                                required
                                className="block w-full mt-2"
                                isFocused={true}
                                onChange={(e) =>
                                    setData("tanggalKegiatan", e.target.value)
                                }
                            />
                            <InputError
                                message={errors.harga}
                                className="mt-2"
                            />
                        </div>
                        <div>
                            <InputLabel
                                htmlFor="namaKegiatan"
                                value="Foto Kegiatan"
                            />

                            <input
                                className="hidden"
                                id="bannerImage"
                                type="file"
                                accept="image/png, image/gif, image/jpeg"
                                onChange={handleFileChange}
                            />

                            <label
                                htmlFor="bannerImage"
                                className="block border border-dashed border-gray-300 p-4 w-full text-center rounded-md curso-pointer hover:bg-gray-200 hover:border-black"
                            >
                                <CameraAlt className="mr-2" />
                                Tambahkan Foto Kegiatan
                            </label>
                        </div>
                        <div className="grid grid-cols-1 gap-4">
                            {previewImage && ( // Menampilkan hanya satu gambar
                                <div className="relative h-[10rem]">
                                    <img
                                        alt="Preview"
                                        src={previewImage} // Mengambil gambar dari previewImage
                                        className="w-full h-full border-2 rounded-md border-secondary border-dashed object-contain"
                                        width={100}
                                        height={100}
                                    />
                                    <button onClick={() => setPreviewImage(null)}>
                                        <Delete
                                            size={25}
                                            className="absolute left-1 top-1 text-red-600"
                                        />
                                    </button>
                                </div>
                            )}
                        </div>

                        <Button
                            className="w-full mt-6 mb-3"
                            disabled={processing}
                        >
                            Tambah Kegiatan
                        </Button>
                    </form>

                </ElevatedContainer>
                <ElevatedContainer>
                    <h1 className="text-2xl font-bold mb-6">
                        Daftar Kegiatan
                    </h1>
                    <div className="grid grid-cols-2 gap-6">
                        {rows.map((row, rowIndex) => (
                            <ActivityCard key={rowIndex} dataEdit={row} />
                        ))}
                    </div>
                </ElevatedContainer>
            </AdministratorLayout>
        </>
    );
}
