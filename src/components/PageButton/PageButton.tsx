import { IconType } from "react-icons";
import { AdvancedPageType, getPageNumber } from "../../types/PageType"
import "./PageButton.css"

const PageButton = ({setPage, pageName, isPrimary, icon}:AdvancedPageType<{
    isPrimary?: boolean,
    pageName: string,
    icon?: JSX.Element
}, true>) => {

    const pageNr = getPageNumber(pageName);

    return <button className={isPrimary ? "primary" : isPrimary==false ? "secondary" : ""} onClick={()=>{
        setPage(pageNr)
    }}>
        {
            icon ? icon : ''
        }
        <span>
        {
            pageName
        }
        </span>
    
    </button>
}

export default PageButton