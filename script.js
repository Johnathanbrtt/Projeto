function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  //Funcionamento de uma condicional, uma forma de criar o código de forma extensa

  //if(html.classList.contains('light')){
  //html.classList.remove('light')
  //} else {
  //  html.classList.add('light')
  //}

  //pegar a tag img
  const img = document.querySelector("#profile img")
  const alt = document.querySelector("#profile img")
  //substituir a imagem
  if (html.classList.contains("light")) {
    //se tiver light mode, adiconar a imagem light
    img.setAttribute("src", "./assets/avatar-light.png")
    alt.setAttribute("alt" ,"Foto de Mayk Brito sorrindo, usando óculos escuro e camisa preta, sem barba e fundo azul com rosa.")
  } else {
    //se tiver sem light mode, manter a imagem normal
    img.setAttribute("src", "./assets/avatar.png")
    alt.setAttribute("alt" ,"Foto de Mayk Brito sorrindo, usando óculos e camisa preta, barba e fundo amarelo.")
  }
}