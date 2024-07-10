import { Link, Head } from "@inertiajs/react";
import Button from "@/Components/Button";
import {
    IoMenu,
    IoClose,
    IoArrowDownCircle,
    IoArrowUpCircle,
} from "react-icons/io5";
import { useState } from "react";
import binIlustration from "../../assets/bin-Ilustration.png";
import Baloon from "../../assets/baloon.png";
// Components
import Heading from "@/Components/Heading";

export default function HomePage({ auth }) {
    const [showNav, setShowNav] = useState(false);
    const menus = [
        {
            title: "Beranda",
            route: "/",
        },
        {
            title: "Tentang",
            route: "/",
        },
        {
            title: "Bantuan",
            route: "/",
        },
        {
            title: "Kontak",
            route: "/",
        },
    ];

    function handelToggle() {
        {
            setShowNav(!showNav);
        }
    }

    // this is mock data for stats section
    const stats = [
        {
            name: "Jenis Sampah",
            total: 15,
        },
        {
            name: "Kegiatan",
            total: 12,
        },
        {
            name: "Daur Ulang",
            total: 123,
        },
        {
            name: "Total Berat Sampah",
            total: 839,
        },
        {
            name: "Total Sampah",
            total: 455,
        },
        {
            name: "Nasabah",
            total: 45,
        },
    ];
    const activities = [
        {
            title: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, facilis.",
            description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, facilis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, facilis.",
            bannerImage: Baloon,
            startDate: Date.now(),
            endDate: Date.now(),
        },
        {
            title: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, facilis.",
            description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, facilis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, facilis.",
            bannerImage: Baloon,
            startDate: Date.now(),
            endDate: Date.now(),
        },
        {
            title: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, facilis.",
            description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, facilis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, facilis.",
            bannerImage: Baloon,
            startDate: Date.now(),
            endDate: Date.now(),
        },
       
       
    ];
    const dataSampah = [
        {
            title: "daur ulang",
            icon: "total sampah",
            description: "list sampah",
            data: [],
        },
        {
            title: "daur ulang",
            icon: "total sampah",
            description: "list sampah",
            data: [],
        },
        {
            title: "daur ulang",
            icon: "total sampah",
            description: "list sampah",
            data: [],
        },
    ];
    const [faqs, setFaqs] = useState([
        {
            question: "Bagaimana Cara Setor Sampah?",
            answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni laudantium repudiandae quos iusto assumenda voluptas! Vero aliquid a dolorem optio.",
            open: false,
        },
        {
            question: "Apa Benefit yang saya dapatkan?",
            answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni laudantium repudiandae quos iusto assumenda voluptas! Vero aliquid a dolorem optio.",
            open: false,
        },
        {
            question: "Apa Keuntungan Menggunakan Atras?",
            answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni laudantium repudiandae quos iusto assumenda voluptas! Vero aliquid a dolorem optio.",
            open: false,
        },
        {
            question: "Apa yang membuat Atras Berbeda dengan yang lain?",
            answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni laudantium repudiandae quos iusto assumenda voluptas! Vero aliquid a dolorem optio.",
            open: false,
        },
    ]);

    const handleToggle = (index) => {
        setFaqs(
            faqs.map((faq, i) => {
                if (i === index) {
                    faq.open = !faq.open;
                } else {
                    faq.open = false;
                }

                return faq;
            })
        );
    };

    return (
        <>
            <Head title="Beranda" />
            <nav className="sticky top-0 z-50 bg-white shadow-md">
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
                        className={
                            "lg:hidden absolute bg-white top-16 z-40 origin-top left-0 shadow-md w-full transtion-all ease-in-out duration-100 " +
                            (showNav ? "scale-y-100" : "scale-y-0")
                        }
                    >
                        <div className="container flex flex-col gap-4 py-8">
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
                        {showNav ? <IoClose size={30} /> : <IoMenu size={30} />}
                    </button>
                </div>
            </nav>

            <section class="h-screen w-screen bg-blue-200"></section>

            <section class="container flex gap-4 justify-between flex-col lg:flex-row">
                <img
                    src={binIlustration}
                    alt="Trash Bin Ilustration"
                    class="max-w-[40rem] object-cover h-auto"
                />
                <div class="py-10 pl-10 flex flex-col gap-4">
                    <h1 class="text-4xl font-bold ">
                        Ayo Bergabung Bersama Kami
                    </h1>
                    <p>
                        Aktor ialah individu yang memiliki kesadaranakan
                        permasalahan persampahan dan ingin menjadi bagian dalam
                        solusi mewujudkan Indonesia Bebas Sampah.
                    </p>
                    <Button className="w-fit">
                        <Link href={route("register")}>Daftar Sekarang</Link>
                    </Button>
                </div>
            </section>

            <section className="container mt-32 text-center">
                <Heading
                    title="Statistik"
                    description="Ikut berbagai gerakan Indonesia bebas sampah"
                />
                <div className="grid mt-12 md:grid-cols-3 gap-7">
                    {stats.map((stat, index) => {
                        return (
                            <div
                                key={index}
                                className="p-4 text-center bg-[#F1F1F1] rounded-lg "
                            >
                                <h1 className="text-[2.5rem] text-primary font-bold">
                                    {stat.total}
                                </h1>
                                <p className="text-[1rem] text-[#777777]">
                                    {stat.name}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </section>

            <section className="container mt-32">
                <Heading
                    title="Gerakan Indonesia Bebas Sampah"
                    description="Ikut berbagai gerakan Indonesia bebas sampah "
                />

                <div className={"grid grid-flow-col  gap-10 px-5 pb-10 mt-16 overflow-auto overflow-x-scroll overflow-y-hidden no-scrollbar snap-x snap-mandatory snap-always [mask-image:_linear-gradient(to_right,transparent_0,_black_32px,_black_calc(100%-64px),transparent_100%)] " + (activities.length <= 3 && "lg:justify-center")}>
                    {activities.map((item, index) => {
                        return (
                            <div
                                key={index}
                                className="shadow-lg rounded-xl snap-end snap-always w-80"
                            >
                                <img
                                    src={item.bannerImage}
                                    alt={item.title}
                                    className="object-cover w-full h-48 rounded-t-xl"
                                />
                                <div className="p-4">
                                    <h2 className="text-xl font-medium">
                                        {item.title}
                                    </h2>
                                    <p className="text-[1rem] mb-10">
                                        {item.description}
                                    </p>
                                    <hr />
                                    <footer>
                                        <p className="text-lg font-semibold">
                                            Periode :
                                        </p>
                                        <p className="text-sm">
                                            <span>{item.startDate}</span> -{" "}
                                            <span>{item.endDate}</span>
                                        </p>
                                    </footer>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </section>

            <section className="container mt-32">
                <Heading
                    title="Data Operasional Sampah"
                    description="Ikut berbagai gerakan Indonesia bebas sampah "
                />
            </section>

            <section className="container mt-32">
                <Heading
                    title="Visi dan Misi Atras"
                    description="Ikut berbagai gerakan Indonesia bebas sampah "
                />
            </section>

            <section className="container mt-32">
                <Heading
                    title="Bantuan"
                    description="Apakah Anda masih bingung dengan Atras?, Berikut Beberapa Pertanyaan yang Sering ditanyakan pada kami "
                />
                <div className="grid mt-16 place-items-center">
                    <div className="grid gap-6">
                        {faqs.map((faq, index) => {
                            return (
                                <div
                                    key={index}
									onClick={() => handleToggle(index)}
                                >
                                    <div className="relative z-30 flex items-center justify-between w-full p-4 rounded-lg bg-primary">
                                        <p className="text-xl font-semibold text-left text-white">
                                            {faq.question}
                                        </p>
                                        <div>
                                            {faq.open ? (
                                                <IoArrowUpCircle
                                                    size={35}
                                                    className="text-white"
                                                />
                                            ) : (
                                                <IoArrowDownCircle
                                                    size={35}
                                                    className="text-white"
                                                />
                                            )}
                                        </div>
                                    </div>

                                    <div
                                        className={
                                            "text-sm w-full font-medium text-white -translate-y-2 bg-gray-500 rounded-b-lg -z-10 origin-top transition-all " +
                                            (faq.open ? "h-fit p-4" : " h-0")
                                        }
                                    >
                                        {faq.answer}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            <footer>Atras</footer>
        </>
    );
}
