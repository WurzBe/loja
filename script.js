let cart = JSON.parse(localStorage.getItem('cart')) || [];

function addToCart(productName, productPrice) {
  // Adiciona o produto ao carrinho
  cart.push({ name: productName, price: productPrice });

  // Salva o carrinho no localStorage
  localStorage.setItem('cart', JSON.stringify(cart));

  // Exibe o aviso de item adicionado
  showNotification();
}

function showNotification() {
  const notification = document.getElementById('notification');
  
  notification.classList.add('show');
  setTimeout(() => {
    notification.classList.remove('show');
  }, 3000);
}

// Função para exibir os itens do carrinho na página do carrinho
function viewCart() {
  const cartItemsList = document.getElementById('cartItemsList');
  cartItemsList.innerHTML = '';  // Limpa a lista de itens antes de adicionar os novos

  if (cart.length > 0) {
    cart.forEach(item => {
      const li = document.createElement('li');
      li.textContent = `${item.name} - R$ ${item.price}`;
      cartItemsList.appendChild(li);
    });
  } else {
    const li = document.createElement('li');
    li.textContent = "Carrinho vazio.";
    cartItemsList.appendChild(li);
  }
}

// Função para finalizar a compra (abrir WhatsApp)
function checkout() {
  if (cart.length === 0) {
    showEmptyCartNotification();
    return;
  }

  let message = "Itens no Carrinho:\n";
  cart.forEach((item) => {
    message += `${item.name} - R$ ${item.price}\n`;
  });

  const whatsappUrl = `https://wa.me/5547988399170?text=${encodeURIComponent(message)}`;

  const link = document.createElement('a');
  link.href = whatsappUrl;
  link.target = '_blank';  // Para abrir em uma nova aba
  link.click();  // Simula o clique no link
}

// Função para mostrar o aviso de carrinho vazio
function showEmptyCartNotification() {
  const notification = document.getElementById('emptyCartNotification');
  
  notification.classList.add('show');
  setTimeout(() => {
    notification.classList.remove('show');
  }, 3000);
}

// Se estamos na página do carrinho (cart.html), exibe os itens do carrinho
if (window.location.pathname.includes('cart.html')) {
  viewCart();
}
function clearCart() {
  localStorage.removeItem('cart'); // Remove os itens do localStorage
  document.getElementById('cartItemsList').innerHTML = ''; // Limpa a lista exibida
  alert('Carrinho limpo com sucesso!'); // Alerta para o usuário
}
