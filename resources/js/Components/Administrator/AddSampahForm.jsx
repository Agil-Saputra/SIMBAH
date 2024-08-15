import { useForm } from "@inertiajs/react";
import TextInput from "../TextInput";
import InputLabel from "../InputLabel";
import InputError from "../InputError";
import Button from "../Button";
import Dropdown from "./Dropdown";
import Modal from "../Modal";
import { useState } from "react";
import { Autocomplete, TextField } from "@mui/material";
import { TaskAlt, Cancel } from "@mui/icons-material";

export default function AddSampahForm({ dataNasabah, dataKategori }) {

    const [isSuccess, setIsSucces] = useState(false);
    const [isError, setIsError] = useState(false);

    const { data, setData, post, processing, errors, reset } = useForm({
        nasabah: "",
        kategori: "",
        totalSampah: "",
    });

    const submit = (e) => {
        e.preventDefault();
        post(route("administrator.kelolaSampah.store"), {
            onError: () => {
                setIsError(true);
            },
            onSuccess: () => {
                setData(prevData => ({
                    ...prevData,
                    totalSampah: "",
                    kategori: "",
                }));
                setIsSucces(true);
            },
        });
    };

    return (
        <>
            <Modal show={isSuccess} onClose={() => setIsSucces(false)}>
                <TaskAlt className="text-green-600 " />
                <h1 className="text-xl font-bold text-green-600">
                    Data Berhasil Ditambahkan
                </h1>
            </Modal>
            <Modal show={isError} onClose={() => setIsSucces(false)}>
                <Cancel className="text-red-600" />
                <h1 className="text-xl font-bold text-red-600">
                    Data Gagal Ditambahkan!, Cek koneksimu atau coba ulang
                    menambahkan data
                </h1>
            </Modal>
            <form onSubmit={submit} className="max-w-[62.5rem]">
                <div>
                    <InputLabel value="Pilih Nasabah" className="mb-2" />
                    <Dropdown
                        placeholder="Masukkan Nama Nasbaah"
                        value={data.nasabah}
                        menuItems={dataNasabah.map((nasabah) => ({
                            value: nasabah.id,
                            label: nasabah.full_name
                        }))}
                        onChange={(e) => setData("nasabah", e.target.value)}
                    />
                    <InputError message={errors.nasabah} className="mt-2" />
                </div>
                <div>
                    <InputLabel value="Pilih Kategori Sampah" className="mb-2" />
                    <Dropdown
                        placeholder="Masukkan Kategori Sampah"
                        value={data.kategori}
                        menuItems={dataKategori.map((kategori) => ({
                            value: kategori.id,
                            label: kategori.nama_kategori
                        }))}
                        onChange={(e) => setData("kategori", e.target.value)}
                    />
                    <InputError message={errors.kategori} className="mt-2" />
                </div>
                <div className="mt-4">
                    <InputLabel htmlFor="totalSampah" value="Total Sampah(Kg)" />
                    <TextInput
                        id="totalSampah"
                        name="totalSampah"
                        type="number" 
                        placeholder="Masukkan Total Berat Sampah(Kg)"
                        value={data.totalSampah}
                        className="block w-full mt-2 text-black"
                        autoComplete="current-totalSampah" required
                        onChange={(e) => setData("totalSampah", e.target.value)}
                    />
                    <InputError message={errors.totalSampah} className="mt-2" />
                </div>
                <Button className="w-full mt-6 mb-3" disabled={processing}>
                    Tambah Data Sampah
                </Button>
            </form>
        </>
    );
}
