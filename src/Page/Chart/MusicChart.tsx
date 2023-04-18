import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Loading from "../../Loading/Loading";
import '../style.scss'

const MusicChart = (props:any) => {
    // const [loading, setLoading] = useState(false)
    // const [error, setError] = useState(null)
    const [data, setData] = useState<any[]>([]);
    const [search, setSearch] = useState("");
    const [onDownKeyClickPress, setOnDownKeyClickPress] = useState<boolean>(false)
    const [onUpKeyClickPress, setOnUpKeyClickPress] = useState<boolean>(false)

    useEffect(() => {
      axios
        .get ('https://itunes.apple.com/us/rss/topalbums/limit=100/json',)
        .then((res) => {
            setData(res.data.feed.entry)
            localStorage.setItem("DetailData", JSON.stringify(res.data.feed.entry))
        })
        .catch((err) => {
            console.log(err)
        })  
    },[])
    // if (loading) return (
    //     <Loading/>
    //   )
    //   if (error) return (
    //     <div>에러 발생..{error}</div>
    //   )

    // 검색
    const searchMusic = (e:any) => {
      setSearch(e.target.value)
    }

    const submitSearch = (e:any) => {
        if (search === "") {
            alert("검색어를 입력하세요");
          }
    }

    const onKeyPressEnter = (e:any) => {
        if (e.key === "Enter") {
            submitSearch(e);
        }
      };
    let sortUp = [...data]

    //오름차순 정렬
    const ascendingOrder = () => {
        sortUp.sort((a:any,b:any) => 
            a.title.label.localeCompare(b.title.label)
        )
        setData(sortUp)
        setOnUpKeyClickPress(true)
        setOnDownKeyClickPress(false)
    }

    //내림차순 정렬
    const descendingOrder = ()=> {
        sortUp.sort((a:any,b:any) => 
        b.title.label.localeCompare(a.title.label))

        setData(sortUp)
        setOnUpKeyClickPress(false)
        setOnDownKeyClickPress(true)
    }

    const goToDetail = () => {
        props.getMusicDetail(data);
    }

    
    return(
        <div className="chart">
            <div className="search">
                <h3>ALBEM TOP 100</h3>
                <input
                    placeholder="앨범 이름으로 검색해보세요"
                    onChange={searchMusic}
                    onKeyPress={onKeyPressEnter}
                />
                <button onClick={submitSearch}>검색</button>
            </div>
            <div className="sort">
                <button style={onUpKeyClickPress ? {"backgroundColor":"#b2b8bb","color":"white"} : {"backgroundColor":"white"}} onClick={ascendingOrder}>오름차순</button>
                <button style={onDownKeyClickPress ? {"backgroundColor":"#b2b8bb","color":"white"} : {"backgroundColor":"white"}} onClick={descendingOrder}>내림차순</button>
            </div>
            <div className="musics">
                <div className="line"/>
                <div className="title">
                    <h6>NO.</h6>
                    <h6>곡-아티스트</h6>
                </div>
                
                {data.filter((music) => {
                    if(search === ""){
                    return music
                } else if(music.title.label.toLowerCase().includes(search.toLowerCase())){
                    return music
                }}).map((music:any,num) => {
                    return(
                    <>
                        <Link to={`/detail/${music.id.attributes["im:id"]}`} className="link">
                            <div onClick={goToDetail}>
                                <div className="musicInfo">
                                    <div>{num+1}</div>
                                    <img className="img" src={music["im:image"][1].label} alt=""></img>
                                    <div className="name">{music.title.label}</div>
                                </div>
                            </div>
                        </Link>
                    <div className="line2"/>
                    </>
                    )
                })}
            </div>
        </div>
    )
}

export default MusicChart;