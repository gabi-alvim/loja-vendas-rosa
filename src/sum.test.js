import React, { useState } from 'react';
import { render, fireEvent } from '@testing-library/react';
import { App }  from './App';
import {expect, test, screen} from '@jest/globals';

describe('App component', () => {
  test('should render products and cart sections', () => {
    function App() {
      const [products, setProducts] = useState([
        
      ])
      expect(products).toBeInTheDocument();
    }
    
  })
  

  test('should add a product to the cart', () => {
    function App() {
      const [products, setProducts] = useState([
        
      ])
    const productToAdd = screen.toBeInTheDocument('Blusa');
    const addButton = screen.toBe('btn-blusa');

    fireEvent.click(addButton);

    const cartProduct = screen.toBeInTheDocument('Blusa');
    const cartTotal = screen.toBeInTheDocument('Total: R$ 50.00');

    expect(productToAdd).toBeInTheDocument();
    expect(cartProduct).toBeInTheDocument();
    expect(cartTotal).toBeInTheDocument();
    }
  });
  test('should remove a product from the cart', () => {
    function App() {
      const [products, setProducts] = useState([
        
      ])
    const productToAdd = screen.getByText('Blusa');
    const addButton = screen.getByTestId('btn-blusa');
    fireEvent.click(addButton);
    const removeButton = screen.getByTestId('btn-remove-blusa');
    fireEvent.click(removeButton);

    const emptyCartMessage = screen.getByText('O carrinho está vazio');

    expect(productToAdd).toBeInTheDocument();
    expect(emptyCartMessage).toBeInTheDocument();
    }
  });
  

});