import React, { Fragment, useContext, useState } from 'react';
import './Create.css';
import { FirebaseContext, authContext } from '../../store/Context'
import Loading from '../Loading/Loading';
import { useHistory } from 'react-router-dom'
import LoginError from '../Error/LoginError';

const Create = () => {
  const { firebase } = useContext(FirebaseContext);
  const { user } = useContext(authContext)
  const history = useHistory()
  const [name, setName] = useState('')
  const [category, setCategory] = useState('')
  const [price, setPrice] = useState()
  const [image, setImage] = useState()
  const date = new Date()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)

  const handleSubmit = () => {
    if (image && name && category && price) {
      setLoading(true)
      firebase.storage().ref(`/image/${image.name, date}`).put(image).then(({ ref }) => {
        ref.getDownloadURL().then((url) => {
          console.log(url);
          firebase.firestore().collection('products').add({
              name,
              category,
              price,
              url,
              userId: user.uid,
              createdAt: date.toDateString()
            }).then(() => {
              setLoading(false)
              history.push('/')
            }).catch((err) => {
              console.log(err);
            })
        })
      })
    } else {
      setLoading(false)
      setError(true)
      console.log("error");
    }
  }

  return (
    <Fragment>
      <card>
        <div className="centerDiv">
          {error && <LoginError value="Please fill out the form completely" />}
          <label htmlFor="fname">Name</label>
          <br />
          <input
            className="input"
            type="text"
            value={name}
            id="fname"
            name="Name"
            placeholder="IPHONE"
            onChange={(e) => {
              setName(e.target.value)
            }}
          />
          <br />
          <label htmlFor="fname">Category</label>
          <br />
          <select
            className="input"
            value={category}
            id="fname"
            name="category"
            onChange={(e) => {
              setCategory(e.target.value)
            }}
          >
            <option value="" disabled>Select Category</option>
            <option value="Cars">Cars</option>
            <option value="Motorcycles">Motorcycles</option>
            <option value="Mobiles">Mobiles</option>
            <option value="For Sale:Houses & Apartments">For Sale:Houses & Apartments</option>
            <option value="Scooter">Scooter</option>
            <option value="Commercial & Other Vehicles">Commercial & Other Vehicles</option>
            <option value="For Rent: House & Apartments">For Rent: House & Apartments</option>
          </select>
          <br />
          <label htmlFor="fname">Price</label>
          <br />
          <input
            className="input"
            type="number"
            value={price}
            id="fname"
            name="Price"
            placeholder="100000"
            onChange={(e) => {
              setPrice(e.target.value)
            }}
          />
          <br />
          <br />
          <img alt="Posts" width="200px" height="200px" src={image ? URL.createObjectURL(image) : ""}></img>
          <br />
          <input onChange={(e) => {
            setImage(e.target.files[0])
          }} type="file" required />
          <br />
          <button onClick={handleSubmit} className="uploadBtn">upload and Submit</button>
          {loading && <Loading />}
        </div>
      </card>
    </Fragment>
  );
};

export default Create;
