// Menu bar
document.querySelector(".bars").onclick = () => {
    document.querySelector("ul").classList.toggle("show")
}

document.querySelector("ul i").onclick = () => {
    document.querySelector("ul").classList.toggle("show")
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

let showAll = document.querySelector(".all")
let frontEnd = document.querySelector(".frontend")
let freeCss = document.querySelector(".free-css")
let elzero = document.querySelector(".elzero")

let allFrontend = document.querySelectorAll(".frontend-challenge")
let allFreeCss = document.querySelectorAll(".free-css-challenge")
let elzeroChallenges = document.querySelectorAll(".elzero-challenge")

showAll.onclick = () => {
    allFrontend.forEach((e) => {
        e.style.display = "block"
    })
    allFreeCss.forEach((e) => {
        e.style.display = "block"
    })
    elzeroChallenges.forEach((e) => {
        e.style.display = "block"
    })
    showAll.classList.add("active")
    freeCss.classList.remove("active")
    frontEnd.classList.remove("active")
    elzero.classList.remove("active")
    showMore.style.display = "none"
    showMoreOnDesktop.style.display = "none"
    showLessOnDekstop.style.display = "none"
}

frontEnd.onclick = () => {
    allFrontend.forEach((e) => {
        e.style.display = "block"
    })
    allFreeCss.forEach((e) => {
        e.style.display = "none"
    })
        elzeroChallenges.forEach((e) => {
        e.style.display = "none"
    })
    frontEnd.classList.add("active")
    showAll.classList.remove("active")
    freeCss.classList.remove("active")
    elzero.classList.remove("active")
    showMore.style.display = "none"
    showMoreOnDesktop.style.display = "none"
    showLessOnDekstop.style.display = "none"
}

freeCss.onclick = () => {
    allFrontend.forEach((e) => {
        e.style.display = "none"
    })
    allFreeCss.forEach((e) => {
        e.style.display = "block"
    })
    elzeroChallenges.forEach((e) => {
        e.style.display = "none"
    })
    freeCss.classList.add("active")
    frontEnd.classList.remove("active")
    showAll.classList.remove("active")
    elzero.classList.remove("active")
    showMore.style.display = "none"
    showMoreOnDesktop.style.display = "none"
    showLessOnDekstop.style.display = "none"
}

elzero.onclick = () => {
    allFrontend.forEach((e) => {
        e.style.display = "none"
    })
    allFreeCss.forEach((e) => {
        e.style.display = "none"
    })
    elzeroChallenges.forEach((e) => {
        e.style.display = "block"
    })
    showAll.classList.remove("active")
    freeCss.classList.remove("active")
    frontEnd.classList.remove("active")
    elzero.classList.add("active")
    showMore.style.display = "none"
    showMoreOnDesktop.style.display = "none"
    showLessOnDekstop.style.display = "none"
}

// End Filter

// Go up button
window.onload = () => {
    document.querySelector(".picture").style.opacity = "1"
}

window.onscroll = () => {
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
}