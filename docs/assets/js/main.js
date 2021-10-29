// const imageSwiper = new Swiper(".slider", {
//     slidesPerView: 1,
//     spaceBetween: 10,
//     navigation: {
//         nextEl: '.swiper__right',
//         prevEl: '.swiper__left',
//         disabledClass: "disabled"
//     },
//     loop: true,
//     autoplay: {
//         delay: 2000
//     },
//     effect: 'cube',
//     cubeEffect: {
//       slideShadows: false,
//     },
// })

const slide_menu = document.querySelector(".slide_menu");
const burger_menu = document.querySelector(".burger_menu a");
const burger_bar = document.querySelector(".burger_bar");
const tablet_burger_menu = document.querySelector(".tablet_burger_menu")
const tablet_burger_bar = document.querySelector(".tablet_burger_bar");
const tablet_slide_menu_container = document.querySelector(".tablet_slide_menu_container");
const search = document.querySelector(".search a svg")
const tablet_search = document.querySelector(".tablet_search a svg")
const search_on_site = document.querySelector(".search_on_site")
const search_input = document.getElementById("search_input")
const lenses_container = document.querySelector(".lenses_container")
const lenses = document.querySelector(".lenses")
const sun_glasses = document.querySelector(".sun_glasses")
const sun_glasses_container = document.querySelector(".sun_glasses_container")
const optic_glasses = document.querySelector(".optic_glasses")
const optic_glasses_container = document.querySelector(".optic_glasses_container")
const body = document.querySelector("body");

const searchOnSite = (e) =>{
    e.preventDefault()
    if (search.contains(e.target)){
        search_on_site.classList.toggle("toggle")
        search_input.focus()
        search_input.value = ""
    }else if(tablet_search.contains(e.target)){
        search_on_site.classList.toggle("toggle")
        search_input.focus()
        search_input.value = ""
    }else if(search_on_site.contains(e.target)){
        search_on_site.classList.add("toggle")
    }else{
        search_on_site.classList.remove("toggle")
    }
}

const slideMenu = (e) => {
    e.preventDefault()
    if (burger_menu.contains(e.target)){
        slide_menu.classList.toggle("toggle")
        burger_bar.classList.toggle("bar_transform")
  
    }else if(slide_menu.contains(e.target)){
        slide_menu.classList.add("toggle")
    }else{
        slide_menu.classList.remove("toggle")
        burger_bar.classList.remove("bar_transform")
    }
}



const tabletSlideMenu = (e) =>{
    e.preventDefault()
    if(tablet_burger_menu.contains(e.target)){
        tablet_slide_menu_container.classList.toggle("toggle")
        tablet_burger_bar.classList.toggle("bar_transform")
        body.classList.toggle("no_scroll")
    }else if(tablet_slide_menu_container.contains(e.target)){
        tablet_slide_menu_container.classList.add("toggle")
    }else{
        tablet_slide_menu_container.classList.remove("toggle")
        tablet_burger_bar.classList.remove("bar_transform")
        body.classList.remove("no_scroll")
    }
}




const lensesMenu = (e) =>{
    e.preventDefault()
    if(lenses.contains(e.target)){
        lenses_container.classList.toggle("toggle")
    }else if(lenses_container.contains(e.target)){
        lenses_container.classList.add("toggle")
    }else{
        lenses_container.classList.remove("toggle")
    }
}


const sunGlassesMenu = (e) =>{
    e.preventDefault()
    if(sun_glasses.contains(e.target)){
        sun_glasses_container.classList.toggle("toggle")
    }else if(sun_glasses_container.contains(e.target)){
        sun_glasses_container.classList.add("toggle")
    }else{
        sun_glasses_container.classList.remove("toggle")
    }
}


const opticGlassesMenu = (e) =>{
    e.preventDefault()
    if(optic_glasses.contains(e.target)){
        optic_glasses_container.classList.toggle("toggle")
    }else if(optic_glasses_container.contains(e.target)){
        optic_glasses_container.classList.add("toggle")
    }else{
        optic_glasses_container.classList.remove("toggle")
    }
}


// Handle outside clicks
window.addEventListener('click', (e) =>{   
    searchOnSite(e)
    slideMenu(e)
    tabletSlideMenu(e)
    lensesMenu(e)
    sunGlassesMenu(e)
    opticGlassesMenu(e)
  });