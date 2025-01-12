document.addEventListener("DOMContentLoaded", () => {
    const products = {
        MicronBundle: [
            { name: "B&W Flannel", price: "MYR23.30", image: "images/productA.jpg" },
            { name: "Red Flannel", price: "MYR25.00", image: "images/productB.jpg" },
            { name: "Green Flannel", price: "MYR27.00", image: "images/productA1.jpg" },
            { name: "Converse Shoes HighCut", price: "MYR20.00", image: "images/productA2.jpg" },
            { name: "NewBalance shoes", price: "MYR34.00", image: "images/productA3.jpg" },
            { name: "Cargo Pants", price: "MYR20.50", image: "images/productA4.jpg" },
        ],
        YinYangBundle: [
            { name: "SteelMen Shirt", price: "MYR35.00", image: "images/productC.jpg" },
            { name: "StayCold Premium", price: "MYR29.50", image: "images/productD.jpg" },
            { name: "Loose fit men pants", price: "MYR31.50", image: "images/productC1.jpg" },
            { name: "Striped casual pants", price: "MYR34.50", image: "images/productC2.jpg" },
            { name: "Vans oldschool shoes", price: "MYR25.00", image: "images/productC3.jpg" },
            { name: "Asics Gel Kayano", price: "MYR35.00", image: "images/productC4.jpg" },
            
        ],
        BadPanda: [
            { name: "Japanese Shirt", price: "MYR21.00", image: "images/productG.jpg" },
            { name: "UnitMe Shirt", price: "MYR19.90", image: "images/productF.jpg" },
            { name: "Nike windbreaker", price: "MYR15.00", image: "images/productE1.jpg" },
            { name: "Pulau Batu Jacket", price: "MYR23.00", image: "images/productE2.jpg" },
            { name: "Nike x Sean wotherspoon", price: "MYR14.90", image: "images/productE3.jpg" },
            { name: "Nike x Ben & Jerry", price: "MYR31.00", image: "images/productE4.jpg" },
        ],
    };

    window.displayProducts = function (shopName) {
        const productList = document.getElementById("productList");
        const productsContainer = document.getElementById("productsContainer");

        // Clear previous products
        productsContainer.innerHTML = "";

        // Add new products
        if (products[shopName]) {
            products[shopName].forEach(product => {
                const productCard = `
                    <div class="product-card" onclick="showProductDetails('${product.name}', '${product.price}', '${product.image}', 'Condition for ${product.name} is 9/10 ')">
                        <img src="${product.image}" alt="${product.name}">
                        <h3>${product.name}</h3>
                        <p>${product.price}</p>
                    </div>
                `;
                productsContainer.innerHTML += productCard;
            });
        }

        // Show the product list section
        productList.style.display = "block";
        productList.scrollIntoView({ behavior: "smooth" });
    };
});

function showProductDetails(name, price, image, description) {
    const modal = document.getElementById("productDetailsModal");
    document.getElementById("productName").textContent = name;
    document.getElementById("productPrice").textContent = price;
    document.getElementById("productImage").src = image;
    document.getElementById("productDescription").textContent = description;

    modal.style.display = "flex";
}

function closeProductDetails() {
    const modal = document.getElementById("productDetailsModal");
    modal.style.display = "none";
}

function buyProduct() {
    alert("Already add to cart!");
    closeProductDetails();
}

window.onclick = function (event) {
    const modal = document.getElementById("productDetailsModal");
    if (event.target === modal) {
        closeProductDetails();
    }
};