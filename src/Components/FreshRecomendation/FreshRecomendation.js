import React, { useEffect, useState, useContext } from 'react'
import { useHistory } from 'react-router-dom'
import Heart from '../../assets/Heart'
import SellButton from '../../assets/SellButton'
import SellButtonPlus from '../../assets/SellButtonPlus'
import { authContext, FirebaseContext } from '../../store/Context'
import { PostContext } from '../../store/PostContext'
import './FreshRecomendation.css'

function FreshRecomendation() {
    const { firebase } = useContext(FirebaseContext)
    const [products, setProducts] = useState([])
    const [limit, setLimit] = useState(10)
    const { setPostDetails } = useContext(PostContext)
    const { user } = useContext(authContext)
    const history = useHistory()
    useEffect(() => {
        firebase.firestore().collection('products').limit(limit).get().then((snapshot) => {
            const allPost = snapshot.docs.map((product) => {
                return {
                    ...product.data(),
                    id: product.id
                }
            })
            setProducts(allPost)
        })
    }, [limit])
    return (
        <div>
            <div className="recomendations">
                <div className="heading">
                    <span>Fresh Recomendations</span>
                </div>
                <div className="cards">
                    {products.map(product => {
                        return (
                            <div onClick={() => {
                                setPostDetails(product)
                                history.push(`/view/${product.id}`)
                            }} className="card">
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
                <div className="load-more-button">
                    <button onClick={(e) => {
                        e.preventDefault()
                        setLimit(limit + 10)
                    }}>Load more</button>
                </div>
                <div onClick={(e) => {
                    e.preventDefault()
                    if (user) {
                        history.push('/create')
                    } else {
                        history.push('/login')
                    }
                }} className="sellMenu">
                    <SellButton></SellButton>
                    <div className="sellMenuContent">
                        <SellButtonPlus></SellButtonPlus>
                        <span>SELL</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FreshRecomendation
