import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeFromCart } from '../reducer/productReducer';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Cart = () => {

    const products = useSelector(state => state.products)
    const dispatch = useDispatch()

    const handleRemove = (product) => {
        dispatch(removeFromCart(product))
    }
    const cards = products.map((product) => (
        <div key={product.id} className={products.length > 3 ? 'col-md-3' : 'col-md'} style={{ marginBottom: "10px" }}>
            <Card key={product.id} className='h-100'>
                <div className='text-center'>
                    <Card.Img variant="top" src={product.image} style={{ width: "10rem" }} />
                </div>
                <Card.Body>
                    <Card.Title>{product.title}</Card.Title>
                    <Card.Text>
                        INR. {product.price}
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <Button variant="danger" onClick={() => handleRemove(product)}>Remove from Cart</Button>
                </Card.Footer>
            </Card>
        </div>
    ))
    return (
        <>
            <h1 style={{ paddingTop: '70px', textAlign: "center" }}>Cart</h1>
            <div className='row'>
                {products.length ? cards : <h3>You have not added any items in cart yet</h3>}
            </div>

        </>
    )
}

export default Cart