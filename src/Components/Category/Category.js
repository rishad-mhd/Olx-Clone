import React, { useContext, useState, useEffect } from 'react'
import Heart from '../../assets/Heart'
import { FirebaseContext } from '../../store/Context'
import QuickOption from '../QuickOption/QuickOption'
import './Category.css'
import { PostContext } from '../../store/PostContext'
import { useHistory } from 'react-router-dom'

function Category(props) {
    const { firebase } = useContext(FirebaseContext)
    const { setPostDetails } = useContext(PostContext)
    const [products, setProducts] = useState([])
    const [limit, setLimit] = useState(10)
    const history = useHistory()
    let used = true
    let all=false
    if (props.value === "For Sale:Houses & Apartments") {
        used = false
    }
    else if (props.value === "For Rent: House & Apartments") {
        used = false
    } else if (props.value === "all") {
        all=true
    }
    useEffect(() => {
        if (props.value !== "all") {
            firebase.firestore().collection('products').where('category', '==', props.value).limit(limit).get().then((snapshot) => {
                const allpost = snapshot.docs.map(product => {
                    return {
                        ...product.data(),
                        id: product.id
                    }
                })
                setProducts(allpost)
            })
        } else {
            console.log('hi');
            firebase.firestore().collection('products').limit(limit).get().then((snapshot) => {
                const allpost = snapshot.docs.map(product => {
                    return {
                        ...product.data(),
                        id: product.id
                    }
                })
                setProducts(allpost)
            })
        }
    }, [limit])
    return (
        <div>
            <div className="quickOption-bar">
                <QuickOption />
            </div>
            <div className="categories">
                <div className="heading">
                    {all?<span>Quick Menu</span>:<span>{used && <span>Used</span>} {props.value} in India</span>}
                </div>
                <div className="cards">
                    {products.map(product => {
                        return (
                            <div onClick={() => {
                                setPostDetails(product)
                                history.push(`/view/${product.id}`)
                            }} key={product.id}
                                className="card">
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
            </div>
        </div>
    )
}

export default Category
