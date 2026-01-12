(function () {
  const menuBtn = document.querySelector(".menu-toggle");
  const mobileNav = document.querySelector(".mobile-nav");
  const closeBtn = document.querySelector(".mobile-nav .close-btn");

  function openMenu() {
    menuBtn.classList.add("open");
    menuBtn.setAttribute("aria-expanded", "true");
    mobileNav.classList.add("open");
    mobileNav.setAttribute("aria-hidden", "false");
    // trap focus optionally could be added
  }

  function closeMenu() {
    menuBtn.classList.remove("open");
    menuBtn.setAttribute("aria-expanded", "false");
    mobileNav.classList.remove("open");
    mobileNav.setAttribute("aria-hidden", "true");
  }

  menuBtn &&
    menuBtn.addEventListener("click", function () {
      const expanded = this.getAttribute("aria-expanded") === "true";
      if (expanded) closeMenu();
      else openMenu();
    });

  closeBtn && closeBtn.addEventListener("click", closeMenu);

  // close on escape
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") closeMenu();
  });

  // close when clicking a link inside the mobile nav
  mobileNav &&
    mobileNav.addEventListener("click", function (e) {
      if (e.target.matches("a")) closeMenu();
    });
})();

const cartItems = document.getElementById("carItems");
const cartCount = document.getElementById("cartCount");
const total = document.getElementById("total");
const cartPanel = document.getElementById("cartPanel");

let car = [];

function addToCart(name, price) {
    cart.push({ name, price});
    updateCart();
}

function removeFromCart(i) {
    cart.splice(i, 1);
    updateCart();
}

function updateCart() {
    cartItems.innerHTML = "";
    let sum = 0;

    cart.forEach((item, i) => {
        sum += item.price;
        cartItems.innerHTML += `<div class="cart-item">
        <span>${item.name}</span>
        <button id="btn" onclick="removeFromCart(${i})">X</button>
        </div>`;
    });

    cartCount.innerText = cart.length;
    total.innerText = sum;
}

function toggleCart() {
    cartPanel.style.display = cartPanel.style.display === "flex"? "none" : "flex";
}