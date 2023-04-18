import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import '../style.scss'

const Detail = (data:any) => {
    const { musicId } = useParams();
    // const [data, setData] = useState();
    
    console.log(musicId)
    console.log(data)
    
    // useEffect(() => {
    //     const savedData = changeData();
    //     console.log(savedData)
    //     if (savedData) {
    //         setData(savedData);
    //     }
    // }, []);
    // console.log(data)

    // const changeData = () => {
    //      const data = localStorage.getItem('DetailData');
    //      console.log(data)
    //      return data ? JSON.parse(data) : null;
    //     }
    
    const DetailData = data.data.filter((data:any)=> (
        data.id.attributes["im:id"] === musicId
    ))
    

    console.log(DetailData[0])
    return (
        <div className="detail">
            <div className="albemTitle">{DetailData[0]["im:name"].label}</div>
            <div className="detailInfo">
                <img src={DetailData[0]["im:image"][2].label} alt="musicImg"></img>
                <div className="detailKey">
                    <div>artist :</div>
                    <div>category :</div>
                    <div>price : </div>
                    <div>releaseDate : </div>
                    <div>item count : </div>
                    {/* <a href="{DetailData[0].link.href}">더보기</a> */}
                </div>
                <div className="detailValue">
                    <div> {DetailData[0]["im:artist"].label}</div>
                    <div>{DetailData[0].category.attributes.label}</div>

                    <div>{DetailData[0]["im:price"].label}</div>
                    <div>{DetailData[0]["im:releaseDate"].label}</div>
                    <div>{DetailData[0]["im:itemCount"].label}</div>
                   {/* Todo : apple music 상세페이지로 연결 */}
                    {/* <a href="DetailData[0].link.href">더보기</a> */}
                </div>
                
            </div>
                {/* <div>{DetailData[0].rights.label}</div> */}

        </div>
    )
}

export default Detail;