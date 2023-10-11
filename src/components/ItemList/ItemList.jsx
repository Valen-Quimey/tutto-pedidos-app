import { memo } from "react"
import Item from "../Item/Item"



const ItemList = memo( ({ products }) => { 
        console.log('render de Itemlist')
        return (
            <>
    
                {
                    products.map(product =>  <Item key={product.id} product={product} /> )
                }
            </>
        )
     }
    
) 

export default ItemList