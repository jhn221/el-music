import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import '../style.scss'

const Chat = () => {
    const [data, setData] = useState<any[]>([]);
    const [search, setSearch] = useState("");
    useEffect(() => {
      axios
        .get ('https://itunes.apple.com/us/rss/topalbums/limit=100/json',)
        .then((res) => {
            setData(res.data.feed.entry)
        })
        .catch((err) => {
            console.log(err)
        })  
    },[])
    console.log(data)

    // 검색
    const searchMusic = (e:any) => {
      setSearch(e.target.value)
    }

    const submitSearch = (e:any) => {
        setSearch(e.target.value)
    }

    let sortUp = [...data]

    //오름차순 정렬
    const ascendingOrder = () => {
        sortUp.sort((a:any,b:any) => 
            a.title.label.localeCompare(b.title.label)
        )
        setData(sortUp)
    }

    //내림차순 정렬
    const descendingOrder = ()=> {
        sortUp.sort((a:any,b:any) => 
        b.title.label.localeCompare(a.title.label))
        // console.log(data)
        setData(sortUp)
    }


    return(
        <div className="chat">
            MUSIC TOP 100
            <div className="search">
                <input
                    placeholder="찾으시는 음악 이름을 입력하세요"
                    onChange={searchMusic}
                />
                <button onClick={submitSearch}>검색</button>
            </div>
            <div className="sort">
                <button onClick={ascendingOrder}>오름차순</button>
                <button onClick={descendingOrder}>내림차순</button>
            </div>
            <div className="musics">
            <div>순위</div>
            {data.filter((music) => {
                if(search === ""){
                return music
            } else if(music.title.label.toLowerCase().includes(search.toLowerCase())){
                return music
            }}).map((music:any) => {
                return(
                    <Link to={`/detail/${music.id.attributes["im:id"]}`}>
                        {/* <div>{music}</div><div className="musics"> */}
                        <div className="musicInfo">
                            {/* <div>{setNumber(number+1)}</div> */}
                            <img className="img" src={music["im:image"][0].label} alt=""></img>
                            <div className="name">{music.title.label}</div>
                        </div>   
                    </Link>
                )
            })}
            </div>
        </div>
    )
}

export default Chat;