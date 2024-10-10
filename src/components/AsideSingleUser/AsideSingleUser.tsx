import { useEffect, useState } from "react"
import UuidType from "../../types/UuidType"
import "./AsideSingleUser.css"

const AsideSingleUser = ({uuid, username, elo}:UuidType) => {

    return <div className="singleAsideUser">
        <div>
            <span>Użytkownik: {username}</span>
            <span>Ranking: {elo} pkt</span>
        </div>
        <div>
            <img src={`https://mc-heads.net/avatar/${uuid}/45`} alt="" />
        </div>
    </div>
}

export default AsideSingleUser