
import { addDoc, collection, serverTimestamp } from 'firebase/firestore'
import React, { useState, useContext } from 'react'
import { useCartContext } from '../../context/CartContext'
import { db } from '../../firebase/config'

const Checkout = () => {
  const [user, setUser] = useState({});
  const [validateEmail, setValidateEmail] = useState('');
  const [orderId, setOrderId] = useState('');
  const { cartList, precioTotal, eliminarProducto, deleteCart } = useCartContext();

  const datosComprador = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    });
  }

  const finalizarCompra = (e) => {
    e.preventDefault();
    if (!user.name || !user.phone) {
      alert('Complete los campos');
    } else {
      let order = {
        user,
        item: cartList,
        total: precioTotal(),
        date: serverTimestamp()
      };
      const ventas = collection(db, 'orders');
      addDoc(ventas, order)
        .then((res) => {
          setOrderId(res.id);
          deleteCart();
        })
        .catch((error) => console.error(log));
    }
  }

  return (
    <div>
      {orderId !== '' ? (
        <div>
          <h2>Felicitaciones! Tu orden fue generada con éxito!</h2>
          <h5>Tu número de compra es: {orderId}</h5>
        </div>
      ) : (
        <div>
          <h2>Terminar compra</h2>
          <h5>Por favor, llenar con sus datos</h5>
          <form onSubmit={finalizarCompra}>
            <div className='mb-3'>
              <label className='form-label'>Nombre Completo</label>
              <input className='form.control' onChange={datosComprador} type='text' placeholder='Nombre y Apellido' name='name' required />
            </div>
            <div className='mb-3'>
              <label className='form-label'>Número de teléfono</label>
              <input className='form.control' onChange={datosComprador} type='number' placeholder='+5493847520' name='phone' required />
            </div>
            <div className='mb-3'>
              <label className='form-label'>Dirección de email</label>
              <input className='form.control' onChange={datosComprador} type='email' placeholder='hola@hola.com' name='mail' />
            </div>
            <div className='mb-3'>
              <label className='form-label'>Repita su email</label>
              <input className='form.control' type='email' placeholder='hola@hola.com' name='mail' onChange={((e) => setValidateEmail(e.target.value))} />
            </div>
            <button className='btn btn-dark' type='submit' disabled={validateEmail !== user.mail}>Generar orden</button>
          </form>
        </div>
      )}
    </div>
  );
}

export default Checkout;
