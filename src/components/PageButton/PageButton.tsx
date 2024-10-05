import { AdvancedPageType, getPageName, getPageNumber } from "../../types/PageType"

const PageButton = ({setPage, pageName, isPrimary}:AdvancedPageType<{
    isPrimary?: boolean,
    pageName: string
}, true>) => {

    const pageNr = getPageNumber(pageName);

    return <button className={isPrimary ? "primary" : ""} onClick={()=>{
        setPage(pageNr)
    }}>
    {
        getPageName(pageNr)
    }
    </button>
}

export default PageButton