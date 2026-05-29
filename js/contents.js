// menu items
let menuObj = [
  {
    img: "imgs/burger.png",
    title: "Double Beef Burger",
    cost: 10.99,
    btnTxt: "Add to cart",
    id: 1,
    init: 1,
  },
  {
    img: "imgs/pizza.png",
    title: "veggie pizza",
    cost: 14.99,
    btnTxt: "Add to cart",
    id: 2,
    init: 1,
  },
  {
    img: "imgs/fried-chicken.png",
    title: "Fried Chicken",
    cost: 10.99,
    btnTxt: "Add to cart",
    id: 3,
    init: 1,
  },
  {
    img: "imgs/chicken-roll.png",
    title: "Chicken Roll",
    cost: 10.99,
    btnTxt: "Add to cart",
    id: 4,
    init: 1,
  },
  {
    img: "imgs/sandwich.png",
    title: "Sub Sandwich",
    cost: 6.25,
    btnTxt: "Add to cart",
    id: 5,
    init: 1,
  },
  {
    img: "imgs/lasagna.png",
    title: "Chicken Lasagna",
    cost: 16.45,
    btnTxt: "Add to cart",
    id: 6,
    init: 1,
  },
  {
    img: "imgs/spaghetti.png",
    title: "Itallian Spaghetti",
    cost: 7.66,
    btnTxt: "Add to cart",
    id: 7,
    init: 1,
  },
  {
    img: "imgs/spring-roll.png",
    title: "Spring Roll",
    cost: 9.31,
    btnTxt: "Add to cart",
    id: 8,
    init: 1,
  },
];
let menuDiv = document.querySelector(".menus");

for (let item of menuObj) {
  menuDiv.innerHTML += `
       
          <div class=" p-5 d-flex flex-column align-items-center justify-content-center my-3  menu-items">
            <img class="w-75" src="${item.img}" alt="" />
            <div>
              <p class="text-center" style="font-weight: 700">${item.title}</p>
              <p class=" text-center" style='font-weight: 700;color: var(--gold-finger)'>$ ${item.cost}</p>
              <button onclick="Cart(${item.id},this)" class="btn order d-block mx-auto rounded" style="background-color: var(--gold-finger); color: var(--white-col); border: none; font-weight: 600;">${item.btnTxt}</button>
            </div>   
          </div>
        
      `;
}

// swiper js code
var swiper = new Swiper(".mySwiper", {
  pagination: {
    el: ".swiper-pagination",
    type: "progressbar",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

let customers = [
  {
    img: "imgs/profile1.jpeg",
    name: "Omar Mohamed",
    rate: 5,
    para: `Foodie is the best. Besides the many delicious meals,
          the service is also very good, espacially very fast
          delivery. I highly recommended Foodie to you. 
        `,
  },
  {
    img: "imgs/profile1.jpeg",
    name: "Noh Khalid",
    rate: 3,
    para: `Foodie is the best. Besides the many delicious meals,
          the service is also very good, espacially very fast
          delivery. I highly recommended Foodie to you. 
        `,
  },
  {
    img: "imgs/profile1.jpeg",
    name: "Kamal Ezz",
    rate: 3,
    para: `Foodie is the best. Besides the many delicious meals,
          the service is also very good, espacially very fast
          delivery. I highly recommended Foodie to you. 
        `,
  },
];

// invok head dev to inject it into swiper wrapper
let swiperSlide = document.querySelector(".swiper-wrapper");

// simle loop to set no.of rates by stars
for (let items of customers) {
  let stars = "";
  for (let i = 0; i < items.rate; i++) {
    stars +=
      '<i class="fa-solid fa-star" style="color: var(--gold-finger)"></i>';
  }

  // inject slides into swiper wrapper
  swiperSlide.innerHTML += `
      <div class="swiper-slide my-5">
        <div class='d-flex align-items-center my-3 ' style="gap: 1.6rem">
          <img src="${items.img}" class="rounded-pill p-1" style='width:100px;height:100px;border: 2px dotted var(--gold-finger); object-fit: cover;'  alt="" />
          <div>
            <p>${items.name}</p>
            <i>${stars}</i>
          </div>
        </div>
        <p class='text-black-50'>${items.para}</p>
      </div>
      `;
}

// handel cart to open

let cart = document.querySelector(".cartt");
let cartTap = document.querySelector(".cart-tap");
let closeBtn = document.querySelector(".close-btn");
console.log(cart);
cart.addEventListener("click", function () {
  cartTap.classList.add("cart-tap-active");
  console.log(cartTap);
  closeBtn.addEventListener("click", function () {
    cartTap.classList.remove("cart-tap-active");
    console.log(cartTap);
  });
});

// fill cart by js to by dyn

// var to check if items already exist
let cartProduct = [];

let cartList = document.querySelector(".cart-list");
//  add to cart behavior

function Cart(item, itemSt) {
  // check if exist
  let existItem = cartProduct.find((itemEx) => itemEx === item);
  if (existItem) {
    // alert('already exist')
    let alrtMsg = document.createElement("div");
    let aler = `
        <div class="alert alert-danger p-5 text-danger rounded" role="alert">
           THIS ITEM ALREADY EXIST IN CART!
        </div>
       `;
    alrtMsg.innerHTML = aler;

    alrtMsg.style.cssText = `
         
          position:fixed
          ;
          top:50%;
          left:50%;
          transform:translate(-50%,-50%);
          height:500px;
          width:500px;
          z-index:222;
          text-align:center
        `;

    // invok menu-item to style
    let currItem = itemSt.closest(".menu-items");

    // show and hide message
    return new Promise((resolve) => {
      setTimeout(() => {
        document.body.append(alrtMsg);
        console.log(itemSt);
        currItem.classList.add("bg-danger");

        resolve(alrtMsg);
      }, 1000);
    }).then((element) => {
      // console.log(element);
      return new Promise((resolve) => {
        setTimeout(() => {
          element.remove();
          document.querySelector(".menu-items").classList.remove("bg-danger");
          currItem.classList.remove("bg-danger");

          resolve();
        }, 2000);
      });
    });
  }

  // if item not exist in cart add it now in tester array
  cartProduct.push(item);
  console.log("items", cartProduct);

  // alert(item)

  for (let items of menuObj) {
    if (items.id === item) {
      let order = document.querySelector(".order");
      let itemDiv = document.createElement("div");
      itemDiv.classList.add("item");
      itemDiv.innerHTML = `
          
            <div class="item-image">
              <img src=${items.img} alt="">
            </div>
            <div>
              <h4 class='text-center'>${items.title}</h4>
              <h4 class="item-total text-center" style='color:orange'>$ ${items.cost}</h4>
            </div>
            <div class="d-flex align-items-center justify-content-center" >
              <a href="#" class="quantity-btn d-flex justify-content-center align-items-center">
                <i class="fa-solid fa-minus" onclick="Dec(this,${items.id})"></i>
              </a>
              <h4 class="quantity-val">${items.init}</h4>
              <a  href="#"  class="quantity-btn d-flex justify-content-center align-items-center">
                <i class="fa-solid fa-plus incr" onclick="Inc(this)"></i>
              </a>
            </div>
              
          
          `;
      // console.log(this);
      updateCartTotal();

      // bag counter
      let counter = document.querySelectorAll(".badge");
      counter.forEach((e) => {
        e.innerHTML = `${cartProduct.length}`;
        console.log(counter);
      });

      // for plus and minus operation
      itemDiv.dataset.price = items.cost; // السعر الأصلي ثابت
      itemDiv.dataset.id = items.id;
      itemDiv.dataset.quantity = 1;
      cartList.appendChild(itemDiv);
    }
  }
}

// total cost
// function updateCartTotal() {
//   let ttlCart = document.querySelector(".cart-total");

//   let allItems = document.querySelectorAll(".item");
//   // console.log(ttlCart);

//   let total = 0;

//   allItems.forEach((item) => {
//     let itemPrice = item.querySelector(".item-total").innerHTML;

//     // إزالة علامة $
//     itemPrice = parseFloat(itemPrice.replace("$", ""));

//     total += itemPrice;
//   });

//   ttlCart.innerHTML = `$ ${total.toFixed(2)}`;
// }

function updateCartTotal() {
  let ttlCart = document.querySelector(".cart-total");

  let allItems = document.querySelectorAll(".item");

  let total = 0;

  allItems.forEach((item) => {
    let basePrice = Number(item.dataset.price);

    let qty = Number(item.dataset.quantity);

    total += basePrice * qty;
  });

  ttlCart.innerHTML = `$ ${total.toFixed(2)}`;
}

// function Inc(btn) {
//   let itemDiv = btn.closest(".item");
//   let quantityVal = itemDiv.querySelector(".quantity-val");
//   let itemTotal = itemDiv.querySelector(".item-total");
//   let ttlCart = document.querySelector(".cart-total");
//   let basePrice = Number(itemDiv.dataset.price);
//   let currentQty = parseInt(quantityVal.innerHTML) + 1;

//   quantityVal.innerHTML = currentQty;

//   // total per item
//   itemTotal.innerHTML = `$ ${(basePrice * currentQty).toFixed(2)}`;

//   // update total cost for cart

//   updateCartTotal();

//   console.log(ttlCart);
// }

function Inc(btn) {
  let itemDiv = btn.closest(".item");

  let quantityVal = itemDiv.querySelector(".quantity-val");
  let itemTotal = itemDiv.querySelector(".item-total");

  let basePrice = Number(itemDiv.dataset.price);

  let qty = Number(itemDiv.dataset.quantity);

  qty++;

  itemDiv.dataset.quantity = qty;

  quantityVal.innerHTML = qty;

  itemTotal.innerHTML = `$ ${(basePrice * qty).toFixed(2)}`;

  updateCartTotal();
}
// function Dec(btn, id) {
//   let itemDiv = btn.closest(".item");
//   let quantityVal = itemDiv.querySelector(".quantity-val");
//   let itemTotal = itemDiv.querySelector(".item-total");

//   let counter = document.querySelectorAll(".badge");

//   let basePrice = Number(itemDiv.dataset.price);

//   let currentQty = Number(quantityVal.innerHTML);

//   // حذف العنصر
//   if (currentQty <= 1) {
//     cartProduct = cartProduct.filter((idd) => idd !== id);

//     itemDiv.classList.add("smootie");

//     setTimeout(() => {
//       itemDiv.remove();

//       updateCartTotal();

//       counter.forEach((e) => {
//         e.innerHTML = cartProduct.length;
//       });
//     }, 400);

//     return;
//   }

//   currentQty--;

//   quantityVal.innerHTML = currentQty;

//   itemTotal.innerHTML = `$ ${(basePrice * currentQty).toFixed(2)}`;

//   // تحديث إجمالي السلة
//   updateCartTotal();
// }

function Dec(btn, id) {
  let itemDiv = btn.closest(".item");

  let quantityVal = itemDiv.querySelector(".quantity-val");

  let itemTotal = itemDiv.querySelector(".item-total");

  let basePrice = Number(itemDiv.dataset.price);

  let qty = Number(itemDiv.dataset.quantity);

  if (qty <= 1) {
    cartProduct = cartProduct.filter((idd) => idd !== id);

    itemDiv.remove();

    updateCartTotal();

    document.querySelectorAll(".badge").forEach((e) => {
      e.innerHTML = cartProduct.length;
    });

    return;
  }

  qty--;

  itemDiv.dataset.quantity = qty;

  quantityVal.innerHTML = qty;

  itemTotal.innerHTML = `$ ${(basePrice * qty).toFixed(2)}`;

  updateCartTotal();
}

function subscribe() {
  let inpt = document.querySelector(".scribe").value;
  try {
    if (inpt == "") {
      alert("set your email to subscribe");
    } else if (inpt.indexOf("@", 3) == -1) {
      alert("@ must be after 3 letters at least");
    } else if (inpt.indexOf(".com") == -1 || inpt.indexOf("gmail") == -1) {
      alert("Enter valid email must contain '.com'");
    } else {
      document.querySelector(".scribe").value = "Enter your email.. ";

      // alert("successful subscribe");
      let alrtMsg = document.createElement("div");

      alrtMsg.innerHTML = `
  <div class="alert alert-success text-capitalize  p-5  rounded" style='font-weight:700' role="alert">
    successful subscribe
  </div>
`;

      alrtMsg.style.cssText = `
    position: fixed;
    top: 30%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 500px;
    z-index: 222;
    text-align: center;
    `;

      // تظهر بعد ثانية
      setTimeout(() => {
        document.body.append(alrtMsg);

        // تختفي بعد 3 ثواني
        setTimeout(() => {
          alrtMsg.remove();
        }, 3000);
      }, 1000);
    }
  } catch (e) {
    console.log(e);
  }
}
