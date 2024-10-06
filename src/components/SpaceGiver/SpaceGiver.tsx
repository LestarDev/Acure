import NumberType from "../../types/NumberType"

const SpaceGiver = ({margin, padding}: {
    margin?: `${NumberType} ${NumberType} ${NumberType} ${NumberType}` | NumberType | `${NumberType} ${NumberType}`,
    padding?: `${NumberType} ${NumberType} ${NumberType} ${NumberType}` | NumberType | `${NumberType} ${NumberType}`
}) => {

    return <div style={{padding: padding as string, margin: margin as string, height: "1px"}}>

    </div>
}

export default SpaceGiver