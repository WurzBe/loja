let cart = [];

function addToCart(productName, productPrice) {
  const product = { name: productName, price: productPrice };
  cart.push(product);
  alert(`${productName} foi adicionado ao seu carrinho!`);
}

document.querySelectorAll('.produto button').forEach((button) => {
  button.addEventListener('click', () => {
    const productName = button.previousElementSibling.previousElementSibling.textContent;
    const productPrice = button.previousElementSibling.textContent.replace('Preço: ', '');
    addToCart(productName, productPrice);
  });
});
