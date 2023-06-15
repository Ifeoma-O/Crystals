

//Visitor Count

function incrementVisitorCount() {
  if (localStorage.getItem('visitorCount')){
    var count =parseInt(localStorage.getItem('visitorCount')) + 1;
    localStorage.setItem('visitorCount', count);
    document.getElementById('visitor-count').innerHTML = count;
  }else{
    localStorage.setItem('visitorCount', 1);
    document.getElementById('visitor-count').innerHTML = 1
  }
}

incrementVisitorCount();

const button = document.querySelector('.views');

button.addEventListener('.mouseenter', () => {
  button.style.backgroundColor = '#7208d3';
});

button.addEventListener('.mouseleave', () => {
  button.style.backgroundColor = '#7208d3';
});

//dropdown menu


let dropdowns = document.querySelectorAll('.dropdown-toggle')
dropdowns.forEach((dd)=>{
    dd.addEventListener('click', function (e) {
        var el = this.nextElementSibling
        el.style.display = el.style.display==='block'?'none':'block'
    })
})  


//filter

filterSelection("all")
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("filterDiv");
  if (c == "all") c = "";
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
  }
}

function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {element.className += " " + arr2[i];}
  }
}

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

// Add active class to the current button (highlight it)
var btnContainer = document.getElementById("myBtnContainer");
var btns = btnContainer.getElementsByClassName("btn");




for (var i = 0; i < btns.length; i++) {

  btns[i].addEventListener("click", function(){
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });

}

//geolocation
var x= document.getElementById("locations");
    function getlocations() {
    	if(navigator.geolocation){
    		navigator.geolocation.getCurrentPosition(showPosition)
    	  }
    	else
    	{
             alert("Sorry! your browser is not supporting")
         } }
     
     function showPosition(position){
       var x = "Your current location is (" + "Latitude: " + position.coords.latitude + ", " + "Longitude: " +    position.coords.longitude + ")";
                document.getElementById("locations").innerHTML = x;
     }

//date
function date(){
var date = document.getElementById("date")
date = new Date();
document.getElementById("date").innerHTML = date;
}

function dates(){
  var date = document.getElementById("dates")
  date = new Date();
  document.getElementById("dates").innerHTML = date;
  }