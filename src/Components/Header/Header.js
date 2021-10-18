import React, { useContext,useState } from 'react';
import { useHistory } from 'react-router-dom';
import './Header.css';
import OlxLogo from '../../assets/OlxLogo';
import Search from '../../assets/Search';
import Arrow from '../../assets/Arrow';
import SellButton from '../../assets/SellButton';
import SellButtonPlus from '../../assets/SellButtonPlus';
import { authContext, FirebaseContext } from '../../store/Context';
import TickMark from '../../assets/TickMark';

function Header() {
  const history = useHistory()
  const { user } = useContext(authContext)
  const { firebase } = useContext(FirebaseContext)
  const [arrow,setArrow] = useState("")

  const changeArrowStyle=()=>{
    if(arrow==""){
      setArrow("arrow")
    }else{
      setArrow("")
    }
  }
  return (
    <div className="headerParentDiv">
      <div className="headerChildDiv">
        <div onClick={(e)=>{
          e.preventDefault()
          history.push('/')
        }} className="brandName">
          <OlxLogo></OlxLogo>
        </div>
        <div className="placeSearch">
          <Search></Search>
          <input placeholder='India' type="text" />
          <Arrow></Arrow>
        </div>
        <div className="productSearch">
          <div className="input">
            <input
              type="text"
              placeholder="Find cars,mobile phones and more..."
            />
          </div>
          <div className="searchAction">
            <Search color="#ffffff"></Search>
          </div>
        </div>
        <div className={arrow ||"language"}>
          <div  onClick={changeArrowStyle}>
          <span> ENGLISH </span>
          <Arrow></Arrow>
          </div>
          <div className="language-list">
            <span className="language-list-item">English</span><TickMark/> 
            <br />
            <span className="language-list-item">हिन्दी</span>
          </div>
        </div>
        <div className="loginPage">
            <span className='' onClick={()=>{
              if(!user){
                history.push('/login')
              }
            }}>{user ? user.displayName : 'Login'}</span>
            <hr/>
            {user && <span className='logout' onClick={() => {
              firebase.auth().signOut()
              history.push('/login')
            }}>Logout</span>}
        </div>

        <div onClick={(e)=>{
          e.preventDefault()
          if(user){
            history.push('/create')
          }else{
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
    </div >
  );
}

export default Header;
