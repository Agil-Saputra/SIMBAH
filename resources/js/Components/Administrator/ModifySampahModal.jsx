import React from "react";
import { useForm } from "@inertiajs/react";
import Modal from "../Modal";
import TextInput from "../TextInput";
import InputLabel from "../InputLabel";
import InputError from "../InputError";
import Button from "../Button";
import Dropdown from "./Dropdown";

const names = [
    "Oliver Hansen",
    "Van Henry",
    "April Tucker",
    "Ralph Hubbard",
    "Omar Alexander",
    "Carlos Abbott",
    "Miriam Wagner",
    "Bradley Wilkerson",
    "Virginia Andrews",
    "Kelly Snyder",
];
const categories = ["Plastik", "Sampah Makanan", "Besi Tua", "Kardus"];

export default function ModifySampahModal({ show, onClose, type, id }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: "",
        totalSampah: "",
        nasabah: "",
        kategori: "",
    });

    const submit = (e) => {
        e.preventDefault();

        if (type == "edit") {
            post(route("edit"), {
                onError: () => {
                    return;
                },
            });
        } else if (type == "add") {
            post(route("add"), {
                onError: () => {
                    return;
                },
            });
        }
    };

    return (
        <Modal show={show} onClose={onClose}>
            <form onSubmit={submit} className="">
                <div>
                    <InputLabel value="Pilih Nasabah" className="mb-2" />
                    <Dropdown
                        placeholder="Masukkan Nasabah"
                        value={data.nasabah}
                        menuItems={names}
                        onChange={(e) => setData("nasabah", e.target.value)}
                    />
                    <InputError message={errors.nasabah} className="mt-2" />
                </div>
                <div>
                    <InputLabel
                        value="Pilih Kategori Sampah"
                        className="mb-2"
                    />
                    <Dropdown
                        placeholder="Masukkan Kategori Sampah"
                        value={data.kategori}
                        menuItems={categories}
                        onChange={(e) => setData("kategori", e.target.value)}
                    />
                    <InputError message={errors.kategori} className="mt-2" />
                </div>
				<div className="mt-4">
                    <InputLabel
                        htmlFor="totalSampah"
                        value="Total Sampah(Kg)"
                    />
                    <TextInput
                        id="totalSampah"
                        name="totalSampah"
                        type="number"
                        placeholder="Masukkan Total Berat Sampah(Kg)"
                        value={data.totalSampah}
                        className="block w-full mt-2 text-black"
                        autoComplete="current-totalSampah"
                        onChange={(e) => setData("totalSampah", e.target.value)}
                    />

                    <InputError message={errors.password} className="mt-2" />
                </div>
                <Button className="w-full mt-6 mb-3" disabled={processing}>
                    {type == "edit" ? "Edit Data Sampah" : "Tambah Data Sampah"}
                </Button>
            </form>
        </Modal>
    );
}
