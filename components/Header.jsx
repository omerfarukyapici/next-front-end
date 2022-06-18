import Link from "next/link";

const Header = () => {
    return (
        <div className="flex justify-between">
            <div>
                <Link href="/">
                    <a>Home</a>
                </Link>
                <Link href="/Projects">
                    <a>Projects</a>
                </Link>
                <Link href="/Shares">
                    <a>Shares</a>
                </Link>
                <Link href="/About">
                    <a>About</a>
                </Link>
            </div>
        </div>
    );
}
export default Header;  