const changeText = () => {
    setTimeout(() => {
        document.body.style.background = "linear-gradient(rgba(0,0,0,.3), rgba(0,0,0,1)),url('https://images7.alphacoders.com/872/872236.jpg')"
        document.body.style.backgroundSize = "cover"
        document.getElementById("demo").innerHTML = "Bloody..!Sweet..!"
    }, 200)
    setTimeout(() => {
        document.body.style.background = "linear-gradient(rgba(255, 29, 29, 0.3), rgba(231, 80, 236, 0.479)),url('https://images7.alphacoders.com/872/872236.jpg')"
        document.body.style.backgroundSize = "cover"
        document.getElementById("demo").innerHTML = "Leo..!"
    }, 400)
    setTimeout(() => {
        document.body.style.background = "linear-gradient(rgba(2, 255, 213, 0.3), rgba(255, 23, 23)),url('https://images7.alphacoders.com/872/872236.jpg')"
        document.body.style.backgroundSize = "cover"
        document.getElementById("demo").innerHTML = "Leo..!Leo..!"
    }, 600)
    setTimeout(() => {
        document.body.style.background = "linear-gradient(rgba(255, 0, 0, 0.3), rgb(3, 255, 45)),url('https://images7.alphacoders.com/872/872236.jpg')"
        document.body.style.backgroundSize = "cover"
        document.getElementById("demo").innerHTML = "Leo..!Leo..!Leo..!"
    }, 800)
}

setInterval(changeText, 900)