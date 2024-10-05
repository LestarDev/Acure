import PageButton from "../../components/PageButton/PageButton"
import PageType, { getPageName } from "../../types/PageType"

const Login = ({setPage}: PageType) => {

    return <div>
        <PageButton pageName="Strona Główna" setPage={setPage}  />
    </div>
}

export default Login