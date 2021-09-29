
var body = document.querySelector('body');
var menuButton = document.getElementById('hamburger');
var menu = document.querySelector("#menu");

menuButton.addEventListener("click", function () {
     menu.classList.toggle('visible');
})

menuButton.addEventListener("mouseover", function () {
    menu.classList.toggle('visible');
})
   
var changeColor = event => {
    var color = event.target.innerHTML.split(' ')[0];
    document.getElementById("color").innerHTML = color;
    body.style.background = color;
    menu.classList.toggle('visible');
    document.querySelector(".text").style.color= "white";
}

var pressColor = () => {
    document.getElementById("color").innerHTML = color;
    body.style.background = color;
    menu.classList.toggle('visible');
    document.querySelector(".text").style.color= "white";
}
   
var grey = document.querySelector(".grey").
addEventListener("click", changeColor)

var red = document.querySelector(".red").
addEventListener("click", changeColor)

var orange = document.querySelector(".orange").
addEventListener("click", changeColor)

var purple = document.querySelector(".purple").
addEventListener("click", changeColor)

var green = document.querySelector(".green").
addEventListener("click", changeColor)


document.addEventListener("keydown", function(event) {
      if (event.key1121Code === 49 || event.keyCode === 97) {
      color="Grey";
    }

    else if (event.keyCode === 50 || event.keyCode === 98) {
        color="Red";
    }

    else if (event.keyCode === 51 || event.keyCode === 99) {
        color="Orange";
    }

    else if (event.keyCode === 52 || event.keyCode === 100) {
        color="Purple";
    }

    else if (event.keyCode === 53 || event.keyCode === 101) {
        color="Green";
    }

    pressColor()

})

