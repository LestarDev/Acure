import { discordURL, facebookURL, instagramURL, tiktokURL } from "../../config/main"
import PageType, { SetPageType } from "../../types/PageType"
import Line from "../Line/Line"
import Logo from "../Logo/Logo"
import "./Footer.css"

const Footer = ({}: PageType) => {

    return <footer>
        <div>
            <div>
                <Logo />
            </div>
            <div>
                <span className="primary">MENU</span>
                <div>
                    <a href="./"><span>STRONA GŁÓWNA</span></a>
                    <a href="#voucher"><span>VOUCHER</span></a>
                    <a href="./sklep/"><span>SKLEP</span></a>
                    <a href="./regulamin/"><span>REGULAMIN</span></a>
                </div>
            </div>
            <div>
                <span className="primary">SOCIAL MEDIA</span>
                <div>
                    <a href={discordURL}><span>DISCORD</span></a>
                    <a href={tiktokURL}><span>TIKTOK</span></a>
                    <a href={instagramURL}><span>INSTAGRAM</span></a>
                    <a href={facebookURL}><span>FACEBOOK</span></a>
                </div>
            </div>
        </div>
        <Line />
        <div>
            <span>PL: Serwer acure.pl nie jest w żaden sposób powiązany z firmą MOJANG, AB.</span>
            <div className="separator"></div>
            <span>EN: The acure.pl server is in no way affillated with Mojang, AB.</span>
        </div>
        <Line />
        <div>
            <span>Copyright 2024 &copy; ACURE.PL - Serwer Minecraft | WSZELKIE PRAWA ZASTRZEŻONE</span>
        </div>
    </footer>
}

export default Footer