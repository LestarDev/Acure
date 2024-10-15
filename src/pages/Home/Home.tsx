import { FaCartShopping } from "react-icons/fa6"
import NavBar from "../../components/NavBar/NavBar"
import PageButton from "../../components/PageButton/PageButton"
import PageType from "../../types/PageType"
import "./Home.css"
import SideBar from "../../components/SideBar/SideBar"
import NoSliderCommponent from "../../components/NoSlidderCommponent/NoSliderCommponent"
import ServersType from "../../types/ServersType"
import { TbBrandMinecraft } from "react-icons/tb"
import { GiCrossedSwords } from "react-icons/gi"
import { useEffect, useState } from "react"
import VoucherSection from "../../components/VoucherSection/VoucherSection"
import Line from "../../components/Line/Line"
import Footer from "../../components/Footer/Footer"

const Home = ({setPage}: PageType) => {

    const [ips, setIPs] = useState({} as {[Key: string]: string});

    useEffect(()=>{
        fetch("http://127.0.0.1:5000/ip_duels/").then(res=>res.text()).then((data: string)=>setIPs({
            duels: data
        }));
    },[])

    return <>
        <NavBar setPage={setPage} />
        {/* <SpaceGiver padding={"5rem 0"} /> */}
        <div id="main">
            <main>
                <span className="primary">ACURE.PL</span>
                <p>
                    Nowe, lepsze podejście do świata serwerów
                    &nbsp;
                    <span>Minecraft!</span>
                </p>
                <span>Tworzymy Tryby, który już na zawsze  zapadną Ci w pamięci!</span>
                <div>
                    <PageButton setPage={setPage} pageName="Sklep" icon={<FaCartShopping />} isPrimary={true} />
                    <PageButton setPage={setPage} pageName="DOŁĄCZ DO GRY" isPrimary={false} />
                </div>
            </main>
            <aside>
                <SideBar setPage={setPage} />
            </aside>
        </div>
        {/* <SpaceGiver padding={"5rem 0"} /> */}
        <div className="noSlider">
            <NoSliderCommponent name={"Duels" as ServersType} icon={<GiCrossedSwords />} ip={ips["duels"]}/>
            <NoSliderCommponent name={"OneBlock+" as ServersType} icon={<TbBrandMinecraft />} ip={1} />
            <NoSliderCommponent name="24/7 Support" text="Aktywna Administracja" />
            <NoSliderCommponent name="Aktualizacje" text="Regularne Nowości!" />
            <NoSliderCommponent name="Start" text="10.10.2024" />
        </div>
        <VoucherSection />
        <Line setPage={setPage} isWithSection={true} />
        <Footer setPage={setPage} />
        {/* <PageButton setPage={setPage} pageName={"Login"} isPrimary={true} /> */}
    </>
}

export default Home