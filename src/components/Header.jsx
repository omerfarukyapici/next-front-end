import Link from "next/link";

const Header = () => {
    return (
        <header className="flex justify-center text-white">
            <div className="flex justify-between w-main_w bg-deneme  ">
                <div>
                    <div className=" m-main_m">
                        <Link href="/">
                            <a>Home</a>
                        </Link>
                    </div>
                </div>
                <div className="flex">
                    <div className=" m-main_m">
                        <Link href="/Projects">
                            <a>Projects</a>
                        </Link>
                    </div>
                    <div className=" m-main_m">
                        <Link href="/Shares">
                            <a>Shares</a>
                        </Link>
                    </div>
                    <div className=" m-main_m">
                        <Link href="/About">
                            <a>About</a>
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    );
}
export default Header;  