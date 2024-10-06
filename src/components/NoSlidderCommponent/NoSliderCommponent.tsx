import ServersType, { isWithApi } from "../../types/ServersType"

const NoSliderCommponent = ({ name, text, icon}: {
    name: ServersType | string,
    text?: string,
    icon?: JSX.Element
}) => {

    return <div>
        {
            isWithApi(name) ? <>
                api
            </> : <>
                <span>{name}</span>
                <span>{text}</span>
            </>
        }
    </div>
}

export default NoSliderCommponent