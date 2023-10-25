import { Link } from "react-router-dom";
import { useCartContext } from "../../context/CartContext";

const CartContainer = () => {
  const { cartList, deleteCart, eliminarProducto, precioTotal } = useCartContext();
  //esto refiere al botón de generar order
  const handleAddOrder = () => {
    
  }
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
          <button className="btn btn-success" onclick= {handleAddOrder}>Terminar compra</button>
        </div>
        
      )}
    </div>
  );
};

export default CartContainer;
