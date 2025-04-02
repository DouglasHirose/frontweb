const initialingProducts = async(id) => {
    const response = await fetch('http://localhost:3000/product/list')
    const data = await response.json()
    console.log(data)

    const divList = document.getElementById('product-list')
    divList.innerHTML = ''
    data.map((product) => {
        divList.innerHTML += `
        <div class="product-card">
            <div class="icon-product">
                <span>i-${product.property}</span>
            </div>
            <div class="text-products">
                <p>${product.type}$</p>
                <p>${product.adress}$</p>
                <p>${product.property}$</p>
                <button onclick="removeProduct(${product.id})">Excluir</button>
            </div>
        </div>
    `
    })
}

const removeProduct = async(id) => {
    const response = await fetch(`http://localhost:3000/product/${id}`, {
        method:'DELETE',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    const data = await response.json()
    console.log(data)
    loadProducties()
    return
}

const createProduct = async (event) => {
    event.preventDefault()
    const product = {
        type: event.target.type.value,
        addres: event.target.adress.value,
        rooms: +event.target.rooms.value,
        property: event.target.property.value,
    }
}