import { Link, Head } from "@inertiajs/react";
import Button from "@/Components/Button";
import { IoMenu, IoClose } from "react-icons/io5";
import { useState } from "react";

export default function Welcome({ auth }) {
    const [showNav, setShowNav] = useState(false);
    const menus = [
        {
            title: "Beranda",
            route: "dashboard",
        },
        {
            title: "Tentang",
            route: "dashboard",
        },
        {
            title: "Bantuan",
            route: "dashboard",
        },
        {
            title: "Kontak",
            route: "dashboard",
        },
    ];

    function handelToggle() {
        {
            setShowNav(!showNav);
        }
    }
    return (
        <>
            <Head />
            <nav className="sticky top-0 z-50 shadow-md">
                <div className="container flex items-center justify-between py-4">
                    <p className="text-xl font-bold">ATRAS</p>
                    <div className="hidden gap-12 lg:flex ">
                        {menus.map((menu, index) => {
                            return (
                                <Link
                                    key={index}
                                    href={route(menu.route)}
                                    className="text-lg font-bold text-black"
                                >
                                    {menu.title}
                                </Link>
                            );
                        })}
                    </div>
                    <div className="items-center hidden gap-4 lg:flex">
                        {auth.user ? (
                            <Button>
                                <Link href={route("dashboard")}>Dashboard</Link>
                            </Button>
                        ) : (
                            <>
                                <Button>
                                    <Link href={route("login")}>Log in</Link>
                                </Button>

                                <Button type="secondary">
                                    <Link href={route("register")}>
                                        Register
                                    </Link>
                                </Button>
                            </>
                        )}
                    </div>
                    <div
                        class={
                            "lg:hidden absolute bg-white top-16 z-40 origin-top left-0 shadow-md w-full transtion-all ease-in-out duration-100 " +
                            (showNav ? "scale-y-0" : "scale-y-100")
                        }
                    >
                        <div class="container flex flex-col gap-4 py-8">
                            {menus.map((menu, index) => {
                                return (
                                    <Link
                                        key={index}
                                        href={route(menu.route)}
                                        className="text-lg font-bold text-black"
                                    >
                                        {menu.title}
                                    </Link>
                                );
                            })}

                            {auth.user ? (
                                <Button>
                                    <Link href={route("dashboard")}>
                                        Dashboard
                                    </Link>
                                </Button>
                            ) : (
                                <>
                                    <Button>
                                        <Link href={route("login")}>
                                            Log in
                                        </Link>
                                    </Button>

                                    <Button type="secondary">
                                        <Link href={route("register")}>
                                            Register
                                        </Link>
                                    </Button>
                                </>
                            )}
                        </div>
                    </div>
                    <button
                        className="z-50 block p-1 bg-opacity-50 rounded-lg bg-slate-300 hover:bg-opacity-100 lg:hidden"
                        onClick={handelToggle}
                    >
                        {showNav ? <IoMenu size={30} /> : <IoClose size={30} />  }
                    </button>
                </div>
            </nav>
        </>
    );
}
