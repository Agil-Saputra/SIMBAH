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

export default function KelolaKonten() {
    const [previewImages, setPreviewImages] = useState([]);
    const [imageFiles, setimageFiles] = useState([]);
    const handleFileChange = (event) => {
        const files = event.target.files;
        setimageFiles(Array.from(files));

        if (files && files.length) {
            const imagePreviews = [];

            for (let i = 0; i < files.length; i++) {
                const reader = new FileReader();
                reader.onloadend = () => {
                    const result = reader.result;
                    imagePreviews.push(result);

                    if (imagePreviews.length === files.length) {
                        setPreviewImages([...previewImages, ...imagePreviews]);
                    }
                };
                reader.readAsDataURL(files[i]);
            }
        }
    };
    function handleDeleteImage(id) {
        const updatedImages = previewImages.filter(
            (item, index) => index !== id
        );
        const updatedimageFiles = imageFiles.filter(
            (item, index) => index !== id
        );
        setPreviewImages(updatedImages);
        setimageFiles(updatedimageFiles);
    }

    // tanggal harus ada
    const { data, setData, post, patch, processing, errors, reset } = useForm({
        namaKegiatan: "",
        deskripsiKegiatan: "",
        tanggalKegiatan: "",
    });

    const submit = (e) => {
        e.preventDefault();
        console.log("submit");
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
                                multiple
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
						<div className="grid grid-cols-2 gap-4">
						{previewImages[0] &&
							previewImages.map((item, i) => (
								<div className="relative h-[10rem]"> 
									<img
										alt="oke"
										src={item}
										className="w-full h-full border-2 rounded-md border-secondary border-dashed object-contain"
										width={100}
										height={100}
									/>
									<button onClick={() => handleDeleteImage(i)}>
										<Delete
											size={25}
											className="absolute left-1 top-1 text-red-600"
										/>
									</button>
								</div>
							))}
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
                        <ActivityCard />
                        <ActivityCard />
                        <ActivityCard />
                    </div>
                </ElevatedContainer>
            </AdministratorLayout>
        </>
    );
}
