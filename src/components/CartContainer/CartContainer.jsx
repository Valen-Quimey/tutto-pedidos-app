import { Link } from "react-router-dom";
import { useCartContext } from "../../context/CartContext";
import { addDoc, collection, getFirestore } from "firebase/firestore";

const CartContainer = () => {
  const { cartList, deleteCart, eliminarProducto, precioTotal } = useCartContext();
  // esto refiere al botón de generar order
  // const handleAddOrder = () => {
  //   const order ={ }
  //   order.buyer =  {name: 'Valentina', phone: '123456', email: 'valen@gmail.com'}
  //   order.item = cartList.map(prod=> {
  //     return {id: prod.id, name: prod.name, price: prod.price, quantity: prod.quantity}
  //   } )
  //   order.total =precioTotal()
  //   const queryDB = getFirestore()
  //   const ordersCollection = collection(queryDB, 'orders')
  //   addDoc(ordersCollection, order)
  //   .then (resp => console.log (resp))
  // }
  return (
    <div>
      {cartList.length === 0 ? (
        <div>
          <p>Tu carrito está vacío.</p>
          <Link to="/">Volver a Inicio</Link>
        </div>
      ) : (
        <div>
          {cartList.map((prod) => (
            <div key={prod.id}>
              <img src={prod.imageUrl} alt={prod.name} className="w-25" />
              {prod.name} - ${prod.price} - Cantidad: {prod.quantity}
              <button className="btn btn-danger" onClick={() => eliminarProducto(prod.id)}>
                X
              </button>
            </div>
          ))}
          <button onClick={deleteCart}>Vaciar Carrito</button>
          <h3>Precio total: {precioTotal()}</h3>
          <Link className="btn btn-success" to='/checkout'>Terminar compra</Link>
        </div>
        
      )}
    </div>
  );
};

export default CartContainer;
