import { useEffect, useState } from "react"
import { mFetch } from "../../utils/mockFetch"
import ItemList from "../ItemList/ItemList"
import { useParams } from "react-router-dom"

const Loading = ()=>{
    

    return (
        <>
            <h2>Loading ...</h2> 
        </>
    )
}


const ItemListContainer = () => { 
    const [products, setProducts] = useState([])
    const [ loading, setLoading ] = useState(true)
    
    
    // evento props estado ??? 
    const { cid } = useParams()
    // console.log(cid)

    useEffect(()=>{
        if (cid) {
            mFetch()
            .then(respuesta => setProducts( respuesta.filter(product => cid === product.category )))
            .catch(err => console.log(err))
            .finally(()=> setLoading(false))            
        } else {            
            mFetch()
            .then(respuesta => setProducts(respuesta))
            .catch(err => console.log(err))
            .finally(()=> setLoading(false))
        }
    }, [cid])

    // useEffect(()=>{
    //     return ()=>{
    //         console.log('desmontando ItemListContainer')
    //     }
    // })

    return (
        <center>
        <div className="row">
        { loading ? // true - false
        <Loading />
        :
        <ItemList products={products} />
        }
        </div>
        </center>
        
        )
}

export default ItemListContainer