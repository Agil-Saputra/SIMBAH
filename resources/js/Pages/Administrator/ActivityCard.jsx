import { useState, useEffect } from "react";
import bannerImage from "../../../assets/kegiatan1.jpg";
import { Edit, Delete } from "@mui/icons-material";
import Modal from "@/Components/Modal";
import DangerButton from "@/Components/DangerButton";
import InputLabel from "@/Components/InputLabel";
import InputError from "@/Components/InputError";
import TextInput from "@/Components/TextInput";
import { useForm } from "@inertiajs/react";
import Button from "@/Components/Button";

export default function ActivityCard({dataEdit}) {
	const { data, setData, post, patch, processing, errors, reset } = useForm({
        namaKegiatan: "",
        deskripsiKegiatan: "",
        tanggalKegiatan: "",
    });
    const [editModal, setEditModal] = useState(false);
    const [deleteModal, setDeleteModal] = useState(false);

	useEffect(() => {
        if (dataEdit) {
            setData("namaKegiatan", dataEdit.nama_kategori);
            setData("deskripsiKegiatan", dataEdit.deskripsi);
            setData("tanggalKegiatan", dataEdit.deskripsi);
        }
    }, [dataEdit]);


	function submit(e) {
		e.preventDefault();
		console.log('submit')
	}
    return (
        <>
            <Modal show={editModal} onClose={(() => setEditModal(false))}>
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
                                value={data.namaKegiatan}
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
                                value={data.deskripsiKegiatan}
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
                                name="tanggalKegiatan"
                                type="date"
                                placeholder="Masukkan Tanggal Kegiatan"
                                value={data.tanggalKegiatan}
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
                        <Button
                            className="w-full mt-6 mb-3"
                            disabled={processing}
                        >
                            Tambah Kegiatan
                        </Button>
            </form>
			</Modal>
			<Modal show={deleteModal} onClose={() => setDeleteModal(false)}>
                <p className="mb-4 font-semibold text-xl">
                    Apakah Anda yakin Ingin menghapus data ini?, data anda tidak
                    akan bisa dipulihkan!
                </p>
                <DangerButton onClick={() => console.log("hapus")} className="mt-4 mr-4">
                    Hapus Sekarang
                </DangerButton>
                <button onClick={() => setDeleteModal(false)}>Kembali</button>
            </Modal>
            <div className="shadow-lg rounded-xl w-full relative">
                <div className="absolute top-4 right-4 flex gap-2 items-center">
                    <button onClick={() => setEditModal(true)} className="p-2 bg-white rounded-full hover:bg-gray-400">
                        <Edit />
                    </button>
                    <button onClick={() => setDeleteModal(true)} className="p-2 bg-white rounded-full hover:bg-gray-400">
                        <Delete />
                    </button>
                </div>
                <img
                    src={bannerImage}
                    className="object-cover w-full h-[32rem] rounded-t-xl"
                />
                <div className="p-4">
                    <h2 className="text-2xl font-bold">
                        Kegiatan Ibu-ibu cantik yang ada di desa Triharjo
                    </h2>
                    <p className="text-[1.1rem] mb-10">
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Saepe suscipit perspiciatis eum dolorum quos
                        accusamus laborum perferendis, cum est ducimus?
                    </p>
                    <hr />
                    <footer>
                        <p className="text-xl font-semibold mt-2">
                            Tanggal Mulai Kegiatan :
                        </p>
                        <p className="text-md">
                            <span>23 - 11 - 2024</span>
                        </p>
                    </footer>
                </div>
            </div>
        </>
    );
}
