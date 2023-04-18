import '../App.scss'
import Spinner from "./Spinner.svg"

const Loading = () => {
  return (
    <div className='LoadingWrap' >
      <img src={Spinner} alt="로딩중" />
    </div>
  )
}

export default Loading;