import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { addToCart } from '../reducer/productReducer';
const Products = () => {
    const [products, setProducts] = useState([])
    const dispatch = useDispatch()


    const handleCart = (product) => {
        console.log(product)
        dispatch(addToCart(product))
    }
    useEffect(() => {
        axios.get("https://fakestoreapi.com/products").then((res) => {
            console.log(res.data)
            setProducts(res.data)
        }
        )
    }, [])

    const cards = products.map((product) => (
        <div key={product.id} className='col-md-3' style={{ marginBottom: "10px" }}>
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
                    <Button variant="primary" onClick={() => handleCart(product)}>Add to Cart</Button>
                </Card.Footer>
            </Card>
        </div>
    ))
    return (
        <>
            <h1 style={{ paddingTop: '70px', textAlign: "center" }}>Product Dashboard</h1>
            <div className='row' >
                {cards}
            </div>
        </>

    )
}

export default Products