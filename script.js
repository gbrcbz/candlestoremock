// Dropdown pentru meniu navigațional
document.querySelectorAll('nav ul li').forEach(function (menuItem) {
    menuItem.addEventListener('mouseover', function () {
        const dropdown = menuItem.querySelector('.dropdown');
        if (dropdown) {
            dropdown.style.display = 'block';
        }
    });

    menuItem.addEventListener('mouseleave', function () {
        const dropdown = menuItem.querySelector('.dropdown');
        if (dropdown) {
            setTimeout(() => {
                dropdown.style.display = 'none';
            }, 200); // Mică întârziere pentru a evita dispariția bruscă
        }
    });
});

// Schimbare imagine banner (slider simplu)
const heroSection = document.querySelector('.hero');
if (heroSection) {
    const bannerImages = [
        'img/banner.jpg',
        'img/banner2.jpg',
        'img/banner3.jpg'
    ];
    let currentImage = 0;

    function changeBanner() {
        currentImage = (currentImage + 1) % bannerImages.length;
        heroSection.style.backgroundImage = `url('${bannerImages[currentImage]}')`;
    }

    setInterval(changeBanner, 5000);
}

// Afișare alertă la adăugarea unui produs în coș
const addToCartButtons = document.querySelectorAll('.product .btn');

if (addToCartButtons.length > 0) {
    addToCartButtons.forEach(function (button) {
        button.addEventListener('click', function () {
            alert('Produsul a fost adăugat în coș!');
        });
    });
}

// Schimbare valută și limbă în bara de sus
const currencySelect = document.getElementById('currency');
const languageSelect = document.getElementById('language');

if (currencySelect) {
    currencySelect.addEventListener('change', function () {
        alert(`Ați selectat moneda: ${currencySelect.value}`);
    });
}

if (languageSelect) {
    languageSelect.addEventListener('change', function () {
        alert(`Ați selectat limba: ${languageSelect.value}`);
    });
}

// Efect hover pe categoriile de top
const categories = document.querySelectorAll('.category');

if (categories.length > 0) {
    categories.forEach(function (category) {
        category.addEventListener('mouseenter', function () {
            category.style.transform = 'scale(1.05)';
            category.style.transition = 'transform 0.3s ease';
        });

        category.addEventListener('mouseleave', function () {
            category.style.transform = 'scale(1)';
        });
    });
}

// Formular Contact
const contactForm = document.getElementById("contactForm");

if (contactForm) {
    contactForm.addEventListener("submit", function (event) {
        event.preventDefault();
        alert("Mesajul a fost trimis cu succes!");
        this.reset();
    });
}

// Inițializare hartă Google Maps
function initMap() {
    const mapElement = document.getElementById("map");
    if (mapElement) {
        var location = { lat: 44.3984067, lng: 26.1008113 };
        var map = new google.maps.Map(mapElement, {
            zoom: 15,
            center: location
        });

        new google.maps.marker.AdvancedMarkerElement({
            position: location,
            map: map
        });
    }
}


// FAQ - Expandare răspunsuri
document.addEventListener("DOMContentLoaded", function () {
    const questions = document.querySelectorAll(".faq-question");

    if (questions.length > 0) {
        questions.forEach(question => {
            question.addEventListener("click", function () {
                const answer = this.nextElementSibling;
                if (answer) {
                    answer.style.display = answer.style.display === "block" ? "none" : "block";
                    this.classList.toggle("active"); // Adaugă stil pentru întrebările active
                }
            });
        });
    }

    // Formular de trimitere întrebări
    const questionForm = document.getElementById("questionForm");
    if (questionForm) {
        questionForm.addEventListener("submit", function (event) {
            event.preventDefault();
            alert("Întrebarea a fost trimisă!");
            this.reset();
        });
    }
});

// Afișare alertă la încărcarea paginii de livrare & returnare
if (window.location.pathname.includes("livrare-returnare.html")) {
    alert("Consultați politica noastră de livrare și returnare pentru mai multe detalii.");
}

// ✅ FUNCȚIONALITATE MENIU BURGER ✅
const burgerMenu = document.querySelector(".burger-menu");
const navMenu = document.querySelector("nav ul");

if (burgerMenu && navMenu) {
    burgerMenu.addEventListener("click", function () {
        navMenu.classList.toggle("show");
    });

    // Închide meniul când un link este apăsat (pentru UX mai bun pe mobil)
    document.querySelectorAll("nav ul li a").forEach(link => {
        link.addEventListener("click", function () {
            navMenu.classList.remove("show");
        });
    });
}

// ✅ FUNCȚIONALITATE COȘ DE CUMPĂRĂTURI ✅
let cart = [];

document.querySelectorAll(".add-to-cart").forEach(button => {
    button.addEventListener("click", function () {
        let productId = this.closest(".product").getAttribute("data-id");
        let productName = this.closest(".product").querySelector("h3").innerText;
        let productPrice = this.closest(".product").querySelector(".price").innerText;

        let product = { id: productId, name: productName, price: productPrice };

        cart.push(product);
        updateCart();
    });
});

function updateCart() {
    document.getElementById("cart-count").textContent = cart.length;
}
