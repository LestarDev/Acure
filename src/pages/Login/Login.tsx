import PageButton from "../../components/PageButton/PageButton"
import PageType, { getPageName } from "../../types/PageType"

const Login = ({setPage}: PageType) => {

    return <div>
        <PageButton pageName="Home" setPage={setPage}  />
    </div>
}

export default Login