// overlay function
window.addEventListener("load" , () => {
    setTimeout(function () {
        window.scrollTo(0, 0);
        document.querySelector("body").classList.add("overflow")
        document.querySelector(".overlay").classList.add("show-flex")
    }, 200)
    setTimeout(() => {
        document.querySelector(".overlay").classList.add("opacity")
        document.querySelector("body").classList.remove("overflow")
    }, 3200);
})

// Menu bar
document.querySelector(".bars").onclick = () => {
    document.querySelector("ul").classList.toggle("show")
}

document.querySelector("ul i").onclick = () => {
    document.querySelector("ul").classList.toggle("show")
}

// Night mode

let moonIcon = document.querySelector("nav .moon")
let sunIcon = document.querySelector("nav .sun")

let aboutSection = document.querySelector(".about-section")

let templetes = document.querySelectorAll(".templete")

// Check if there is mode in localStorage and set it to the website
if (window.localStorage.getItem("mode") === "light") {
    document.querySelector("body").classList.remove("dark-mode")
    showMoonIcon()
    aboutSection.classList.remove("night-mode")
    removeNightModeBackground()
} else {
    document.querySelector("body").classList.add("dark-mode")
    showSunIcon()
    aboutSection.classList.add("night-mode")
    showNightModeBackground()
}

// Showing night mode
moonIcon.addEventListener("click" , () => {
    document.querySelector("body").classList.add("dark-mode")
    showSunIcon()
    showNightModeBackground()
    aboutSection.classList.add("night-mode")
    window.localStorage.setItem("mode" , "dark")
})

// Showing light mode
sunIcon.addEventListener("click" , () => {
    document.querySelector("body").classList.remove("dark-mode")
    showMoonIcon()
    removeNightModeBackground()
    aboutSection.classList.remove("night-mode")
    window.localStorage.setItem("mode" , "light")
})

function showMoonIcon() {
    sunIcon.classList.add("hide")
    moonIcon.classList.remove("hide")
}

function showSunIcon() {
    sunIcon.classList.remove("hide")
    moonIcon.classList.add("hide")
}

function removeNightModeBackground() {
    templetes.forEach(e => {
        e.classList.remove("night-mode")
    })
}

function showNightModeBackground() {
    templetes.forEach(e => {
        e.classList.add("night-mode")
    })
}

// End
// Portfolio

// Show more option for mobile
let showMore = document.querySelector(".templetes .show-more")
let showMoreOnDesktop = document.querySelector(".show-more-desktop")
let hiddenProjectsOnDekstop = document.querySelectorAll(".hidden-desktop")
let hiddenProjects = document.querySelectorAll(".templetes .hidden")

let showLess = document.createElement("p")
showLess.classList.add("show-less")
showLess.textContent = "Show less"
document.querySelector(".templetes").appendChild(showLess)
showLess.style.display = "none"

showMore.onclick = () => {
    showMore.style.display = "none"
    showLess.style.display = "block"
    hiddenProjects.forEach((e) => {
        e.classList.add("show")
    })
}

showLess.onclick = () => {
    hiddenProjects.forEach((e) => {
        e.classList.remove("show")
    })
    showLess.style.display = "none"
    showMore.style.display = "block"
}

let showLessOnDekstop = document.createElement("p")
showLessOnDekstop.classList.add("show-less-on-dekstop")
showLessOnDekstop.textContent = "Show less"
showLessOnDekstop.style.height = "fit-content"
document.querySelector(".templetes").appendChild(showLessOnDekstop)
showLessOnDekstop.style.display = "none"

showMoreOnDesktop.onclick = () => {
    showMoreOnDesktop.style.display = "none"
    showLessOnDekstop.style.display = "block"
    hiddenProjectsOnDekstop.forEach((e) => {
        e.classList.add("show")
    })
}

showLessOnDekstop.onclick = () => {
    showMoreOnDesktop.style.display = "block"
    showLessOnDekstop.style.display = "none"
    hiddenProjectsOnDekstop.forEach((e) => {
        e.classList.remove("show")
    })
}

// filter functions

let allFilters = document.querySelectorAll(".filter p")

let showAll = document.querySelector(".all")
let frontEnd = document.querySelector(".frontend")
let freeCss = document.querySelector(".free-css")
let elzero = document.querySelector(".elzero")

allFilters.forEach(e => {
    e.onclick = () => {
        allFilters.forEach(e => {
            e.classList.remove("active")
        })
        e.classList.add("active")
    }
})

showAll.addEventListener("click" , () => {
    templetes.forEach(e => {
        e.classList.remove("hide")
        e.classList.add("show")
    })
    showMore.style.display = "none"
    showMoreOnDesktop.style.display = "none"
    showLessOnDekstop.style.display = "none"
})

frontEnd.addEventListener("click" , () => {
    templetes.forEach(e => {
        if (e.classList.contains("frontend-challenge")) {
            e.classList.remove("hide")
            e.classList.add("show")
        } else {
            e.classList.add("hide")
            e.classList.remove("show")
        }
    })
    showMore.style.display = "none"
    showMoreOnDesktop.style.display = "none"
    showLessOnDekstop.style.display = "none"
})

freeCss.addEventListener("click" , () =>{
    templetes.forEach(e => {
        if (e.classList.contains("free-css-challenge")) {
            e.classList.remove("hide")
            e.classList.add("show")
        } else {
            e.classList.add("hide")
            e.classList.remove("show")
        }
    })
    showMore.style.display = "none"
    showMoreOnDesktop.style.display = "none"
    showLessOnDekstop.style.display = "none"
})

elzero.addEventListener("click" , () =>{
    templetes.forEach(e => {
        if (e.classList.contains("elzero-challenge")) {
            e.classList.remove("hide")
            e.classList.add("show")
        } else {
            e.classList.add("hide")
            e.classList.remove("show")
        }
    })
    showMore.style.display = "none"
    showMoreOnDesktop.style.display = "none"
    showLessOnDekstop.style.display = "none"
})

// End Filter

// Go up button
// Showing up button when scrolling
window.addEventListener("scroll" , () => {
    if (scrollY >= 500) {
        document.querySelector(".up").classList.add("show")
    } else {
        document.querySelector(".up").classList.remove("show")
    }

    if (scrollY >= 250) {
        document.querySelector(".about-h1").style.opacity = "1"
        document.querySelector(".about-section").style.opacity = "1"
    } else {
        document.querySelector(".about-h1").style.opacity = "0"
        document.querySelector(".about-section").style.opacity = "0"
    }
})