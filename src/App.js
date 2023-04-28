import React, { useState } from 'react';
import './App.css';


export function App() {
  const [cart, setCart] = useState([]);
  const [products] = useState([
    { name: 'Blusa', price: 50, image: './blusa.png', buttonCy: 'btn-blusa', buttonCr: 'btn-remove-blusa'},
    { name: 'Calça', price: 200, image: './calça.png',  buttonCy: 'btn-calça', buttonCr: 'btn-remove-calça'},
    { name: 'Vestido', price: 300, image: './vestido.png', buttonCY: 'btn-vestido', buttonCr: 'btn-remove-vestido'},
    { name: 'Top', price: 50, image: './top.png', buttonCY: 'btn-top', buttonCr: 'btn-remove-top'},
    { name: 'Sutiã', price: 70, image: './sutiã.png', buttonCY: 'btn-sutiã', buttonCr: 'btn-remove-sutiã'},
    { name: 'Short', price: 90, image: './short.jpg', buttonCY: 'btn-short', buttonCr: 'btn-remove-short'}
  ])

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (product) => {
    const index = cart.indexOf(product);
    setCart([...cart.slice(0, index), ...cart.slice(index + 1)]);
  }
  

  return (
    <div className="Cor" style={{backgroundColor: '#FF69B4'}}>
    <div className="App">
    <div className="container">    
      <h1>Produtos</h1>
      {products.map((product) => (
        <div key={product.name}>
          <h3>{product.name}</h3>
          <img src={product.image} width="150px" height="150" alt={product.name} />
          <p>R$ {product.price.toFixed(2)}</p>
          <button className="BUTTON_EEI" data-testid={product.buttonCy} onClick={() => addToCart(product, `Adicionar ${product.name.buttonCY} ao Carrinho`)}> Adicionar ao Carrinho</button>
        </div>
      ))}
      <h1>Carrinho</h1>
      {cart.length === 0 ? (
        <p className="carrinhoVazio" >O carrinho está vazio</p>
      ) : (
        <>
          {cart.map((product) => (
            <div className="Carrinho" key={product.name}>
              <h3>{product.name}</h3>
              <img src={product.image} width="150px" height="150" alt={product.name} />
              <p>R$ {product.price.toFixed(2)}</p>
              <button className="BUTTON_EEI" data-testid={product.buttonCr} onClick={() => removeFromCart(product, `Remover ${product.name.buttonCY} do Carrinho`)}>Remover do Carrinho</button>
            </div>
          ))}
          <p>Total: R$ {cart.reduce((acc, curr) => acc + curr.price, 0).toFixed(2)}</p>
        </>
      )}
     </div>
    </div>
    </div>
    
  );
}


export default App;
