let btnMove = document.getElementsByClassName("btn-move");
console.log(btnMove);
let product = document.getElementsByClassName("profile-card");
let product_page = Math.ceil(product.length / 4);
let l = 0;
let movePer = 35.34;
let maxMove = 160;
// mobile_view
let mob_view = window.matchMedia("(max-width: 768px)");
if (mob_view.matches) {
  movePer = 50.36;
  maxMove = 754;
}
let right_mover = () => {
  l = l + movePer;
  console.log(l);
  if (product == 1) {
    l = 0;
    console.log(l);
  }
  for (const i of product) {
    if (l > maxMove) {
      l = l - movePer;
    }
    i.style.left = "-" + l + "%";
  }
};

let left_mover = () => {
  l = l - movePer;
  if (l < 0) {
    l = 0;
  }
  for (const i of product) {
    if (product_page > 0) {
      i.style.left = "-" + l + "%";
    }
  }
};
btnMove[1].onclick = () => {
  right_mover();
};
btnMove[0].onclick = () => {
  console.log("click");
  left_mover();
};
