import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {ListGroup} from 'react-bootstrap'
import './Cart.css'

const Cart = (props) => {
    const cart = props.cart; 
    const totalPrice = cart.reduce((total,enroll) => total + enroll.price ,0)

    const extras = (totalPrice*.10);
    const totalCost = (extras + totalPrice).toFixed(2);

    return (
        <div>
            <h3 className='text-center font-weight-bold mb-5'>Enroll Summary</h3>
           <h5>Courses: {cart.length}</h5>
           <h5>VAT: ${extras}</h5> 
           <h5>Total Cost: ${totalCost}</h5>

           <h5 className='mt-5 font-weight-bold'>Course Enrolled:</h5>
           
               {
                cart.map(cartItem => 
                      
                      <ListGroup>
                        <ListGroup.Item variant ='primary'>{cartItem.name.substring(0,20) + '...'}
                        <sapn className="float-right font-weight-bold">${cartItem.price}</sapn> 
                        </ListGroup.Item>
                      </ListGroup>)
               }
        
        </div>
    );
};

export default Cart;