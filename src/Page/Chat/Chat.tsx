import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import '../style.scss'

const Chat = (props:any) => {
    const [data, setData] = useState<any[]>([]);
    const [search, setSearch] = useState("");
    const Navigate = useNavigate();

    useEffect(() => {
      axios
        .get ('https://itunes.apple.com/us/rss/topalbums/limit=100/json',)
        .then((res) => {
            setData(res.data.feed.entry)
        })
        .catch((err) => {
            console.log(err)
        })  
    })
    const goToDetail = () => {
        props.getMusicDetail(data);
        // Navigate(`/Detail/${data.id.attributes["im:id"]}`);
    }

    return(
        <div className="chat">
            MUSIC TOP 100
            <div className="search">
                <input
                    placeholder="찾으시는 음악 이름을 입력하세요"
                    
                />
                <button>검색</button>
            </div>
            <div className="sort">
                <button>오름차순</button>
                <button>내림차순</button>
            </div>
            <div className="musics">
            <div>순위</div>
            {data.map((music:any) => {
                return(
                    <div onClick={goToDetail}>
                    <Link to={`/detail/${music.id.attributes["im:id"]}`}>
                        <div className="musicInfo">
                            <img className="img" src={music["im:image"][0].label} alt=""></img>
                            <div className="name">{music.title.label}</div>
                        </div>
                    </Link>   
                    </div>
                )
            })}
            </div>
        </div>
    )
}

export default Chat;