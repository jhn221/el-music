import { useParams } from "react-router-dom";
import '../style.scss'

const Detail = (data:any) => {
    const { musicId } = useParams();

    console.log(musicId)
    console.log(data)
    const DetailData = data.data.filter((data:any)=> (
        data.id.attributes["im:id"] === musicId
    ))
    return (
        <div className="detail">
            <div className="albemTitle">{DetailData[0]["im:name"].label}</div>
            <div className="detailInfo">
                <img src={DetailData[0]["im:image"][0].label}></img>
                <div>
                    <div>artist : {DetailData[0]["im:artist"].label}</div>
                    <div>category : {DetailData[0].category.attributes.label}</div>

                    <div>price : {DetailData[0]["im:price"].label}</div>
                    <div>releaseDate : {DetailData[0]["im:releaseDate"].label}</div>
                    <div>item count : {DetailData[0]["im:itemCount"].label}</div>
                    {/* <a href="{DetailData[0].link.href}">더보기</a> */}
                </div>
                
            </div>
                <div>{DetailData[0].rights.label}</div>

        </div>
    )
}

export default Detail;