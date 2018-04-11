// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.

let btn = document.getElementById("apply")
let grids = document.getElementById("grids")

btn.addEventListener("click", (e) => {
  e.preventDefault()
  let total = document.getElementById("total").value
  grids.innerHTML = "";
  for (let i = 1; i <= total; i++) {
    grids.innerHTML += "<div class='grid'>" + i + "</div>"
  }
})

grids.addEventListener("click", (e) => {
  e.preventDefault()
  let elm = e.target
  if (elm.classList.contains('grid')) {
    elm.classList.toggle('active')
  }
})
