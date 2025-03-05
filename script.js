let cart = JSON.parse(localStorage.getItem('cart')) || [];

function addToCart(productName, productPrice, productImage) {
    // Adiciona o produto ao carrinho com imagem
    cart.push({ name: productName, price: productPrice, image: productImage });

    // Salva no localStorage
    localStorage.setItem('cart', JSON.stringify(cart));

    // Exibe notificação
    showNotification();
}

// Exibir notificação de item adicionado
function showNotification() {
    const notification = document.getElementById('notification');
    notification.classList.add('show');
    setTimeout(() => {
        notification.classList.remove('show');
    }, 3000);
}

// Exibir os itens no carrinho
function viewCart() {
    const cartItemsList = document.getElementById('cartItemsList');
    cartItemsList.innerHTML = '';

    if (cart.length > 0) {
        cart.forEach((item, index) => {
            const li = document.createElement('li');
            li.classList.add('cart-item');

            // Criar imagem do produto
            const img = document.createElement('img');
            img.src = item.image;
            img.alt = item.name;
            img.classList.add('cart-item-img');

            // Criar texto do produto
            const span = document.createElement('span');
            span.textContent = `${item.name} 
             R$ ${item.price.toFixed(2)}`;

            // Criar botão de remover
            const removeBtn = document.createElement('button');
            removeBtn.textContent = 'Remover';
            removeBtn.classList.add('remove-btn');
            removeBtn.onclick = function () {
                removeItem(index);
            };

            // Montar o item do carrinho
            li.appendChild(img);
            li.appendChild(span);
            li.appendChild(removeBtn);
            cartItemsList.appendChild(li);
        });
    } else {
        const li = document.createElement('li');
        li.textContent = "Carrinho vazio.";
        cartItemsList.appendChild(li);
    }
}

// Remover um item específico do carrinho
function removeItem(index) {
    cart.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(cart));
    viewCart();
}

// Limpar todo o carrinho
function clearCart() {
    localStorage.removeItem('cart');
    cart = [];
    viewCart();
}

// Finalizar compra via WhatsApp
function checkout() {
    if (cart.length === 0) {
        showEmptyCartNotification();
        return;
    }

    let message = "Itens no Carrinho:\n";
    cart.forEach(item => {
        message += `${item.name} - R$ ${item.price}\n`;
    });

    const whatsappUrl = `https://wa.me/5547988399170?text=${encodeURIComponent(message)}`;

    const link = document.createElement('a');
    link.href = whatsappUrl;
    link.target = '_blank';
    link.click();
}

// Exibir aviso de carrinho vazio
function showEmptyCartNotification() {
    const notification = document.getElementById('emptyCartNotification');
    notification.classList.add('show');
    setTimeout(() => {
        notification.classList.remove('show');
    }, 3000);
}

// Se estiver na página do carrinho, exibir os itens
if (window.location.pathname.includes('cart.html')) {
    viewCart();
}
