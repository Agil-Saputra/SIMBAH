import Button from "@/Components/Button";
import { Link, usePage } from "@inertiajs/react";
import ElevatedContainer from "@/Components/ElevatedContainer";
import logo from "../../assets/logo.png"

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

            <div className="w-full px-6 py-4 overflow-hidden sm:max-w-2xl sm:rounded-lg mt-10">
                <ElevatedContainer>
				<Link href="/" >
                    <img src={logo} alt="atras logo" className="w-[13rem] mx-auto mb-4"  />
                </Link>
				{children}
				</ElevatedContainer>
            </div>
        </div>
    );
}
