import { SetPageType } from "../../types/PageType"
import PageButton from "../PageButton/PageButton"
import "./Line.css"

const Line = ({isWithSection, setPage}:{
    isWithSection?: boolean,
    setPage?: SetPageType
}) => {

    return <div className="divHR">
        {
            isWithSection && setPage ? <>
                <div>
                    <div className="small circle"></div>
                    <PageButton pageName="DOŁĄCZ DO GRY" setPage={setPage} isPrimary={false}/>
                    <div className="big circle"></div>
                </div>
            </> : ''
        }
    </div>
}

export default Line