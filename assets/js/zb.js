filterSelection("all")

function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("filterDiv");
  if (c == "all") c = "";
  // Add the "show" class (display:block) to the filtered elements, and remove the "show" class from the elements that are not selected
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
  }
}

// Show filtered elements
function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {
      element.className += " " + arr2[i];
    }
  }
}

// Hide elements that are not selected
function w3RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  element.className = arr1.join(" ");
}

// Add active class to the current control button (highlight it)
// Add active class to the current button (highlight it)
// var btnContainer = document.getElementById("myBtnContainer");
// var btns = btnContainer.getElementsByClassName("btn");
// for (var i = 0; i < btns.length; i++) {
//   btns[i].addEventListener("click", function(){
//     var current = document.getElementsByClassName("active");
//     current[0].className = current[0].className.replace(" active", "");
//     this.className += " active";
//   });
// }

// All btn
const filterId = document.querySelector('#myBtnContainer');

// btn
const btnOne = filterId.querySelector('.btnone');
const btnTwo = filterId.querySelector('.btntwo');
const btnThree = filterId.querySelector('.btnthree');
const btnFour = filterId.querySelector('.btnfour');
const btnFive = filterId.querySelector('.btnfive');
const btnSix = filterId.querySelector('.btnsix');
const btnSeven = filterId.querySelector('.btnseven');
const btnEight = filterId.querySelector('.btneight');
const btnNine = filterId.querySelector('.btnnine');

// Even 1
btnOne.addEventListener('click', () =>{
  btnOne.classList.add('active');
  btnTwo.classList.remove('active');
  btnThree.classList.remove('active');
  btnFour.classList.remove('active');
  btnFive.classList.remove('active');
  btnSix.classList.remove('active');
  btnSeven.classList.remove('active');
  btnEight.classList.remove('active');
  btnNine.classList.remove('active');
})
// Even 2
btnTwo.addEventListener('click', () =>{
  btnOne.classList.remove('active');
  btnTwo.classList.add('active');
  btnThree.classList.remove('active');
  btnFour.classList.remove('active');
  btnFive.classList.remove('active');
  btnSix.classList.remove('active');
  btnSeven.classList.remove('active');
  btnEight.classList.remove('active');
  btnNine.classList.remove('active');
})
// Even 3
btnThree.addEventListener('click', () =>{
  btnOne.classList.remove('active');
  btnTwo.classList.remove('active');
  btnThree.classList.add('active');
  btnFour.classList.remove('active');
  btnFive.classList.remove('active');
  btnSix.classList.remove('active');
  btnSeven.classList.remove('active');
  btnEight.classList.remove('active');
  btnNine.classList.remove('active');
})
// Even 4
btnFour.addEventListener('click', () =>{
  btnOne.classList.remove('active');
  btnTwo.classList.remove('active');
  btnThree.classList.remove('active');
  btnFour.classList.add('active');
  btnFive.classList.remove('active');
  btnSix.classList.remove('active');
  btnSeven.classList.remove('active');
  btnEight.classList.remove('active');
  btnNine.classList.remove('active');
})
// Even 5
btnFive.addEventListener('click', () =>{
  btnOne.classList.remove('active');
  btnTwo.classList.remove('active');
  btnThree.classList.remove('active');
  btnFour.classList.remove('active');
  btnFive.classList.add('active');
  btnSix.classList.remove('active');
  btnSeven.classList.remove('active');
  btnEight.classList.remove('active');
  btnNine.classList.remove('active');
})
// Even 6
btnSix.addEventListener('click', () =>{
  btnOne.classList.remove('active');
  btnTwo.classList.remove('active');
  btnThree.classList.remove('active');
  btnFour.classList.remove('active');
  btnFive.classList.remove('active');
  btnSix.classList.add('active');
  btnSeven.classList.remove('active');
  btnEight.classList.remove('active');
  btnNine.classList.remove('active');
})
// Even 7
btnSeven.addEventListener('click', () =>{
  btnOne.classList.remove('active');
  btnTwo.classList.remove('active');
  btnThree.classList.remove('active');
  btnFour.classList.remove('active');
  btnFive.classList.remove('active');
  btnSix.classList.remove('active');
  btnSeven.classList.add('active');
  btnEight.classList.remove('active');
  btnNine.classList.remove('active');
})
// Even 8
btnEight.addEventListener('click', () =>{
  btnOne.classList.remove('active');
  btnTwo.classList.remove('active');
  btnThree.classList.remove('active');
  btnFour.classList.remove('active');
  btnFive.classList.remove('active');
  btnSix.classList.remove('active');
  btnSeven.classList.remove('active');
  btnEight.classList.add('active');
  btnNine.classList.remove('active');
})
// Even 9
btnNine.addEventListener('click', () =>{
  btnOne.classList.remove('active');
  btnTwo.classList.remove('active');
  btnThree.classList.remove('active');
  btnFour.classList.remove('active');
  btnFive.classList.remove('active');
  btnSix.classList.remove('active');
  btnSeven.classList.remove('active');
  btnEight.classList.remove('active');
  btnNine.classList.add('active');
})





