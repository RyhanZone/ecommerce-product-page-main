/* = = = = dom element start = = = =  */
let mainimg = document.getElementById("main-img");
let img2 = document.getElementById("img-1");
let img3 = document.getElementById("img-2");
let img4 = document.getElementById("img-3");
let img5 = document.getElementById("img-4");
// slideshow img
let main_img = document.getElementsByClassName("main-img")[0];
let img_one = document.getElementsByClassName("img-1")[0];
let img_two = document.getElementsByClassName("img-2")[0];
let img_three = document.getElementsByClassName("img-3")[0];
let img_four = document.getElementsByClassName("img-4")[0];
// responsive menu
const menuBtn = document.getElementById("menu-btn");
const closeMenu = document.getElementById("close-menu");
const mobileNav = document.getElementById("mobile-nav");
const mobileNavOverlay = document.getElementById("mobile-nav-overlay");

let how_many_product_icon = document.getElementById("how-many-product");
let empty_text = document.getElementsByClassName("empty-cart")[0];
let cart_details_parent = document.getElementsByClassName(
  "cart-details-parent",
)[0];
let cart_parent = document.getElementsByClassName("cart-parent")[0];
let cart_icon = document.getElementById("cart-icon");
let add_to_cart_btn = document.getElementsByClassName("cart-section")[0];
let product_price = document.getElementById("price");
let total_price = document.getElementById("total-price");
let into_the_main_price = document.getElementById("into-the-total-price");
let checkoutbtn = document.getElementById("checkoutbtn");
let slideshow_closer = document.getElementById("slideshow-closer");
let body = document.getElementsByTagName("body")[0];
let header = document.getElementsByTagName("header")[0];
let main_left = document.getElementsByClassName("main-left")[0];
let main_right = document.getElementsByClassName("main-right")[0];
let slidshow_parent = document.getElementsByClassName("img-slider")[0];
let productprice = document.getElementById("product-pice");
let productpiceincress = document.getElementById("productincrementbtn");
let productpicedicreess = document.getElementById("productdicrementbtn");
let addtocartbtncounter = 0;
let count = 1;
/* = = = = dom element end = = = =  */


/* = = = = mobile menu section = = = =  */
menuBtn.addEventListener("click", openMobileMenu);
closeMenu.addEventListener("click", closeMobileMenu);
mobileNavOverlay.addEventListener("click", closeMobileMenu);
/* = = = = how many pice product section start = = = =  */
productpiceincress.addEventListener("click", function () {
  if (productprice.innerText <= 29) {
    productprice.innerText++;
  }
});
productpicedicreess.addEventListener("click", function () {
  if (productprice.innerText > 1) {
    productprice.innerText--;
  }
});
/* = = = = how many pice product section end = = = =  */

/* = = = = img addeventlistenter satrt = = = =  */
img2.addEventListener("click", img1function);
img3.addEventListener("click", img2function);
img4.addEventListener("click", img3function);
img5.addEventListener("click", img4function);
// slideshow img
img_one.addEventListener("click", img_one_function);
img_two.addEventListener("click", img_two_function);
img_three.addEventListener("click", img_three_function);
img_four.addEventListener("click", img_four_function);
mainimg.addEventListener("click", slidshowopen);
slideshow_closer.addEventListener("click", slideshowCloserFunction);
add_to_cart_btn.addEventListener("click", addtocartfunction);
cart_icon.addEventListener("click", showingcartparentfunction);
/* = = = = img addeventlistenter end = = = =  */
/* = = = = mobile menu section = = = =  */
function openMobileMenu() {
  mobileNav.classList.add("active");
  mobileNavOverlay.classList.add("active");
}
function closeMobileMenu() {
  mobileNav.classList.remove("active");
  mobileNavOverlay.classList.remove("active");
}
/* = = = = img click function start = = = =  */
function img1function() {
  img3.style.border = "none";
  img4.style.border = "none";
  img5.style.border = "none";
  // opacity
  img3.style.opacity = "1";
  img4.style.opacity = "1";
  img5.style.opacity = "1";
  // opacity
  img2.style.border = "4px solid hsl(26, 100%, 55%)";
  img2.style.opacity = "0.8";
  mainimg.src = img2.src;
}
function img2function() {
  img2.style.border = "none";
  img4.style.border = "none";
  img5.style.border = "none";
  // opacity
  img2.style.opacity = "1";
  img4.style.opacity = "1";
  img5.style.opacity = "1";
  // opacity
  img3.style.border = "4px solid hsl(26, 100%, 55%)";
  img3.style.opacity = "0.8";
  mainimg.src = img3.src;
}
function img3function() {
  img2.style.border = "none";
  img3.style.border = "none";
  img5.style.border = "none";
  // opacity
  img2.style.opacity = "1";
  img3.style.opacity = "1";
  img5.style.opacity = "1";
  // opacity
  img4.style.border = "4px solid hsl(26, 100%, 55%)";
  img4.style.opacity = "0.8";
  mainimg.src = img4.src;
}
function img4function() {
  img2.style.border = "none";
  img3.style.border = "none";
  img4.style.border = "none";
  // opacity
  img2.style.opacity = "1";
  img3.style.opacity = "1";
  img4.style.opacity = "1";
  // opacity
  img5.style.border = "4px solid hsl(26, 100%, 55%)";
  img5.style.opacity = "0.8";
  mainimg.src = img5.src;
}
function updateCartUI() {
  if (addtocartbtncounter > 0) {
    empty_text.style.display = "none";
    cart_details_parent.style.display = "flex";
  } else {
    empty_text.style.display = "flex";
    cart_details_parent.style.display = "none";
  }
}
function showingcartparentfunction() {
  if (count == 1) {
    cart_parent.style.display = "inline-block";
    updateCartUI();
    count = 2;
  } else if (count == 2) {
    cart_parent.style.display = "none";
    updateCartUI();
    count = 1;
  }
}
function addtocartfunction() {
  into_the_main_price.innerText = productprice.innerText;
  total_price.innerText =
    "$" + product_price.innerText * productprice.innerText;
  how_many_product_icon.style.display = "flex";
  how_many_product_icon.innerText = productprice.innerText;
  addtocartbtncounter = 5;
  updateCartUI();
}
function slidshowopen() {
  slidshow_parent.style.display = "flex";
  header.style.opacity = "0.7";
  main_left.style.opacity = "0.7";
  main_right.style.opacity = "0.7";
  body.style.backgroundColor = "rgba(2, 1, 1, 0.554)";
}
function slideshowCloserFunction() {
  slidshow_parent.style.display = "none";
  header.style.opacity = "1";
  main_left.style.opacity = "1";
  main_right.style.opacity = "1";
  body.style.backgroundColor = "white";
}
// slideshow img function
function img_one_function() {
  img_two.style.border = "none";
  img_three.style.border = "none";
  img_four.style.border = "none";
  // opacity reset
  img_two.style.opacity = "1";
  img_three.style.opacity = "1";
  img_four.style.opacity = "1";
  // active
  img_one.style.border = "4px solid hsl(26, 100%, 55%)";
  img_one.style.opacity = "0.8";
  main_img.src = img_one.src;
}
function img_two_function() {
  img_one.style.border = "none";
  img_three.style.border = "none";
  img_four.style.border = "none";
  // opacity
  img_one.style.opacity = "1";
  img_three.style.opacity = "1";
  img_four.style.opacity = "1";
  // opacity
  img_two.style.border = "4px solid hsl(26, 100%, 55%)";
  img_two.style.opacity = "0.8";
  main_img.src = img_two.src;
}
function img_three_function() {
  img_one.style.border = "none";
  img_two.style.border = "none";
  img_four.style.border = "none";
  // opacity
  img_one.style.opacity = "1";
  img_two.style.opacity = "1";
  img_four.style.opacity = "1";
  // opacity
  img_three.style.border = "4px solid hsl(26, 100%, 55%)";
  img_three.style.opacity = "0.8";
  main_img.src = img_three.src;
}
function img_four_function() {
  img_one.style.border = "none";
  img_two.style.border = "none";
  img_three.style.border = "none";
  // opacity
  img_one.style.opacity = "1";
  img_two.style.opacity = "1";
  img_three.style.opacity = "1";
  // opacity
  img_four.style.border = "4px solid hsl(26, 100%, 55%)";
  img_four.style.opacity = "0.8";
  main_img.src = img_four.src;
}
