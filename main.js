// Get all buttons
let addToCartButtons = document.querySelectorAll("[type='button']");

// Loop through each button
addToCartButtons.forEach(button => {
  // Check button text
    if (button.value === "Add to cart") {
    button.onclick = function() {
        let div = document.createElement("div");
        div.className = "cart-popup";

        let heading = document.createElement("h2");
        heading.textContent = "Shopping cart";
    
        let indiv = document.createElement("div");
        indiv.className = "indiv"

        let indivl = document.createElement("div");
        indivl.className = "indivl"

        let img = document.createElement("img");
        img.src = "./images/oatmeal.jpg"

        let indivr = document.createElement("div");
        indivr.className = "indivr" 

        let productTitle = document.createElement("p");
        productTitle.className = "c-pTitle"
        productTitle.textContent = "Oatmeal & Lavender Bath Soak"

        let total = document.createElement("p");
        total.className = "c-total"
        total.textContent = "Total: 1"

        let price = document.createElement("p");
        price.className = "c-price"
        price.textContent = "176.90$"

        let dsubtotal = document.createElement("p");
        dsubtotal.className = "dsubtotal"
        let subtotal = document.createElement("p");
        subtotal.className = "c-subtotal"
        subtotal.textContent = "Subtotal:"

        let subtotal2 = document.createElement("p");
        subtotal2.className = "c-subtotal2"
        subtotal2.textContent = "176.90$"
    

        let buttons = document.createElement("div");
        buttons.className = "buttons";

        let viewCart = document.createElement("button")
        viewCart.className = "viewCart";
        viewCart.textContent = "View Cart";

        let checkout = document.createElement("button")
        checkout.className = "checkout";
        checkout.textContent = "Checkout"

        let closing = document.createElement("button")
        closing.textContent = "x";
        closing.className = "close"

        div.appendChild(heading);
        div.appendChild(indiv);
        div.appendChild(dsubtotal);
        div.appendChild(buttons)
        div.appendChild(closing)

        indiv.appendChild(indivl);
        indiv.appendChild(indivr);

        indivl.appendChild(img);

        indivr.appendChild(productTitle);
        indivr.appendChild(total);
        indivr.appendChild(price);

        dsubtotal.appendChild(subtotal)
        dsubtotal.appendChild(subtotal2)

        buttons.appendChild(viewCart)
        buttons.appendChild(checkout)

        document.body.appendChild(div);

        closing.onclick = function () {
            div.remove()
        }
    };
    }
});


