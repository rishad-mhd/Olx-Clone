import React, { useEffect, useContext } from 'react';
import { useState } from 'react';
import { useHistory } from 'react-router-dom'
import Heart from '../../assets/Heart';
import { FirebaseContext } from '../../store/Context';
import { PostContext } from '../../store/PostContext';
import Loading from '../Loading/Loading';
import './Post.css';

function Posts() {
  const { firebase } = useContext(FirebaseContext)
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const history = useHistory()
  const { setPostDetails } = useContext(PostContext)
  useEffect(() => {
    firebase.firestore().collection('products').get().then((snapshot) => {
      const allPost = snapshot.docs.map((product) => {
        return {
          ...product.data(),
          id: product.id
        }
      })
      setProducts(allPost)
      setLoading(false)
    })
  }, [])
  return (
    <div className="postParentDiv">
      <div className="moreView">
        <div className="heading">
          <span>Quick Menu</span>
          <span>View more</span>
        </div>
        <div className="cards">
          {!loading ? products.map(products => {

            return <div onClick={(e) => {
              setPostDetails(products)
              history.push('/view')
            }}
              className="card"
            >
              <div className="favorite">
                <Heart></Heart>
              </div>
              <div className="image">
                <img src={products.url} alt="Product Image" />
              </div>
              <div className="content">
                <p className="rate">&#x20B9; {products.price}</p>
                <span className="kilometer">{products.category}</span>
                <p className="name"> {products.name}</p>
              </div>
              <div className="date">
                <span>{products.createdAt}</span>
              </div>
            </div>
          }) : <Loading />}
        </div>
      </div>
      
    </div>
  );
}

export default Posts;
