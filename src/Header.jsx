import React,{useState} from 'react'
import { Link } from 'react-router-dom';
import SearchIcon from '@material-ui/icons/Search';
import "./Header.css"
import { auth } from './firebase';
import {useStateValue} from "./StateProvider";
import Iframe from 'react-iframe'




function Header() {
    
    const[{ user }]=useStateValue();

    const[leftText,setLeftText]=useState("http://www.youtube.com/embed/xDMP3i36naA");
    const[rightText,setRightText]=useState("http://www.youtube.com/embed/xDMP3i36naA");

    const[lefturl,setLeftUrl]=useState(leftText);
    const[righturl,setRightUrl]=useState(leftText);

   const submitText=e=>{
     e.preventDefault();

     setLeftUrl(leftText);
     setLeftText("");

     
   }
   const submitText2=e=>{
    e.preventDefault();

    setRightUrl(rightText);
    setRightText("");
  }
    
    const login=()=>{
        if(user){
            auth.signOut();
        }
    }

    return (
        <div className="home">
        <nav className="header">

        <form>
          <div className="header_left">

            <span className="header_optionLineOne">Hi,{user?.email}</span>
        <div className="header_search1">
         <input onChange={(e)=>setLeftText(e.target.value)} value={leftText}  type="text" className="header_searchInput" />
         <button onClick={submitText} type="submit" className="text_button"><SearchIcon className="header_searchIcon" /></button>
         </div>

         
         </div>
         </form>
         
         
         
         <form>
         <div className="header_right">
         
            <div className="header_search2">
            
              <input  onChange={(e)=>setRightText(e.target.value)} value={rightText}  type="text" className="header_searchInput" />
               <button onClick={submitText2} type="submit"  className="text_button2"> <SearchIcon className="header_searchIcon" /> </button>
               
               </div>
        
         <Link to={!user && "/login"} className="header_link">
            <div onClick={login} className="login_button">
               <span className="header_optionLineTwo">{user?'Logout':'LogIn'}</span>
            </div>
        </Link>

            </div>
            </form>
            
        </nav>
 
        <div className="mainPage">

     <div className="left_view">
    
      <Iframe 
              url={lefturl}
             //width="450px"
           //height="450px"
           frameBorder="0"
             id="myId"
            className="myClassname1"
           display="initial"
            position="relative"/>
    </div>

     <div className="right_view">
     <Iframe url={righturl}
             //width="450px"
           //height="450px"
            
            className="myClassname2"
           display="initial"
            position="relative"
            frameBorder="0"
            />
           
    </div>

</div>
</div>
 
        
            
        
        
        
    )
}

export default Header;
