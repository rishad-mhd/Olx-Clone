import React from 'react'
import { useParams } from 'react-router-dom'
import Category from '../Components/Category/Category'
import Footer from '../Components/Footer/Footer'
import Header from '../Components/Header/Header'

function Categories() {
    const {id} = useParams()
    console.log(id);
    return (
        <div>
            <Header />
            <Category value={id}/>
            <Footer/>
        </div>
    )
}

export default Categories
