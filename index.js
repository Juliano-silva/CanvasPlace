window.addEventListener("mousemove",(event) => {
    let x = event.clientX + 'px'
    let y = event.clientY + 'px'
    event = `Position ${x} and Postion ${y}`
})
var count = 0
document.getElementById("Body").addEventListener("click",(event) => {
    var Color = document.getElementById("Color").value
    var PixelCreate = document.createElement("div")
    PixelCreate.id = `Pixel${count++}`
    PixelCreate.className = `Pixel`
    document.getElementById("Body").append(PixelCreate)
    PixelCreate.style.left = event.clientX + 'px'
    PixelCreate.style.background = Color
    PixelCreate.style.top = event.clientY + 'px'
})

function ColorEscolha(){
    var DivsColor = document.createElement("div")
    var Color = document.getElementById("Color").value
    DivsColor.style.background = Color
    DivsColor.id = "Colors"
    DivsColor.style.width = "2vh"
    DivsColor.style.height = "2vh"
    document.getElementById("CreateDivs").append(DivsColor)
}

function Salvar(){
    var Command = document.getElementById("Body").outerHTML
    localStorage.setItem("Conteudo",Command)
    location.reload()
}
function Apagar(){
    localStorage.removeItem("Conteudo")
    location.reload()
}
var Buscar = localStorage.getItem("Conteudo")
document.getElementById("Body").innerHTML = Buscar 