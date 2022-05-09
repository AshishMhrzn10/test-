import React,{useEffect,useState} from 'react'
import axios from 'axios'

const Home = () => {
  const [datas, setDatas] = useState('')
  const [right,setRight] = useState('')

  useEffect(()=>{
    axios.get('https://jsonplaceholder.typicode.com/photos',{params:{albumId:1}})
    .then(res=>{
      // console.log(res.data)
      setDatas(res.data)
    })
    .catch(err=>{
      console.log(err)
    })
  },[])

  const handleClick = (url) => {
    setRight(url)
  }

  
  return (
    <div>
      <div className="container">
    <div className="row sm-flex-center">
        <div className="col-sm-6">
        <div className="row">
        {datas ? (datas?.map((data) => {
        return (
          <div className="col-4" key={data.id}>
              <div onClick={()=>handleClick(data.url)} style={{cursor:"pointer"}}>
                <img src={data.thumbnailUrl} alt=""/>
                <p>{data.title}</p>
              </div>
          </div>
        ); 
      })): (
        <h1>No datas</h1>
      )}
  </div>
        </div>
        <div className="col-sm-6 ">
        {right? (
            <img src={right} alt=""/>
        ):(
          <h1 style={{color:"red"}}>Click on the images on the side to preview.</h1>
        )}
        </div>
    </div>
</div>
    </div>

  )
}

export default Home