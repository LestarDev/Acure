import { TiHome } from "react-icons/ti";
import PageType from "../../types/PageType"
import PageButton from "../PageButton/PageButton"
import { HiTicket } from "react-icons/hi2";
import { FaCartShopping, FaFacebook } from "react-icons/fa6";
import { IoPerson } from "react-icons/io5";
import { FaDiscord, FaInstagram, FaTiktok } from "react-icons/fa";
import { discordURL, facebookURL, instagramURL, tiktokURL } from "../../config/main";

import './NavBar.css'
import Logo from "../Logo/Logo";

const NavBar = ({setPage}: PageType) => {

    return <nav>
        <ul>
            <li>
                <Logo />
            </li>
            <div>
                <li>
                    <PageButton pageName="Strona Główna" setPage={setPage} icon={<TiHome />} />
                </li>
                <li>
                    <PageButton pageName="Voucher" setPage={setPage} icon={<HiTicket />} />
                </li>
                <li>
                    <PageButton pageName="Sklep" setPage={setPage} icon={<FaCartShopping />} />
                </li>
                <li>
                    <PageButton pageName="Login" setPage={setPage} icon={<IoPerson />} />
                </li>
            </div>
            <div>
                <li>
                    <a href={facebookURL}>
                        <FaFacebook />
                    </a>
                </li>
                <li>
                    <a href={tiktokURL}>
                        <FaTiktok />
                    </a>
                </li>
                <li>
                    <a href={instagramURL}>
                        <FaInstagram />
                    </a>
                </li>
                <li>
                    <a href={discordURL}>
                        <FaDiscord />
                    </a>
                </li>
                <input type="checkbox" name="menu" id="menu" />
                <label htmlFor="menu"></label>
                <div>
                    <li>
                        <PageButton pageName="Strona Główna" setPage={setPage} icon={<TiHome />} />
                    </li>
                    <li>
                        <PageButton pageName="Voucher" setPage={setPage} icon={<HiTicket />} />
                    </li>
                    <li>
                        <PageButton pageName="Sklep" setPage={setPage} icon={<FaCartShopping />} />
                    </li>
                    <li>
                        <PageButton pageName="Login" setPage={setPage} icon={<IoPerson />} />
                    </li>
                </div>
            </div>
        </ul>
    </nav>
}

export default NavBar