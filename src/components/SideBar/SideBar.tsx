import { GiCrossedSwords } from "react-icons/gi"
import PageType from "../../types/PageType"
import PageButton from "../PageButton/PageButton"
import "./SideBar.css"

const SideBar = ({setPage}: PageType) => {

    return <>
        <div className="duelsButton">
            <div className="circle big"></div>
            <PageButton setPage={setPage} pageName="Duels" isPrimary={false} icon={<GiCrossedSwords />} />
            <div className="circle small"></div>
        </div>
        <div>
            {
                "api - todo"
            }
        </div>
        <div>

        </div>
    </>
}

export default SideBar