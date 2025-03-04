let cart = [];

function addToCart(productName, productPrice) {
  // Adiciona o produto ao carrinho
  cart.push({ name: productName, price: productPrice });

  // Mostra o aviso de item adicionado
  showNotification();


function showNotification() {
  const notification = document.getElementById('notification');
  
  notification.classList.add('show');
  setTimeout(() => {
    notification.classList.remove('show');
  }, 3000);  // O aviso ficará visível por 3 segundos
}
}
// Função para mostrar os itens no carrinho
function viewCart() {
  const cartItemsList = document.getElementById('cartItemsList');
  
  // Limpa a lista de itens do carrinho
  cartItemsList.innerHTML = '';

  // Adiciona os itens do carrinho à lista
  cart.forEach(item => {
    const li = document.createElement('li');
    li.textContent = `${item.name} - R$ ${item.price}`;
    cartItemsList.appendChild(li);
  });

  // Exibe a seção do carrinho
  cartSection.style.display = 'block';
}

// Função para finalizar a compra
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
  
  // Cria o link para o WhatsApp e abre em uma nova aba
  const link = document.createElement('a');
  link.href = whatsappUrl;
  link.target = '_blank';  // Força abrir em uma nova aba
  link.click();  // Simula um clique no link
}

// Função para mostrar o aviso de carrinho vazio
function showEmptyCartNotification() {
  const notification = document.getElementById('emptyCartNotification');
  
  notification.classList.add('show');
  setTimeout(() => {
    notification.classList.remove('show');
  }, 3000);  // O aviso ficará visível por 3 segundos
}

// Exibir o carrinho quando o usuário clicar no link
document.getElementById('viewCartBtn').addEventListener('click', function() {
  viewCart();
});
