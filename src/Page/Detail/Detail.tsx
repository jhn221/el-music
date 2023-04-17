import { useParams } from "react-router-dom";
import '../style.scss'

const Detail = (data:any) => {
    const { musicId } = useParams();

    console.log(musicId)
    console.log(data)
    const DetailData = data.data.filter((data:any)=> (
        data.id.attributes["im:id"] === musicId
    ))
    console.log(DetailData)
    return (
        <div className="detail">
            
            <div>{DetailData[0].title.label}</div>
            <div className="정보들">
                <div></div>
            </div>

        </div>
    )
}

export default Detail;