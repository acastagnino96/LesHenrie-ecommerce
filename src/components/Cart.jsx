import React, { useContext } from 'react'
import { CartContext } from './CartContext';
import Button from 'react-bootstrap/Button';
import { collection, doc, setDoc, serverTimestamp, updateDoc, increment } from 'firebase/firestore';
import {db} from '../utils/FirebaseConfig';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { Link } from 'react-router-dom';
import "./Cart.css";

const Cart = () => {
    const ctx = useContext(CartContext);

    const createOrder = () => {
      const itemsForDB = ctx.cartList.map(item => ({
        id: item.idItem,
        nombre: item.titleItem,
        precio: item.costItem,
        qty: item.qtyItem
      }));
  
      ctx.cartList.forEach(async (item) => {
        const itemRef = doc(collection (db, "products"), item.idItem);
        await updateDoc(itemRef, {
          stock: increment(-item.qtyItem)
        });
      });
  
      let order = {
        buyer: {
          name: "Agustina",
          email: "acas@gmail.com",
          phone: "1158962569"
        },
        total: ctx.calcTotal(),
        items: itemsForDB,
        date: serverTimestamp()
      };
      
      const createOrderInFirestore = async () => {
        const newOrderRef = doc(collection(db, "orders"));
        await setDoc(newOrderRef, order);
        return newOrderRef;
      }

      function swalorder (result) {
        const swalOrder = withReactContent(Swal)
            swalOrder.fire({
                title: `Tu compra se ha realizado con éxito.`,
                text: `Por favor toma nota del ID de tu orden. \n Orden ID: ${result.id}`
                })
        }
    
      createOrderInFirestore()
        .then(result => swalorder(result))
        .catch(err => console.log(err));
    
      ctx.removeList();
      }

    return (
      <>
        <div className="carritoFondo">
              <h1>Tu carrito</h1>
                {
                  ctx.cartList.length > 0 &&
                  ctx.cartList.map(item => 
                    <div className="ItemCart">
                        <div className="imgCartBox">
                          <img className="imgCart" src={item.imgItem} alt="" />
                        </div>
                        <div className="infoCart">
                            <div id="itemTitle">{item.titleItem}</div>
                            <div className="iconCart">
                                <div>Unidades: {item.qtyItem}</div>
                            </div>
                            <div className="iconCart">
                                <strong>${ctx.calcTotalPerItem(item.idItem)}</strong>
                            </div>
                        </div>
                            <Button className="btnEliminar" type="filled" onClick={() => ctx.deleteItem(item.idItem)}>Eliminar</Button>
                    </div>
                  )
                }
              <div className="optionsCart flex-wrap">
                <Link className="continuarComprando mt-2" to='/products'>Continuar comprando</Link>
                {
                  (ctx.cartList.length > 0)
                  ? <Button className="btnEliminarTodos mt-2" onClick={ctx.removeList}>Eliminar todos los productos</Button>
                  : <p id="carritoVacio">Tu carrito está vacío.</p>
                }
              </div>
                {
                  ctx.cartList.length > 0 &&
                    <>
                    <div className="container">
                      <div className='product-cart row'>
                      <p className='totalPrice'>TOTAL: $ {ctx.calcSubTotal()}</p>
                      <Button onClick={createOrder} className="botonFinalizar">Finalizar compra</Button>
                      </div>
                    </div>
                    </>
                }
          </div>
      </>
    );
}

export default Cart
