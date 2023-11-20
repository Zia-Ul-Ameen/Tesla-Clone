// tax details

let restDetail = document.getElementById("restDetail");
let detailClick = document.getElementById("detailClick");
let restDetailX = document.getElementById("restDetailX");

detailClick.addEventListener("click", () => {
  restDetail.style.display = "block";
});
restDetailX.addEventListener("click", () => {
  restDetail.style.display = "none";
});

// sidemenu

let menu = document.getElementById("menu");
let restMenu = document.getElementById("restMenu");
let restMenuX = document.getElementById("restMenuX");

menu.addEventListener("click", () => {
  restMenu.style.display = "block";
});
// restMenuX.addEventListener("click", () => {
//   restMenu.style.backgroundColor = "red";
// });

// navbar rest

const resetDisplayPropertyToNone = () => {
  document.getElementById("textVehicalRest").style.display = "none";
  document.getElementById("textEnergyRest").style.display = "none";
  document.getElementById("textChargingRest").style.display = "none";
  document.getElementById("textDiscoverRest").style.display = "none";
  document.getElementById("textShopRest").style.display = "none";

  document.getElementById("textVehical").style.color = "black";
  document.getElementById("textEnergy").style.color = "black";
  document.getElementById("textCharging").style.color = "black";
  document.getElementById("textDiscover").style.color = "black";
  document.getElementById("textShop").style.color = "black";
};

const navElements = document.querySelectorAll(".ul1 li");
navElements.forEach((element) => {
  element.addEventListener("mouseover", (e) => {
    resetDisplayPropertyToNone();

    document.querySelector(".blurFullPage").style.display = "block";

    document.getElementById(`${e.target.id}Rest`).style.display = "flex";
    document.getElementById(e.target.id).style.color = "red";
  });
});

const onBlurClick = () => {
  document.querySelector(".blurFullPage").style.display = "none";

  resetDisplayPropertyToNone();
};
