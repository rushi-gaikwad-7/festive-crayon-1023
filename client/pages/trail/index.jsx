import axios from "axios"
import {data} from "../description/data"

export default function Prod(){
    let handlecart = async (id)=>{
        let res = await axios.post(`http://localhost:8080/home/post/${id}`)
        console.log(res.data)
    }
    return (
        <div>
            {data.map((el)=>{
              return  <div>
                <img src={el.Images[0]}/>
                <button onClick={()=>{
                 handlecart(el._id)   
                }}>add to cart</button>
                </div>
            })}
        </div>
    )
}


