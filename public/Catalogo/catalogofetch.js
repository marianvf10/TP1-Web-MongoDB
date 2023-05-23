const grid = document.querySelector(".grid");

const unaFuncion = async () => {
  let res = await fetch("http://localhost:4500/api/games", { method: 'GET' });
  res = await res.json();

  res.forEach(game => {
    console.log(game);
    let card = `<ul class="fondoVideojuego">
      <li class="videojuego"><img src="../img/${game.imagen}" class="imagenVideojuego">
      <h3>${game.nombre}</h3><div style="display: flex; justify-content: space-between;">
      <p>${game.consola}</p>
      <p>${game.precio}$</p>
      </div></li></ul>`
    grid.innerHTML += card;
  });
}

window.onload = unaFuncion();
