import { useState, useEffect } from "react";
// Assets
import binIlustration from "../../assets/bin-Ilustration.png";
import Baloon from "../../assets/baloon.png";
// import recycle from "../../assets/recycle.svg";
// import data from "../../assets/data.svg";
// import menu from "../../assets/menu.svg";
import logo from "../../assets/logo.png";
import heroVideo from "../../assets/hero-vid.mp4";
import fotokegiatan1 from "../../assets/kegiatan1.jpg";
import fotoVisiMisi from "../../assets/visimisi.jpg";
// Components
// import OperationalCard from "@/Components/OperationalCard";
import Button from "@/Components/Button";
import Heading from "@/Components/Heading";
import { Link, Head } from "@inertiajs/react";
import {
    IoMenu,
    IoClose,
    IoArrowDownCircle,
    IoArrowUpCircle,
} from "react-icons/io5";

export default function HomePage({ auth }) {
    const [showNav, setShowNav] = useState(false);

    function handelToggle() {
        {
            setShowNav(!showNav);
        }
    }

	useEffect(() => {
        document.body.classList.add("bg-[#ffffff]");
        document.body.classList.remove("bg-[#F3F4F6]");
    }, []);

    // this is mock data for stats section
	const menus = [
        {
            title: "Beranda",
            route: "/",
        },
        {
            title: "Tentang Kami",
            route: "#about",
        },
        {
            title: "Bantuan",
            route: "#faq",
        },
    ];
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
            name: "Total Berat Sampah",
            total: 839,
        },
        {
            name: "Nasabah",
            total: 45,
        },
    ];
    const activities = [
        {
            title: "Sosialisasi Pengelolaan Sampah Terpadu",
            description:
                "Dalam Kegiatan ini kami melakukan sosialisasi terkait pengelolaan sampah terpadu kepada masyarakat Desa Triharjo Sleman Yogyakarta, kegiatan ini kami lakukan untuk mengatasi permasalahan sampah yang ada di sekitar Desa Triharjo. ",
            bannerImage: fotokegiatan1,
            date: "5 Agustus 2024",
        },
    ];
    // const dataSampah = [
    //     {
    //         title: "daur ulang",
    //         image: recycle,
    //         description:
    //             "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione facilis esse vel hic incidunt asperiores labore quos est expedita obcaecati.",
    //         data: [],
    //     },
    //     {
    //         title: "daur ulang",
    //         image: data,
    //         description:
    //             "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione facilis esse vel hic incidunt asperiores labore quos est expedita obcaecati.",
    //         data: [],
    //     },
    //     {
    //         title: "daur ulang",
    //         image: menu,
    //         description:
    //             "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione facilis esse vel hic incidunt asperiores labore quos est expedita obcaecati.",
    //         data: [],
    //     },
    // ];
    const [faqs, setFaqs] = useState([
        {
            question: "Bagaimana Cara Setor Sampah?",
            answer: "Mampir aja ke posko kami, ya! Petugas kami siap bantuin kamu dari awal sampai akhir.",
            open: false,
        },
        {
            question: "Apa Benefit yang saya dapatkan?",
            answer: "Dengan menyetorkan sampah, Anda turut berkontribusi dalam menjaga lingkungan agar tetap bersih dan sehat dalam kehidupan sehari-hari, Anda akan mendapat manfaat yang sangat berarti.",
            open: false,
        },
        {
            question:
                "Bagaimana cara memastikan sampah tidak mencemari lingkungan sekitar?",
            answer: "Kami memiliki prosedur ketat dalam pengelolaan sampah, mulai dari pengumpulan hingga pengolahan akhir. Semua proses dilakukan sesuai dengan standar lingkungan yang berlaku. Kami juga bekerja sama dengan lembaga terkait untuk memastikan limbah hasil pengolahan tidak mencemari lingkungan.",
            open: false,
        },
        {
            question: "Apa yang membuat Atras Berbeda dengan yang lain?",
            answer: "Kami tidak hanya mengelola sampah, tetapi juga mendaur ulang semaksimal mungkin untuk mengurangi dampak lingkungan. Berbeda dengan layanan lain, kami berkomitmen untuk memberikan solusi pengelolaan sampah yang berkelanjutan",
            open: false,
        },
        {
            question: "Jenis sampah apa saja yang bisa dikelola oleh Atras?",
            answer: "Layanan kami menerima berbagai jenis sampah, mulai dari sampah organik (sisa makanan, daun-daun kering), anorganik (plastik, kertas, kaleng), hingga sampah B3 (baterai bekas, lampu fluorescent) dengan syarat dan ketentuan tertentu. Kami memiliki fasilitas pengolahan yang lengkap untuk mengelola setiap jenis sampah secara terpisah.",
            open: false,
        },
        {
            question:
                "Bagaimana cara memastikan sampah tidak mencemari lingkungan sekitar?",
            answer: "Kami memiliki prosedur ketat dalam pengelolaan sampah, mulai dari pengumpulan hingga pengolahan akhir. Semua proses dilakukan sesuai dengan standar lingkungan yang berlaku. Kami juga bekerja sama dengan lembaga terkait untuk memastikan limbah hasil pengolahan tidak mencemari lingkungan",
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
                    <Link href="/">
                        <img
                            src={logo}
                            alt="atras logo"
                            className="md:w-[8rem] w-[5rem]"
                        />
                    </Link>
                    <div className="hidden gap-12 lg:flex ">
                        {menus.map((menu, index) => {
                            return (
                                <a
                                    key={index}
                                    href={menu.route}
                                    className="text-lg font-bold text-black"
                                >
                                    {menu.title}
                                </a>
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
                                <Link href={route("login")}>
                                    <Button>Log in</Button>
                                </Link>

                                <Link href={route("register")}>
                                    <Button type="secondary">Register</Button>
                                </Link>
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
                                        href={menu.route}
                                        className="text-lg font-bold text-black"
                                    >
                                        {menu.title}
                                    </Link>
                                );
                            })}

                            {auth.user ? (
                                <Link href={route("dashboard")}>
                                    <Button>Dashboard</Button>
                                </Link>
                            ) : (
                                <>
                                    <Link href={route("login")}>
                                        <Button>Log in</Button>
                                    </Link>

                                    <Link href={route("register")}>
                                        <Button type="secondary">
                                            Register
                                        </Button>
                                    </Link>
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

            <section className="h-fit w-screen bg-gray-200 relative">
                <video autoPlay muted loop id="myVideo">
                    <source src={heroVideo} type="video/mp4" />
                </video>
            </section>

            <section className="container flex gap-4 justify-between flex-col lg:flex-row mt-10" >
                <img
                    src={binIlustration}
                    alt="Trash Bin Ilustration"
                    class="max-w-[40rem] object-cover h-auto"
                />
                <div className="py-10 md:pl-10 flex flex-col gap-4">
                    <h1 className="text-4xl font-bold ">
                        Yuk, bersama kita bersihkan Indonesia! Jadilah bagian
                        dari solusi
                    </h1>
                    <p>
                        Ayo Bergabung Menjadi individu yang memiliki kesadaran
                        akan permasalahan persampahan dan ingin menjadi bagian
                        dalam solusi mewujudkan Indonesia Bebas Sampah
                    </p>
                    <Link href={route("register")}>
                        <Button className="w-fit">Daftar Sekarang</Button>
                    </Link>
                </div>
            </section>
            {/* Statistik */}
            <section className="container mt-32 text-center" >
                <Heading
                    title="Statistik"
                    description="Berikut adalah rincian data sampah yang berhasil kami tangani."
                />
                <div className="grid mt-12 md:grid-cols-2 gap-7">
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
            {/* Kegiatan */}
            <section className="container mt-32" id="about">
                <Heading
                    title="Gerakan Bebas Sampah"
                    description="Bergabunglah dalam berbagai gerakan bebas sampah kami yang ada di desa Triharjo."
                />

                <div
                    className={
                        "grid grid-flow-col gap-10 pb-10 mt-16 px-2 overflow-auto overflow-x-scroll overflow-y-hidden no-scrollbar snap-x snap-mandatory snap-always [mask-image:_linear-gradient(to_right,transparent_0,_black_0px,_black_calc(100%-0px),transparent_100%)] w-full " +
                        (activities.length <= 3 && "lg:justify-center")
                    }
                >
                    {activities.map((item, index) => {
                        return (
                            <div
                                key={index}
                                className="shadow-lg rounded-xl snap-end snap-always w-full"
                            >
                                <img
                                    src={item.bannerImage}
                                    alt={item.title}
                                    className="object-cover w-full h-[32rem] rounded-t-xl"
                                />
                                <div className="p-4">
                                    <h2 className="text-2xl font-bold">
                                        {item.title}
                                    </h2>
                                    <p className="text-[1.1rem] mb-10">
                                        {item.description}
                                    </p>
                                    <hr />
                                    <footer>
                                        <p className="text-xl font-semibold mt-2">
                                            Tanggal Kegiatan :
                                        </p>
                                        <p className="text-md">
                                            <span>{item.date}</span>
                                        </p>
                                    </footer>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </section>
            {/* Data Operasional Sampah */}
            {/* <section className="container mt-32">
                <Heading
                    title="Data Operasional Sampah"
                    description="Ikut berbagai gerakan Indonesia bebas sampah "
                />
                <div className="flex items-center max-md:flex-col justify-between gap-10">
                    {dataSampah.map((item, index) => (
                        <OperationalCard
                            title={item.title}
                            image={item.image}
                            desc={item.description}
                        />
                    ))}
                </div>
            </section> */}
            {/* Visi Misi  */}
            {/* <section className="container mt-32">
                <Heading
                    title="Visi dan Misi Atras"
                    description="Berikut Komitmen yang kami junjung dan menjadi pedoman kami mewujudkan lingkungan Bebas Sampah!"
                />
                <div className="grid md: grid-cols-2 justify-center mt-10 gap-16 md:flex-row flex-col">
                    <img
                        src={fotoVisiMisi}
                        alt=""
                        className="object-cover w-full rounded-lg"
                    />
                    <div >
                        <h1 className="text-[2rem] font-bold">Visi</h1>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Est hic quod obcaecati excepturi libero
                            dolorum dicta adipisci in, repellendus eveniet.
                        </p>
                        <h1 className="text-[2rem] font-bold">Misi</h1>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Est hic quod obcaecati excepturi libero
                            dolorum dicta adipisci in, repellendus eveniet.
                        </p>
                    </div>
                </div>
            </section> */}
            {/* Frequently Asked Questions  */}
            <section className="container mt-32" id="faq">
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

            <footer className="grid place-items-center mt-16 bg-slate-50 font-bold">
                ATRAS - Copyright@2024
            </footer>
        </>
    );
}
