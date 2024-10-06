import { IconType } from "react-icons";
import { AdvancedPageType, getPageNumber, possiblePagesNamesType } from "../../types/PageType"
import "./PageButton.css"

const PageButton = ({setPage, pageName, isPrimary, icon}:AdvancedPageType<{
    isPrimary?: boolean,
    pageName: possiblePagesNamesType,
    icon?: JSX.Element
}, true>) => {

    const pageNr = getPageNumber(pageName);

    return <button className={isPrimary ? "primary" : isPrimary==false ? "secondary" : ""} onClick={()=>{
        if (isPrimary==false) return;
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