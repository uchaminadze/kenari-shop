const body = document.body
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
const cart_icon = document.querySelector(".header_basket")
const cart_container = document.querySelector(".pop_up_shopping_cart")
const cart_menu = document.querySelector(".pop_up_shopping_cart_container_wrapper")
const cart_close = document.querySelector(".pop_up_cart_close")
const cart_list = document.querySelector(".pop_up_shopping_cart_container_wrapper_list")
const tablet_cart_icon = document.querySelector(".tablet_header_basket")
const plus_button = document.querySelector(".pop_up_shopping_cart_container_wrapper_list_item_counter_plus svg")
const minus_button = document.querySelector(".pop_up_shopping_cart_container_wrapper_list_item_counter_minus svg")
const counter_input = document.querySelector(".pop_up_shopping_cart_container_wrapper_list_item_counter_input input")
const plus_button_2 = document.querySelector(".plus_2 svg")
const minus_button_2 = document.querySelector(".minus_2 svg")
const counter_input_2 = document.querySelector(".input_2 input")
const slider_category_list = document.querySelector(".second__container__wrapper__category__list")
const slider_category_list_item = slider_category_list.getElementsByTagName("li")
const sale_slider_category_list = document.querySelector(".third__container__wrapper__category__list")
const sale_slider_category_list_item = sale_slider_category_list.getElementsByTagName("li")
const active__line = document.querySelector(".second__container__wrapper__category__list .active__line")
const sale__active__line = document.querySelector(".third__container__wrapper__category__list .sale__active__line")
const background__images = document.querySelector(".fourth__container__wrapper__images")


const searchOnSite = (e) =>{
    e.preventDefault()
    if (search.contains(e.target) || tablet_search.contains(e.target)){
        search_on_site.classList.toggle("toggle")
        search_input.focus()
        search_input.value = ""
    }else if(!search_on_site.contains(e.target)){
        search_on_site.classList.remove("toggle")
    }
}

const slideMenu = (e) => {
    e.preventDefault()
    if (burger_menu.contains(e.target)){
        slide_menu.classList.toggle("toggle")
        burger_bar.classList.toggle("bar_transform")
    }else if(!slide_menu.contains(e.target)){
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
    }else if(!tablet_slide_menu_container.contains(e.target)){
        tablet_slide_menu_container.classList.remove("toggle")
        tablet_burger_bar.classList.remove("bar_transform")
        body.classList.remove("no_scroll")
    }
}





const lensesMenu = (e) =>{
    e.preventDefault()
    if(lenses.contains(e.target)){
        lenses_container.classList.toggle("toggle")
    }else if(!lenses_container.contains(e.target)){
        lenses_container.classList.remove("toggle")
    }
}


const sunGlassesMenu = (e) =>{
    e.preventDefault()
    if(sun_glasses.contains(e.target)){
        sun_glasses_container.classList.toggle("toggle")
    }else if(!sun_glasses_container.contains(e.target)){
        sun_glasses_container.classList.remove("toggle")
    }
}


const opticGlassesMenu = (e) =>{
    e.preventDefault()
    if(optic_glasses.contains(e.target)){
        optic_glasses_container.classList.toggle("toggle")
    }else if(!optic_glasses_container.contains(e.target)){
        optic_glasses_container.classList.remove("toggle")
    }
}


const cartMenu = (e) =>{
    e.preventDefault()
    if(cart_icon.contains(e.target)){
        cart_container.classList.toggle("toggle")
    }else if(tablet_cart_icon.contains(e.target)){
        cart_container.classList.toggle("toggle")
    }else if(!cart_menu.contains(e.target) || cart_close.contains(e.target)){
        cart_container.classList.remove("toggle")
    }
}


const qtyCounter = (e) =>{
    let tmp;
    for(let i = 0; i < cart_list.children.length; i++){
        tmp = cart_list.children[i].children[0].children[2].children
        const minus_item = tmp[0]
        const item_qty = tmp[1].children[0]
        const plus_item = tmp[2]

    if(plus_item.contains(e.target)){
        item_qty.value++
    }else if(minus_item.contains(e.target)){
        item_qty.value--
    }
    
    if(item_qty.value == 1){
        minus_item.classList.add("disabled")
    }else if(item_qty.value > 1){
        minus_item.classList.remove("disabled")
    }

    }
}



// Handling active item in slider category list //

function redLine(e) {
    active__line.style.left = e.offsetLeft + "px"
    active__line.style.width = e.offsetWidth + "px"
}
window.addEventListener("load", () => {
    slider_category_list_item[0].children[0].classList.add("active")
    redLine(slider_category_list_item[0].children[0])
});
for (let i = 0; i < slider_category_list_item.length; i++) {
    for (let j = 0; j < slider_category_list_item.length; j++) {
        slider_category_list_item[j].children[0].addEventListener("click", (e) => {
            redLine(e.target)
            if (e.target && e.target.nodeName === "A") {
                for (let k = 0; k < slider_category_list_item.length; k++) {
                    slider_category_list_item[k].children[0].classList.remove("active")
                }
                e.target.classList.add("active")
            }
        })
    }
}



// Handling active item in sale slider category list //

function saleCategoryRedLine(e) {
    sale__active__line.style.left = e.offsetLeft + "px"
    sale__active__line.style.width = e.offsetWidth + "px"
}
window.addEventListener("load", () => {
    sale_slider_category_list_item[0].children[0].classList.add("active")
    saleCategoryRedLine(sale_slider_category_list_item[0].children[0])
});
for (let i = 0; i < sale_slider_category_list_item.length; i++) {
    for (let j = 0; j < sale_slider_category_list_item.length; j++) {
        sale_slider_category_list_item[j].children[0].addEventListener("click", (e) => {
            saleCategoryRedLine(e.target)
            if (e.target && e.target.nodeName === "A") {
                for (let k = 0; k < sale_slider_category_list_item.length; k++) {
                    sale_slider_category_list_item[k].children[0].classList.remove("active")
                }
                e.target.classList.add("active")
            }
        })
    }
}



for(let i = 0; i < background__images.children.length; i++){
    background__images.children[i].addEventListener("mouseover", () =>{
        background__images.children[i].classList.add("toggle")
        background__images.children[i].children[0].classList.add("toggle")
    })
    background__images.children[i].addEventListener("mouseout", () =>{
        background__images.children[i].classList.remove("toggle")
        background__images.children[i].children[0].classList.remove("toggle")
    })
}






// Handling outside clicks
window.addEventListener('click', (e) =>{   
    searchOnSite(e)
    slideMenu(e)
    tabletSlideMenu(e)
    lensesMenu(e)
    sunGlassesMenu(e)
    opticGlassesMenu(e)
    cartMenu(e)
    qtyCounter(e)
  });
