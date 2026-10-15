let button = document.querySelector(".menu-btn");
let nav = document.querySelector("nav")
//anonymous or nameless
                        //toggleMenu
button.addEventListener("click", function (e){


    if(nav.style.display === ""){
        nav.style.display = "flex";
        console.log("Im in bro")
    } else {
        nav.style.display = "";
    }
    

    button.classList.toggle("change");
});

//function toggleMenu(e){
    //}
    button.style.display