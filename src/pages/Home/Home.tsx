import { FaCartShopping } from "react-icons/fa6"
import NavBar from "../../components/NavBar/NavBar"
import PageButton from "../../components/PageButton/PageButton"
import PageType from "../../types/PageType"
import "./Home.css"
import SpaceGiver from "../../components/SpaceGiver/SpaceGiver"

const Home = ({setPage}: PageType) => {

    return <>
        <NavBar setPage={setPage} />
        <SpaceGiver padding={"5rem 0"} />
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
                    <PageButton setPage={setPage} pageName="Dołącz do Gry" isPrimary={false} />
                </div>
            </main>
            <aside>

            </aside>
        </div>
        <PageButton setPage={setPage} pageName={"Login"} isPrimary={true} />
    </>
}

export default Home