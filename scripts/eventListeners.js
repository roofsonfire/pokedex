//////////////////////////////////////////////// SEARCH
searchButton.onclick = async () => {
  data = await searchByName(input.value.toLowerCase());
  let src = getImgSrc(data.id);
  id = data.id;
  name = data.name;
  changeImgSrc(src);
  changeName(data.name);
};
searchInput.onkeydown = (e) => {
  if (e.keyCode === 13) {
    searchButton.onclick();
  }
};
//////////////////////////////////////////////// FORWARD
forwardButton.onclick = async () => {
  id += 1;
  imgUrlPosition = 0;
  if (id > 898) {
    id = 1;
  }
  await changePokemon();
  searchButton.onclick();
};
//////////////////////////////////////////////// BACKWARD
backwardButton.onclick = async () => {
  id -= 1;
  imgUrlPosition = 0;
  if (id < 1) {
    id = 898;
  }
  await changePokemon();
  searchButton.onclick();
};

//////////////////////////////////////////////// UP
upButton.onclick = () => {
  imgUrlPosition += 1;
  if (imgUrlPosition > 3) {
    imgUrlPosition = 0;
  }
  changePokemonPicture();
};

//////////////////////////////////////////////// DOWN
downButton.onclick = () => {
  imgUrlPosition -= 1;
  if (imgUrlPosition < 0) {
    imgUrlPosition = 3;
  }
  changePokemonPicture();
};

//////////////////////////////////////////////// CRY
cryButton.onclick = () => {
  playPokemonCry();
  speaker.classList.add("shake");
};

//////////////////////////////////////////////// SPEAKER ANIMATION
speaker.addEventListener("animationend", function () {
  speaker.classList.remove("shake");
});

//////////////////////////////////////////////// RANDOM POKEMON
mainBigLed.onclick = async () => {
  randomPokemon = randomIntFromInterval();
  data = await searchByName(randomPokemon.toString());
  let src = getImgSrc(data.id);
  id = data.id;
  name = data.name;
  searchInput.value = name;
  changeImgSrc(src);
  changeName(data.name);
};

window.onkeydown = (e) => {
  if (e.keyCode === 37) {
    backwardButton.onclick();
  } else if (e.keyCode === 39) {
    forwardButton.onclick();
  } else if (e.keyCode === 38) {
    upButton.onclick();
  } else if (e.keyCode === 40) {
    downButton.onclick();
  }
};
window.onmousewheel = (e) => {
  if (e.wheelDelta > 0) {
    backwardButton.onclick();
  } else {
    forwardButton.onclick();
  }
};
