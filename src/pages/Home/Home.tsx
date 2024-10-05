import PageButton from "../../components/PageButton/PageButton"
import PageType from "../../types/PageType"

const Home = ({setPage}: PageType) => {

    return <div>
        <PageButton setPage={setPage} pageName={"Login"} isPrimary={true} />
    </div>
}

export default Home