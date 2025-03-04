
let cart = [];

function addToCart(productName, productPrice) {
  // Adiciona o produto ao carrinho
  cart.push({ name: productName, price: productPrice });
  alert(`${productName} foi adicionado ao seu carrinho!`);
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
  const whatsappUrl = `https://wa.me/5547992801691?text=${encodeURIComponent(message)}`;
  
  // Redireciona para o WhatsApp
  window.location.href = whatsappUrl;
}
