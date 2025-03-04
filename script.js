
let cart = [];

function addToCart(productName, productPrice) {
  // Adiciona o produto ao carrinho
  cart.push({ name: productName, price: productPrice });
  
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
