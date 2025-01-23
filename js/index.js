const url = "https://dummyjson.com/products";
const container = document.querySelector(".standart-container");
const newproduct = document.querySelector(".new-product");


function addtext(item , box){
  const { thumbnail, price, discountPercentage, description } = item;
      const oldprice = price + (price * discountPercentage) / 100;
      let html = `
            <div class="item">
          <div class="img-box">
            <img src="${thumbnail}" alt="" />
          </div>
          <div class="data-box">
            <div class="price-box">
              <p class="current-price">${price}<i class="fa-solid fa-euro-sign"></i></p>
              <p class="old-price">${oldprice.toFixed(2)}</p>
            </div>
            <p class="month-price">12 | 60</p>
            <p class="desc">${description}</p>
          </div>
          <div class="actions">
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
        // return html 
        box.insertAdjacentHTML("beforeend", html);

}

fetch(url)
  .then((resp) => resp.json())
  .then((data) => {
    const { products } = data;
    const productsData = products.filter((item) => item.id <= 8);
    productsData.forEach((item) => {
      // const result = addtext(item)
      // container.insertAdjacentHTML("beforeend", result);
      addtext(item,container )
    });
    productsData
      .filter((item) => item.id <= 4)
      .forEach((item) => {
        // const result = addtext(item)
        // newproduct.insertAdjacentHTML("beforeend", result);
        addtext(item, newproduct)
      });
  });
