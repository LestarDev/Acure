import { IconType } from "react-icons";
import { AdvancedPageType, getPageName, getPageNumber } from "../../types/PageType"

const PageButton = ({setPage, pageName, isPrimary, icon}:AdvancedPageType<{
    isPrimary?: boolean,
    pageName: string,
    icon?: JSX.Element
}, true>) => {

    const pageNr = getPageNumber(pageName);

    return <button className={isPrimary ? "primary" : ""} onClick={()=>{
        setPage(pageNr)
    }}>
        {
            icon ? icon : ''
        }
    {
        getPageName(pageNr)
    }
    </button>
}

export default PageButton