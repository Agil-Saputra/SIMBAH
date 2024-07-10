import Button from "@/Components/Button";
import { Link } from "@inertiajs/react";

export default function Guest({ children }) {
    return (
        <div className="grid min-h-screen place-items-center items place ">
            <Button className="absolute top-0 left-0 m-5">
                <Link href={route("/")}>Kembali Ke Beranda</Link>
            </Button>

            <div className="w-full px-6 py-4 overflow-hidden sm:max-w-md sm:rounded-lg">
                <p className="mb-6 text-4xl font-bold uppercase text-primary">
                    Atras
                </p>
                {children}
            </div>
        </div>
    );
}
