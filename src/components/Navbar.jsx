import React from 'react';
import {Link} from 'react-router-dom';
import {FiShoppingBag} from 'react-icons/fi';
import {BsFillPencilFill} from 'react-icons/bs';

export default function Navbar() {
  return (
    <header>
      {/* 최상위 경로로 이동 */}
      <Link to ='/'>
        <FiShoppingBag>
          <h1>Shoppy</h1>
        </FiShoppingBag>
      </Link>
      <nav>
        {/* 상단에 다양한 nav 메뉴들  */}
        <Link to='/products'>Products</Link>
        <Link to='/carts'>Carts</Link>
        <Link to='/products/new'>
          <BsFillPencilFill>
          </BsFillPencilFill>
        </Link>
        <button>Login</button>
      </nav>
    </header>
  );
}

