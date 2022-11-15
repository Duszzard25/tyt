let scoreHomeEl = document.getElementById("score-home-el")
let scoreGuestEl = document.getElementById("score-guest-el")
let scoreHome = 0
let scoreGuest = 0

function increaseScoreHomeBy1() {
    scoreHome += 1
    scoreHomeEl.textContent = scoreHome
}

function increaseScoreHomeBy2() {
    scoreHome += 2
    scoreHomeEl.textContent = scoreHome
}

function increaseScoreHomeBy3() {
    scoreHome += 3
    scoreHomeEl.textContent = scoreHome
}

function increaseScoreGuestBy1() {
    scoreGuest += 1
    scoreGuestEl.textContent = scoreGuest
}

function increaseScoreGuestBy2() {
    scoreGuest += 2
    scoreGuestEl.textContent = scoreGuest
}

function increaseScoreGuestBy3() {
    scoreGuest += 3
    scoreGuestEl.textContent = scoreGuest
}