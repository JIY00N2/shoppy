import React from 'react';
import {Link} from 'react-router-dom';
import {FiShoppingBag} from 'react-icons/fi';
import {BsFillPencilFill} from 'react-icons/bs';
import { login } from '../api/firebase';

export default function Navbar() {
  return (
    <header className='flex justify-between border-b border-gray-300 p-2'>
      {/* 최상위 경로로 이동 */}
      <Link to ='/' className='flex itmes-center text-4xl text-brand'>
        <FiShoppingBag>
          <h1>Shoppy</h1>
        </FiShoppingBag>
      </Link>
      <nav className='flex items-center gap-4 font-semibold'>
        {/* 상단에 다양한 nav 메뉴들  */}
        <Link to='/products'>Products</Link>
        <Link to='/carts'>Carts</Link>
        <Link to='/products/new' className='text-2xl'>
          <BsFillPencilFill>
          </BsFillPencilFill>
        </Link>
        <button onClick ={login}>Login</button>
      </nav>
    </header>
  );
}

