import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { mFetch } from "../../utils/mockFetch"
import ItemDetail from "./ItemDetail/ItemDetail"

const ItemDetialContainer = () => {
    // api manejo de estados etc
    const [product, setProduct ] = useState({})
   const [ loading, setLoading ] = useState(true)
    const { pid } = useParams()
    console.log(pid)

   useEffect(()=>{
// llamada a la api
mFetch(Number(pid))
.then(resp => setProduct(resp))
.catch(err=> console.log(err))
.finally(()=> setLoading(false))
},[pid])
    return (
        <div>            
           {loading ? <h1>Loading...</h1> : <ItemDetail product={product} /> }          
        </div>
    )
}

export default ItemDetialContainer