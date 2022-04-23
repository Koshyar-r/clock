const Hour = document.querySelector("#hr")
const Minute = document.querySelector("#mn")
const Second = document.querySelector("#sc")

const deg = 6

setInterval(() => {
    let Day = new Date()
    let hh = Day.getHours() * 30
    let mm = Day.getMinutes() * deg
    let ss = Day.getSeconds() * deg

    Hour.style.transform = `rotateZ(${(hh)+(mm/12)}deg)`
    Minute.style.transform = `rotateZ(${mm}deg)`
    Second.style.transform = `rotateZ(${ss}deg)`
})