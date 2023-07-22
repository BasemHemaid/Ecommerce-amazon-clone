var categoryId;
var productId;
var url = location.search.split("&");
categoryId = url[0].split("=")[1];
productId = url[1].split("=")[1];


var ID;
var all_price = document.getElementById("all_price");
var product_price = document.getElementById("product_price");
var counter = document.getElementById("counter");
var product_name = document.getElementById("product_title");


var xhr = new XMLHttpRequest();
xhr.open("GET", "./category.json", true);

xhr.onreadystatechange = function () {
    if (xhr.readyState == 4 && xhr.status == 200) {
        var data = JSON.parse(xhr.response);


        for (var i = 0; i < data[categoryId].length; i++) {
            // console.log(data[categoryId][i].id);

            if (productId == data[categoryId][i].id) {

                document.getElementById("product_img").src = data[categoryId][i].image;
                document.getElementById("product_title").innerHTML = data[categoryId][i].title;
                product_price.innerHTML = data[categoryId][i].price;
                all_price.innerHTML = data[categoryId][i].price;
                ID = data[categoryId][i].id;
                document.querySelector("#ourCart").href = `/cart.html`
                break;
            }
        }
    }
}
xhr.send()

counter.addEventListener("change", function () {
    all_price.innerHTML = product_price.innerHTML * (counter.value);

});

var proNum;
function Add_product() {
    let productArr = [];
    var val = document.getElementById("counter").value;

    if (localStorage.getItem("All_product")) {
        for (let i = 0; i < JSON.parse(localStorage.getItem("All_product")).length; i++) {
            productArr.push(JSON.parse(localStorage.getItem("All_product"))[i])
        }
        productArr.push({ productID: ID, categoryId: categoryId, Quantity: val, title: product_title.innerHTML, product_price: product_price.innerHTML, totalPrice: all_price.innerHTML });
        localStorage.setItem("All_product", JSON.stringify(productArr));
    }
    else {
        productArr.push({ productID: ID, categoryId: categoryId, Quantity: val, title: product_title.innerHTML, product_price: product_price.innerHTML, totalPrice: all_price.innerHTML });
        localStorage.setItem("All_product", JSON.stringify(productArr));
    }

    document.querySelector(".add").innerHTML = "ADDED";
    document.querySelector(".add").style = "pointer-events:none;"
    localStorage.setItem("count",  (JSON.parse(localStorage.getItem("All_product")).length))

    document.getElementById("count").innerHTML = localStorage.getItem("count")

}
localStorage.setItem("count", (JSON.parse(localStorage.getItem("All_product")).length))

document.getElementById("count").innerHTML = localStorage.getItem("count")