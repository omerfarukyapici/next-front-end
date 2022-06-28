import Link from "next/link";

const Footer = () => {
    return (
        <footer className="flex justify-center bg-footerHeaderBg text-footerHeaderColor py-3">
            <div className="flex justify-center w-main_w ">
                <div className="flex justify-between w-[130px]">
                    <div className=" m-main_m opacity-75 hover:opacity-100">
                        <Link href="https://github.com/omerfarukyapici" >
                            <a className="github" target="_blank"></a>
                        </Link>
                    </div>
                    <div className=" m-main_m pt-1 opacity-75 hover:opacity-100">
                        <Link href="https://twitter.com/DeveloperOmer">
                            <a className="twitter" target="_blank"></a>
                        </Link>
                    </div>
                    <div className=" m-main_m opacity-75 hover:opacity-100">
                        <Link href="https://www.linkedin.com/in/%C3%B6mer-faruk-yap%C4%B1c%C4%B1-57b5b11b6/">
                            <a className="linkedin" target="_blank"></a>
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
export default Footer;  