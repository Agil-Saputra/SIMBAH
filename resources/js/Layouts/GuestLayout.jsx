import Button from "@/Components/Button";
import { Link, usePage } from "@inertiajs/react";

export default function Guest({ children }) {
    const { component } = usePage();
    return (
        <div className="grid min-h-[80vh] place-items-center items place ">
            {component !== "Administrator/Login" ? (
                <Link href={route("/")}>
                    <Button className="absolute top-0 left-0 m-5">
                        Kembali Ke Beranda
                    </Button>
                </Link>
            ) : null}

            <div className="w-full px-6 py-4 overflow-hidden sm:max-w-md sm:rounded-lg">
                <p className="mb-6 text-4xl font-bold uppercase text-primary">
                    Atras
                </p>
                {children}
            </div>
        </div>
    );
}
