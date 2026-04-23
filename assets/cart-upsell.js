document.addEventListener("DOMContentLoaded", async () => {
    const cart = await fetch("/cart.js").then(res => res.json());
  
    const hasProduct = cart.items.some(item => item.product_type === "Skincare");
  
    if (hasProduct) {
      document.getElementById("upsell-container").innerHTML = `
        <div class="upsell-box">
          <p>Add this recommended product</p>
          <button onclick="addUpsell()">Add to Cart</button>
        </div>
      `;
    }
  });
  
  function addUpsell() {
    fetch("/cart/add.js", {
      method: "POST",
      body: JSON.stringify({
        id: 123456789,
        quantity: 1
      }),
      headers: { "Content-Type": "application/json" }
    }).then(() => location.reload());
  }