import React from 'react'
import ReactLoading from 'react-loading';
import './Loading.css'

const Loading = () => (
    <div className="loading"><ReactLoading type={"spinningBubbles"} color={"#014743"} height={'15%'} width={'15%'} /></div>
);
 

export default Loading
