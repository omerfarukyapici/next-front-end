import Link from "next/link";

const Header = () => {
    return (
        <header className="flex justify-center text-white bg-footerHeaderBg text-footerHeaderColor py-4">
            <div className="flex justify-between w-main_w  ">
                <div>
                    <div className=" m-main_m opacity-75 hover:opacity-100">
                        <Link href="/">
                            <a>Home</a>
                        </Link>
                    </div>
                </div>
                <div className="flex ">
                    <div className=" m-main_m opacity-75 hover:opacity-100">
                        <Link href="/Projects">
                            <a>Projects</a>
                        </Link>
                    </div>
                    <div className=" m-main_m opacity-75 hover:opacity-100">
                        <Link href="/Shares">
                            <a>Shares</a>
                        </Link>
                    </div>
                    <div className=" m-main_m opacity-75 hover:opacity-100  ">
                        <Link href="/About" className="">
                            <a>About</a>
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    );
}
export default Header;  