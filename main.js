let $ = document
let show = $.querySelector(".show-nav")
let open = $.querySelector(".bi-list-nested")
let close = $.querySelector(".bi-x-lg")
let div = $.querySelector(".container")

open.addEventListener("click", () => {
    div.classList.add("show-nav")
})
close.addEventListener("click", () => {
    div.classList.remove("show-nav")
})