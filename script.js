
let cart = [];

function addToCart(productName, productPrice) {
  // Adiciona o produto ao carrinho
  cart.push({ name: productName, price: productPrice });
  

  // Mostra o aviso de item adicionado
  showNotification();
}
function showNotification() {
  const notification = document.getElementById('notification');
  
  // Adiciona a classe 'show' para mostrar a notificação
  notification.classList.add('show');

  // Remove a classe 'show' após 3 segundos, para esconder o aviso
  setTimeout(() => {
    notification.classList.remove('show');
  }, 1500);  // O aviso ficará visível por 3 segundos
}
function checkout() {
  if (cart.length === 0) {
    alert("Seu carrinho está vazio!");
    return;
  }

  // Monta a mensagem para o WhatsApp
  let message = "Itens no Carrinho:\n";
  cart.forEach((item) => {
    message += `${item.name} - R$ ${item.price}\n`;
  });

  // Envia a mensagem para o seu WhatsApp (substitua com seu número)
  const whatsappUrl = `https://wa.me/554788399170?text=${encodeURIComponent(message)}`;
  
  // Abre a URL do WhatsApp em uma nova aba
  const link = document.createElement('a');
  link.href = whatsappUrl;
  link.target = '_blank';  // Força abrir em uma nova aba
  link.click();  // Simula um clique no link
}
