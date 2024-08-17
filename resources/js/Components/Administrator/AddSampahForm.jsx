import { useForm } from "@inertiajs/react";
import TextInput from "../TextInput";
import InputLabel from "../InputLabel";
import InputError from "../InputError";
import Button from "../Button";
import Dropdown from "./Dropdown";
import { useEffect } from "react";
import swal from 'sweetalert';

export default function AddSampahForm({ dataNasabah, dataKategori, dataEdit, onClose}) {
    const { data, setData, post, processing, errors,  reset } = useForm({
        nasabah: "",
        kategori: "",
        totalSampah: "",
    });

	const sortedNasabah = dataNasabah.sort((a, b) => (a.full_name > b.full_name))
	const sortedKategori = dataKategori.sort((a, b) => (a.nama_kategori > b.nama_kategori))

	useEffect(() => {
        if (dataEdit) {
            setData({
				nasabah : dataEdit.user.id,
				kategori : dataEdit.kategori.id,
				totalSampah : dataEdit.total_sampah
			});
        }
    }, [dataEdit]);
    const submit = (e) => {
        e.preventDefault();
        if (dataEdit) {
            post(route("administrator.kelolaSampah.update", { id: dataEdit.id }), { // Menambahkan id di sini
                onError: () => {
                    swal({
						title: "Gagal",
						text: "Data Gagal DiUpdate!, Cek koneksimu atau coba ulang menambahkan data",
						icon: "error",
						buttons : {
							confirm : {text:'Lanjutkan',className:'bg-primary'},
						}
					});
                },
                onSuccess: () => {
                    swal({
						title: "Berhasil",
						text: "Data Berhasil DiUpdate!",
						icon: "success",
						buttons : {
							confirm : {text:'Lanjutkan',className:'bg-primary'},
						}
					});
					onClose();
                },
            });
        } else {
            post(route("administrator.kelolaSampah.store"), {
                onError: () => {
                    swal({
						title: "Gagal",
						text: "Data Gagal Ditambahkan!, Cek koneksimu atau coba ulang menambahkan data",
						icon: "error",
						buttons : {
							confirm : {text:'Lanjutkan',className:'bg-primary'},
						}
					});
                },
                onSuccess: () => {
                    setData(prevData => ({
                        ...prevData,
                        totalSampah: "",
                        kategori: "",
                    }));
					swal({
						title: "Success",
						text: "Data Berhasil Ditambahkan!",
						icon: "success",
						buttons : {
							confirm : {text:'Lanjutkan',className:'bg-primary'},
						}
					});
                },
            });
        }
    }

    return (
        <>
            <form onSubmit={submit} className="w-full">
                <div>
                    <InputLabel value="Pilih Nasabah"/> 
                    <Dropdown
                        placeholder="Masukkan Nasabah"
                        value={data.nasabah}
                        menuItems={sortedNasabah?.map((nasabah) => ({
                            value: nasabah.id,
                            label: nasabah.full_name
                        }))}
                        onChange={(e) => setData("nasabah", e.target.value)}
                    />
                    <InputError message={errors.nasabah} />
                </div>
                <div>
                    <InputLabel value="Pilih Kategori Sampah" />
                    <Dropdown
                        placeholder="Masukkan Kategori Sampah"
                        value={data.kategori}
                        menuItems={sortedKategori?.map((kategori) => ({
                            value: kategori.id,
                            label: kategori.nama_kategori
                        }))}
                        onChange={(e) => setData("kategori", e.target.value)}
                    />
                    <InputError message={errors.kategori} />
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
                    {dataEdit ? "Edit Data Sampah" : "Tambah Data Sampah"}
                </Button>
            </form>
        </>
    );

}
