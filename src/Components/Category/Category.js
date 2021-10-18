import React, { useContext, useState, useEffect } from 'react'
import Heart from '../../assets/Heart'
import { FirebaseContext } from '../../store/Context'

function Category(props) {
    const { firebase } = useContext(FirebaseContext)
    const [products, setProducts] = useState([])
    useEffect(() => {
        firebase.firestore().collection('products').where('category', '==', props.value).get().then((snapshot) => {
            const allpost= snapshot.docs.map(product => {
                return {
                    ...product.data(),
                    id: product.id
                  }
            })
            setProducts(allpost)
        })
    }, [])
    console.log(products)
    return (
        <div>
            <div id={props.value} className="recommendations">
                <div className="heading">
                    <span>{props.value}</span>
                </div>
                <div className="cards">
                    {products.map(product => {
                        return (
                            <div className="card">
                                <div className="favorite">
                                    <Heart />
                                </div>
                                <div className="image">
                                    <img src={product.url} alt="" />
                                </div>
                                <div className="content">
                                    <p className="rate">&#x20B9;{product.price}</p>
                                    <span className="kilometer">{product.category}</span>
                                    <p className="name"> {product.name}</p>
                                </div>
                                <div className="date">
                                    <span>{product.createdAt}</span>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Category
