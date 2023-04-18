import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import '../style.scss'

const Detail = (propsdata:any) => {
    const { musicId } = useParams();
    const [data, setData] = useState();
    
    console.log(musicId)
    console.log(data)
    
    useEffect(() => {
        const savedData = changeData();
        console.log(savedData)
        if (savedData) {
            setData(JSON.parse(savedData));
        }
    }, []);
    console.log(data)

    const changeData = () => {
         const data = localStorage.getItem('DetailData');
         return data ? data : null;
        }
    
    const DetailData = propsdata.data.filter((data:any)=> (
        data.id.attributes["im:id"] === musicId
    ))
    
    //새로고침 확인 코드
    const preventClose = (e:BeforeUnloadEvent) => {
        e.preventDefault();
        e.returnValue = ""; // chrome 환경에서 설정이 필요해서 넣은 코드
    }

    useEffect(() => {
        (() => {
            window.addEventListener("beforeunload", preventClose);    
        })();
    
        return () => {
            window.removeEventListener("beforeunload", preventClose);
        };
    },[]);

    return (
        <div className="detail">
            <h3><Link to='/'>ALBEM TOP 100</Link></h3>
            <div className="albemTitle">{DetailData[0]["im:name"].label}</div>
            <div className="detailInfo">
                <img src={DetailData[0]["im:image"][2].label} alt="musicImg"></img>
                <div>
                    <div className="detailKey">
                        <span>artist :</span>
                        <span>category :</span>
                        <span>price : </span>
                        <span>releaseDate : </span>
                        <span>item count : </span>
                        <span>Detail : </span>
                        {/* <a href="{DetailData[0].link.href}">더보기</a> */}
                    </div>
                    <div className="detailValue">
                        <span> {DetailData[0]["im:artist"].label}</span>
                        <span>{DetailData[0].category.attributes.label}</span>

                        <span>{DetailData[0]["im:price"].label}</span>
                        <span>{DetailData[0]["im:releaseDate"].label.slice(0,10)}</span>
                        <span>{DetailData[0]["im:itemCount"].label}</span>
                        <a href={DetailData[0].link.attributes.href} target="_blank" >더보기</a>
                    </div>
                </div>
                
            </div>
                {/* <div>{DetailData[0].rights.label}</div> */}

        </div>
    )
}

export default Detail;