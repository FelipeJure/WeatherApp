import React from 'react';
import Logo from '../Images/logoClima.jpg';
import SearchBar from './SearchBar.jsx';
import s from './Nav.module.css';
import {Link} from 'react-router-dom';
// import './pruebaOnOff.css';

function Nav({onSearch}) {

//   function modeOnOff (){
//     let ball = document.querySelector('.ball');
//     let btn = document.querySelector('.btn');
//     let container = document.querySelector('.container');
//     let body = document.querySelector('body');
//     if (btn.value === 'on'){
//       ball.classList.replace('on','off');
//       container.style.backgroundColor = 'white'
//       body.style.backgroundImage = "url('https://radiofonica.com/wp-content/uploads/2020/12/clima2.jpg')"
//       btn.value = 'off'
//     } else{
//       ball.classList.add('off')
//       ball.classList.replace('off','on')
//       container.style.backgroundColor = 'black'
//       body.style.backgroundImage = "url('https://s1.1zoom.me/big0/638/Milky_Way_Sky_Night_447884.jpg')"
//       btn.value = 'on'
//     }
// }

  return (
    <nav className={s.nav}>
      <Link to='/' className={s.link}>
        <div>
          <img src={Logo} alt="imagen del clima" id={s.logoClima}/>
          <span >Weather App</span>
        </div>
      </Link>
        {/* <div className='container'>
            <button className='btn' onClick={modeOnOff}></button>
            <button className='ball' ></button> 
        </div> */}
      <SearchBar onSearch={onSearch}/> 
    </nav>
  );
};

export default Nav;
