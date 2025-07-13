import React, { useState, useEffect } from "react";
import { Edit, Trash2, Filter } from "lucide-react";
import { success, error } from '@/lib/notify';
import { router } from '@inertiajs/react';
import axios from "axios";
import Modal from "../Modal";
import DangerButton from "../DangerButton";
import AddSampahForm from "./AddSampahForm";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/Components/ui/table";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/Components/ui/select";

export default function ModernSampahTable({
    headers,
    rows,
    tableTitle,
    keys,
    dataNasabah,
    dataKategori,
}) {
    const [deleteModal, setDeleteModal] = useState(false);
    const [editModal, setEditModal] = useState(false);
    const [id, setId] = useState("");
    const [data, setData] = useState([]);
    const [sortedRows, setSortedRows] = useState(rows);

    const formatHeaderName = (headerName) =>
        headerName.replace(/([a-z])([A-Z])/g, "$1 $2");

    const showDeleteModal = (id) => {
        setId(id);
        setDeleteModal(true);
    };

    const editAction = (data) => {
        setData(data);
        setEditModal(true);
    };

    const handleDelete = () => {
        const routeDelete = `/administrator/kelola-sampah/delete/${id}`;
        router.post(
            routeDelete,
            {
                _method: "delete",
            },
            {
                onSuccess: () => {
                    success("Data Berhasil Dihapus!");
                    setDeleteModal(false);
                },
                onError: () => {
                    error("Gagal menghapus data!");
                }
            }
        );
    };

    const handleSortChange = (value) => {
        axios
            .get(route(`administrator.kelolaSampah.${value}`))
            .then((response) => {
                setSortedRows(response.data.sampah);
            })
            .catch((error) => {
                error("Gagal mengurutkan data!");
                console.error(error);
            });
    };

    useEffect(() => {
        setSortedRows(rows);
    }, [rows]);

    return (
        <>
            {/* Delete Confirmation Modal */}
            <Modal show={deleteModal} onClose={() => setDeleteModal(false)}>
                <div className="p-6">
                    <div className="flex items-center justify-center w-12 h-12 mx-auto mb-4 bg-red-100 rounded-full">
                        <Trash2 className="w-6 h-6 text-red-600" />
                    </div>
                    <h3 className="text-lg font-semibold text-center text-gray-900 mb-2">
                        Konfirmasi Penghapusan
                    </h3>
                    <p className="text-sm text-gray-600 text-center mb-6">
                        Apakah Anda yakin ingin menghapus data ini? Data yang sudah dihapus tidak dapat dipulihkan.
                    </p>
                    <div className="flex space-x-3">
                        <DangerButton 
                            onClick={handleDelete} 
                            className="flex-1 py-3 bg-red-500 hover:bg-red-600 text-white font-semibold rounded-xl transition-all duration-300"
                        >
                            Hapus Sekarang
                        </DangerButton>
                        <button 
                            onClick={() => setDeleteModal(false)}
                            className="flex-1 py-3 bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold rounded-xl transition-all duration-300"
                        >
                            Batal
                        </button>
                    </div>
                </div>
            </Modal>

            {/* Edit Modal */}
            <Modal show={editModal} onClose={() => setEditModal(false)}>
                <div className="p-6">
                    <h2 className="text-2xl font-bold text-gray-800 mb-6">Edit Data Sampah</h2>
                    <AddSampahForm
                        onClose={() => setEditModal(false)}
                        dataNasabah={dataNasabah}
                        dataKategori={dataKategori}
                        dataEdit={data}
                    />
                </div>
            </Modal>

            {/* Header with Sort Filter */}
            <div className="flex items-center justify-between w-full mb-6">
                <h1 className="text-2xl font-bold text-gray-800">{tableTitle}</h1>
                <div className="flex items-center space-x-3">
                    <Filter className="w-5 h-5 text-gray-500" />
                    <Select onValueChange={handleSortChange}>
                        <SelectTrigger className="w-64">
                            <SelectValue placeholder="Urutkan Data" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="sort_by_date">
                                Tanggal (Terbaru)
                            </SelectItem>
                            <SelectItem value="sort_by_nama_nasabah_asc">
                                Nama Nasabah (A - Z)
                            </SelectItem>
                            <SelectItem value="sort_by_nama_nasabah_desc">
                                Nama Nasabah (Z - A)
                            </SelectItem>
                            <SelectItem value="total_sampah_desc">
                                Total Sampah (Terberat)
                            </SelectItem>
                            <SelectItem value="total_sampah_asc">
                                Total Sampah (Teringan)
                            </SelectItem>
                        </SelectContent>
                    </Select>
                </div>
            </div>

            {/* Modern Table */}
            <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
                <Table>
                    <TableHeader>
                        <TableRow className="bg-gray-50 hover:bg-gray-50">
                            <TableHead className="font-semibold text-gray-900 w-16">No</TableHead>
                            {headers.map((header, index) => (
                                <TableHead key={index} className="font-semibold text-gray-900 capitalize">
                                    {formatHeaderName(header)}
                                </TableHead>
                            ))}
                            <TableHead className="font-semibold text-gray-900 text-center w-24">Aksi</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {sortedRows.length > 0 ? (
                            sortedRows.map((row, rowIndex) => (
                                <TableRow 
                                    key={rowIndex} 
                                    className="hover:bg-gray-50 transition-colors duration-200"
                                >
                                    <TableCell className="font-medium text-gray-900">
                                        {rowIndex + 1}
                                    </TableCell>
                                    {keys?.map((key, cellIndex) => (
                                        <TableCell key={cellIndex} className="text-gray-700">
                                            {key === "kategori" && row.kategori
                                                ? row.kategori.nama_kategori
                                                : ""}
                                            {key === "user" && row.user
                                                ? row.user.full_name
                                                : ""}
                                            {key === "total_sampah" &&
                                                row[key] + " Kg"}
                                            {key !== "kategori" &&
                                                key !== "user" &&
                                                key !== "total_sampah" &&
                                                row[key]}
                                        </TableCell>
                                    ))}
                                    <TableCell>
                                        <div className="flex items-center justify-center space-x-2">
                                            <button
                                                onClick={() => editAction(row)}
                                                className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors duration-200"
                                                title="Edit"
                                            >
                                                <Edit className="w-4 h-4" />
                                            </button>
                                            <button
                                                onClick={() => showDeleteModal(row.id)}
                                                className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors duration-200"
                                                title="Hapus"
                                            >
                                                <Trash2 className="w-4 h-4" />
                                            </button>
                                        </div>
                                    </TableCell>
                                </TableRow>
                            ))
                        ) : (
                            <TableRow>
                                <TableCell 
                                    colSpan={headers.length + 2} 
                                    className="text-center py-12 text-gray-500"
                                >
                                    <div className="flex flex-col items-center space-y-2">
                                        <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
                                            <Trash2 className="w-6 h-6 text-gray-400" />
                                        </div>
                                        <p className="text-lg font-medium">Belum ada data sampah</p>
                                        <p className="text-sm">Data akan muncul setelah Anda menambahkannya</p>
                                    </div>
                                </TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </div>
        </>
    );
}
