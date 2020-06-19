import React from 'react';

import { MdShoppingBasket } from 'react-icons/md';

import { Link } from 'react-router-dom';
import { Container, Cart } from './styles';

import logo from '../../assets/images/logo.svg';

function Header() {
  return (
    <Container>
      <Link to="/">
        <img src={logo} alt="BoxShoes" />
      </Link>

      <Cart to="/cart">
        <div>
          <strong>Meu Carrinho</strong>
          <span>3 Carrinhos</span>
        </div>
        <MdShoppingBasket size={36} color="#FFF" />
      </Cart>
    </Container>
  );
}

export default Header;
