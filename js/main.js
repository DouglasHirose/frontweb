const initialingProducts = async() => {
    const response = await fetch('http://localhost:3000/product/list')
    const data = await response.json()

    const divList = document.getElementById('product-list')
    data.map((product) => {
        divList.innerHTML += `
        <div id="product-list">
        <div class="product-card">
            <div class="icon-product">
                <span>teste</span>
            </div>
            <div class="text-products">
                <p>${product.type}$</p>
                <p>${product.adress}$</p>
                <p>${product.property}$</p>
            </div>
        </div>
    </div>
    `
    })
}