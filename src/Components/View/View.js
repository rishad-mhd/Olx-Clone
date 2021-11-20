import React, { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router';
import { FirebaseContext } from '../../store/Context';


import './View.css';
function View() {
  const [userDetails, setUserDetails] = useState()
  const { firebase } = useContext(FirebaseContext)
  const { id } = useParams()
  const [postDetails, setPostDetails] = useState()

  useEffect(async () => {
    firebase.firestore().collection("products").doc(id).get().then((doc) => {
      setPostDetails(doc.data())
    })
    if (postDetails) {
      const userId = postDetails.userId
      firebase.firestore().collection('users').where('id', '==', userId).get().then((res) => {
        res.forEach(doc => {
          setUserDetails(doc.data())
        })
      })
    }
  }, [postDetails])
  return (
      <div className="viewParentDiv">
        <div className="imageShowDiv">
          <img
            src={postDetails && postDetails.url}
            alt="Post Image"
          />
        </div>
        <div className="rightSection">
          <div className="productDetails">
            <p>&#x20B9; {postDetails && postDetails.price} </p>
            <span>{postDetails && postDetails.name}</span>
            <p>{postDetails && postDetails.category}</p>
            <span>{postDetails && postDetails.createdAt}</span>
          </div>
          {userDetails && <div className="contactDetails">
            <p>Seller details</p>
            <p>{userDetails.username}</p>
            <p>{userDetails.phone}</p>
          </div>}
        </div>
      </div>
  );
}
export default View;
