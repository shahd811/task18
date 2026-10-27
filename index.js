let cart = [];

function render() {
  document.getElementById('count').textContent = cart.length;
  document.getElementById('badge').textContent = cart.length + ' Items';
  let list = document.getElementById('cartList');

  if (cart.length === 0) {
    list.className = 'empty';
    list.innerHTML = `<div class="empty-icon">🛒</div><b>Your cart is empty</b><p>Add some products to get started!</p>`;
    return;
  }

  list.className = '';
  list.innerHTML = cart.map((p, i) => 
    `<div class="item"><span>${i+1}. ${p}</span><span>${p.length} chars</span></div>`
  ).join('');
}

function addFirst() {
  let val = document.getElementById('productInput').value.trim();
  if (!val) return alert('Enter product name');
  if (cart.some(c => c.toLowerCase() === val.toLowerCase())) return alert('Product already exists!');
  cart.unshift(val);
  document.getElementById('productInput').value = '';
  render();
}

function addLast() {
  let val = document.getElementById('productInput').value.trim();
  if (!val) return alert('Enter product name');
  if (cart.some(c => c.toLowerCase() === val.toLowerCase())) return alert('Product already exists!');
  cart.push(val);
  document.getElementById('productInput').value = '';
  render();
}

function removeFirst() {
  if (!cart.length) return alert('Cart is empty');
  cart.shift();
  render();
}

function removeLast() {
  if (!cart.length) return alert('Cart is empty');
  cart.pop();
  render();
}

function searchCart() {
  let key = document.getElementById('searchInput').value.toLowerCase().trim();
  let res = document.getElementById('searchResult');
  if (!key) { res.textContent = ''; return; }
  let found = cart.filter(p => p.toLowerCase().includes(key));
  res.textContent = found.length ? `Found: ${found.join(', ')}` : 'No product contains this keyword';
}

render();