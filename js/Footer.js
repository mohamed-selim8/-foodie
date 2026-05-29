let fot = document.createElement("footer");
fot.classList.add("footer");
fot.innerHTML = `
    <section 
        class='d-flex align-items-center justify-content-between'
        style="width: 90%; margin: 0 auto; padding: 1rem 0"
    >
        <div class='row w-100 m-auto'>
            <div class='col-md-3 py-3'>
                <div class='d-flex flex-column align-items-center align-items-md-star text-center'>
                    <h3 style='color:var(--gold-finger)'>Foodie</h3>
                    <p class='text-black-50'>
                        We will fill your tummy <br>
                        with delicious food with fast delivery
                    </p>
                </div>
                 <div class="d-flex align-items-center justify-content-center justify-content-md-start " style='gap:25px'>
                    <a
                    class=" social"
                    href="https://www.facebook.com/Mohamed Selim"
                    target="_blank"
                    ><i
                        class="fa-brands fa-facebook-f"
                        style="font-size: 1.25rem"
                    ></i
                    ></a>

                    <a
                    class=" social"
                    href="https://www.instagram.com"
                    target="_blank"
                    ><i
                        class="fa-brands fa-instagram"
                        style="font-size: 1.25rem"
                    ></i
                    ></a>
                    <a
                    class=" social"
                    href="https://wa.me/01140321164"
                    target="_blank"
                    ><i
                        class="fa-brands fa-whatsapp"
                        style="font-size: 1.25rem"
                    ></i
                    ></a>
              </div>
                
            </div>
            <div class='col-md-3 text-center py-2'>
                <h3 class='text-capitalize'>our menu</h3>
                 <p class='text-black-50'>Special</p>
                <p class='text-black-50'>Popular</p>
                <p class='text-black-50'>Categories</p>
                
            </div>
            <div class='col-md-3 text-center py-2'>
                <h3 class='text-capitalize'>company</h3>
                 <p class='text-black-50'>Why Foodie ?</p>
                <p class='text-black-50'>Partner with us</p>
                <p class='text-black-50'>About us</p>
                <p class='text-black-50'>FAQ's</p>
                
            </div>
            <div class='col-md-3 text-center py-2'>
                <h3 class='text-capitalize'>support</h3>
                 <p class='text-black-50'>Account</p>
                <p class='text-black-50'>Support center</p>
                <p class='text-black-50'>Feedback</p>
                <p class='text-black-50'>Contacts</p>
                
            </div>
 
        </div>
    </section>
`;

document.body.appendChild(fot);
