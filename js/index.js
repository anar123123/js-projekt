const url = "https://dummyjson.com/products";
const container = document.querySelector(".container")

fetch(url)
.then((resp)=>resp.json())
.then((data)=>{
    const {products} = data;
    products.filter(item =>{
        const { thumbnail, price, discountPercentage, description } = item;
        const oldprice = (price + (price * discountPercentage) / 100).tofixed(2)
        let html = `
            <div class="item">
          <div class="img-box">
            <img src="${thumbnail}" alt="" />
          </div>
          <div class="data-box">
            <div class="price-box">
              <p class="current-price">${price}<i class="fa-solid fa-euro-sign"></i></p>
              <p class="old-price">${oldprice}</p>
            </div>
            <p class="month-price">12 | 60</p>
            <p class="desc">${description}</p>
          </div>
          <div class="btn">
            <button class="icon-heart">
              <i class="fa-solid fa-heart"></i>
            </button>
            <button class="icon-btn">
              <i class="fa-solid fa-gift"></i>
              <p>Sebete at</p>
            </button>
          </div>
        </div>
        </div>`;
        container.insertAdjacentHTML("beforeend", html)
    })
})