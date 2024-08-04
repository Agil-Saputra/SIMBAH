import React from "react";
import { useForm } from "@inertiajs/react";
import Modal from "../Modal";
import TextInput from "../TextInput";
import InputLabel from "../InputLabel";
import InputError from "../InputError";
import Button from "../Button";

export default function ModifyNasabahModal({ show, onClose, type, id}) {
    const { data, setData, post, processing, errors, reset } = useForm({
        noTelepon: "",
        namaLengkap: "",
		password: "",
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
            <form onSubmit={submit}>
                <div>
                    <InputLabel htmlFor="noTelepon" value="No Telepon" />
                    <TextInput
                        id="noTelepon"
						type="number"
                        name="noTelepon"
                        placeholder="Masukkan No Telepon Nasabah"
                        value={data.noTelepon}
                        className="block w-full mt-2"
                        isFocused={true}
                        onChange={(e) => setData("noTelepon", e.target.value)}
                    />

                    <InputError message={errors.noTelepon} className="mt-2" />
                </div>
                <div>
                    <InputLabel htmlFor="namaLengkap" value="Nama Lengkap" />
                    <TextInput
                        id="namaLengkap"
                        name="namaLengkap"
                        placeholder="Masukkan Nama Lengkap Nasabah"
                        value={data.namaLengkap}
                        className="block w-full mt-2"
                        isFocused={true}
                        onChange={(e) => setData("namaLengkap", e.target.value)}
                    />

                    <InputError message={errors.noTelepon} className="mt-2" />
                </div>
                <div>
                    <InputLabel htmlFor="password" value="Password" />
                    <TextInput
                        id="password"
                        type="password"
                        name="password"
                        placeholder="Masukkan Password Nasabah"
                        value={data.password}
                        className="block w-full mt-2"
                        isFocused={true}
                        onChange={(e) => setData("password", e.target.value)}
                    />
                    <InputError message={errors.noTelepon} className="mt-2" />
                </div>

                <Button className="w-full mt-6 mb-3" disabled={processing}>
                    {type == "edit" ? "Edit Nasabah" : "Tambah Nasabah"}
                </Button>
            </form>
        </Modal>
    );
}
