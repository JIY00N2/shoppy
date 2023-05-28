import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';
import {FiShoppingBag} from 'react-icons/fi';
import {BsFillPencilFill} from 'react-icons/bs';
import { login, logout, onUserStateChange } from '../api/firebase';
import User from './User';
import Button from './ui/Button';

export default function Navbar() {
  const [user, setUser] = useState();

  useEffect(()=>{
    onUserStateChange(user => {
      console.log(user);
      setUser(user);
    });
  },[]);

  return (
    <header className='flex justify-between border-b border-gray-300 p-2'>
      {/* 최상위 경로로 이동 */}
      <Link to ='/' className='flex itmes-center text-4xl text-brand'>
        <FiShoppingBag></FiShoppingBag>
        <h1>Shoppy</h1>
      </Link>
      <nav className='flex items-center gap-4 font-semibold'>
        {/* 상단에 다양한 nav 메뉴들  */}
        <Link to='/products'>Products</Link>
        <Link to='/carts'>Carts</Link>
        {user && user.isAdmin && (
          <Link to='/products/new' className='text-2xl'>
            <BsFillPencilFill></BsFillPencilFill>
          </Link>
        )}
        {user && <User user={user}></User>}
        {/* 사용자가 없다면 로그인 버튼을 보여줌*/}
        {!user && <Button text ={'Login'} onClick ={login}>Login</Button>}
        {/* 사용자가 있다면 로그아웃 버튼을 보여줌*/}
        {user && <Button text ={'Logout'} onClick ={logout}>Logout</Button>}
      </nav>
    </header>
  );
}

