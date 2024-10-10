import { GiCrossedSwords } from "react-icons/gi"
import PageType from "../../types/PageType"
import PageButton from "../PageButton/PageButton"
import "./SideBar.css"
import { useEffect, useState } from "react"
import AsideSingleUser from "../AsideSingleUser/AsideSingleUser"
import UuidType from "../../types/UuidType"

const SideBar = ({setPage}: PageType) => {

    const [userUsefulData, setUserUsefulData] = useState([] as UuidType[]);

    useEffect(()=>{
        fetch("http://127.0.0.1:5000/global_elo/").then(response=>response.json()).then((data: any[])=>{
            console.log(data);
            setUserUsefulData([]);
            data.forEach((el)=>{
                setUserUsefulData(prevV=>[...prevV, {
                    uuid: el.uuid,
                    username: el.username,
                    elo: el.global_elo,
                    ID: el.ID
                }]);
            })
        })
    },[])

    return <>
        <div className="duelsButton">
            <div className="circle big"></div>
            <PageButton setPage={setPage} pageName="Duels" isPrimary={false} icon={<GiCrossedSwords />} />
            <div className="circle small"></div>
        </div>
        <div>
            {
                userUsefulData.map((data)=><AsideSingleUser elo={data.elo} username={data.username} uuid={data.uuid} key={`AsideSingleUser${data.ID}`} />)
            }
        </div>
        <div>

        </div>
    </>
}

export default SideBar