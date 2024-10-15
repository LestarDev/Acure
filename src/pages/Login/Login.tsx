import PageButton from "../../components/PageButton/PageButton"
import PageType from "../../types/PageType"

const Login = ({setPage}: PageType) => {

    return <div>
        <PageButton pageName="Strona Główna" setPage={setPage}  />
    </div>
}

export default Login