const imgdiv = document.querySelector(".home-div-img");

var sayac = 2;
setInterval(imganimation, 5000);
imgdiv.children[1].style.opacity = '1'
imgdiv.children[1].firstElementChild.style.width = '600px'
imgdiv.children[1].firstElementChild.style.height = '600px'
imgdiv.children[1].firstElementChild.style.borderLeft = "15px solid transparent";
imgdiv.children[1].firstElementChild.style.borderBottom = "15px solid transparent";
imgdiv.children[1].style.zIndex = "1";
function imganimation() {
    console.log(sayac);
  for (let index = 0; index < 3; index++) {
    if (index != sayac) {
      imgdiv.children[index].style.opacity = "0.7";
      imgdiv.children[index].firstElementChild.style.width = "400px";
      imgdiv.children[index].firstElementChild.style.height = "400px";
      imgdiv.children[index].firstElementChild.style.borderLeft = "0.1px solid transparent";
      imgdiv.children[index].firstElementChild.style.borderBottom = "0.1px solid transparent";
      imgdiv.children[index].style.zIndex = "-1";
      
    }
  }
  imgdiv.children[sayac].style.opacity = "1";
  imgdiv.children[sayac].style.zIndex = "1";
  imgdiv.children[sayac].firstElementChild.style.width = "600px";
  imgdiv.children[sayac].firstElementChild.style.height = "600px";
  if (sayac == 2) {
    imgdiv.children[2].firstElementChild.style.marginRight = "500px";
    imgdiv.children[1].firstElementChild.style.marginRight = "500px";
    imgdiv.children[0].firstElementChild.style.marginLeft = "1000px";
  }
  else if(sayac == 1){
    imgdiv.children[2].firstElementChild.style.margin = "0px";
    imgdiv.children[1].firstElementChild.style.margin = "0px";
    imgdiv.children[0].firstElementChild.style.margin = "0px";
  }
  else if (sayac == 0){
    imgdiv.children[2].firstElementChild.style.margin = "0px";
    imgdiv.children[1].firstElementChild.style.margin = "0px";
    imgdiv.children[0].firstElementChild.style.margin = "0px";

    imgdiv.children[0].firstElementChild.style.marginLeft = "500px";
    imgdiv.children[1].firstElementChild.style.marginLeft = "500px";
    imgdiv.children[2].firstElementChild.style.marginRight = "1000px";
  }

  imgdiv.children[sayac].firstElementChild.style.borderLeft = "15px solid transparent";
  imgdiv.children[sayac].firstElementChild.style.borderBottom = "15px solid transparent";
  sayac++;
  if (sayac == 3) {
    sayac = 0;
  }
}
