import { useEffect, useState } from "react"
import ServersType, { isWithApi, serverStatusSimple, setServerStatus } from "../../types/ServersType"
import "./NoSlidderCommponent.css"

const NoSliderCommponent = ({ name, text, icon, ip}: {
    name: ServersType | string,
    text?: string,
    icon?: JSX.Element,
    ip?: string | 1
}) => {

    const [status, setStatus] = useState({} as serverStatusSimple);

    useEffect(()=>{
        if(text != undefined) return;
        if(typeof ip == "number"){
            setStatus({
                specialMessage: "Już niedługo"
            } as setServerStatus<false, true>)
            return;
        }
        // console.log(name, ip)
        fetch(`https://api.mcsrvstat.us/3/${ip}`)
        .then(response=>response.json())
        .then((data: any)=>{
            console.log(data);
            setStatus(data.online ? {
                howManyPlayers: data.players.online
            } as setServerStatus<true> : {
                specialMessage: "offline"
            } as setServerStatus<false>);
        })
    },[ip])

    return <div className="single">
        {
            isWithApi(name) ? <>
                <div>
                    <span>{name}</span>
                    {icon}
                </div>
                <span>
                {
                    typeof status.howManyPlayers != "undefined" ? <>Online {status.howManyPlayers} graczy</> : status.specialMessage ? status.specialMessage : "Offline"
                }
                </span>
                
            </> : <>
                <span>{name}</span>
                <span>{text}</span>
            </>
        }
    </div>
}

export default NoSliderCommponent