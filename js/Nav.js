let navItems = {
  home: "Home",
  products: "Service",
  about: "About Us",
  contact: "Contacts",
  menu: "Menu",
  sign: "Sign In",
  logo: "foodie",
};

let arr = [
  {
    nav: navItems.home,
    src: "#",
  },
  {
    nav: navItems.products,
    src: "#orders",
  },
  {
    nav: navItems.about,
    src: "#",
  },
  {
    nav: navItems.contact,
    src: "#contact",
  },
  navItems.menu,
  navItems.sign,
  navItems.logo,
];

let navbarResult = `
    <section class="nav-section py-1 " style='z-index: 999; '>
        <nav class="d-flex justify-content-between align-items-center  " style='z-index: 999;width: 90%; margin: 0 auto; padding: 1rem 0;'>
            <div>
                <h1 class="nav-logo text-capitalize  ">
                   <a href="#" class="nav-logo text-decoration-none  fw-bold">${arr[6]}.</a>
                </h1>
            </div>
            <div>
                <ul class="d-flex gap-4 m-0 p-0 ">
                    ${arr
                      .slice(0, 4)
                      .map((item) => {
                        return `<li class="nav-item list-unstyled "> <a href=${item.src} class="nav-link  d-none d-sm-block" style='font-weight: bold;font-size:15px'>${item.nav}</a></li>`;
                      })
                      .join("")}

                </ul>
            </div>

            <div class="d-flex  align-items-center ">
              
                <div class='d-flex mx-3 cartt ' style='position: relative;'>
                    <i class="d-none d-sm-block fa-solid fa-bag-shopping " style=' font-size: 1.27rem;' style='cursor: pointer'></i>
                    <span class='badge d-none d-sm-flex '>0</span>
                </div>

                <button class="btn   d-none d-sm-block rounded  " ">${arr[5]} <i class="fa-solid fa-user"></i></button>
            </div>

            <i onclick='check()' class="fa-solid fa-bars d-block d-sm-none " style='font-size: 1.25rem; cursor:pointer' ></i>
        </nav>

        <nav  class=' shadow mobile py-4 d-sm-none d-none' style='width:70%;z-index:200 '>
            
            <div class='text-center'>
                <ul class="  m-0 p-0 ">
                    ${arr
                      .slice(0, 4)
                      .map((item) => {
                        return `<li class="nav-item list-unstyled  "> <a  onclick='remove(this)' href=${item.src} class="nav-link  " style='font-weight: bold;font-size:15px'>${item.nav}</a></li>`;
                      })
                      .join("")}

                </ul>
            </div>
                      
            <div class="d-flex align-items-center flex-column">
              
                <div class='d-flex my-3 bag ' onclick='removee()' style='position: relative;'>
                    <i class="d-sm-none fa-solid fa-bag-shopping " style=' font-size: 1.27rem;' style='cursor: pointer'></i>
                    <span class='badge d-sm-none'>0</span>
                </div>

                <button class="btn  d-flex d-sm-none rounded" onclick='removeee()'>${arr[5]} <i class="fa-solid fa-user"></i></button>
            </div>
        </nav>
        
    </section>


`;

// handel scrolling to fixed navbar
window.addEventListener("scroll", function () {
  let navSection = document.querySelector(".nav-section");
  if (window.scrollY > 0) {
    navSection.classList.add("fixed-top", "shadow");
    navSection.style.transition = ".3s ease-in-out";
  } else {
    navSection.classList.remove("fixed-top", "shadow");
  }
});

function check() {
  let mobileNav = document.querySelector(".mobile");
  mobileNav.classList.toggle("d-block");
}

function remove(e) {
  e.addEventListener("click", function () {
    let mobileNav = document.querySelector(".mobile");
    mobileNav.classList.remove("d-block");
  });
}

//div of bag in mobile behaviour
function removee() {
  let cartTap = document.querySelector(".cart-tap");
  let closeBtn = document.querySelector(".close-btn");
  let mobileNav = document.querySelector(".mobile");

  // close mob-nav
  mobileNav.classList.remove("d-block");

  // open cart page
  mobileNav.addEventListener("click", function () {
    cartTap.classList.toggle("cart-tap-active");
  });

  // close cart page
  closeBtn.onclick = () => {
    cartTap.classList.toggle("cart-tap-active");
  };
}
// btn in mobile
function removeee() {
  let mobileNav = document.querySelector(".mobile");
  mobileNav.classList.remove("d-block");
}

// sign
let sign = () => {
  window.location = "register.html";
};
document.body.innerHTML = navbarResult;
