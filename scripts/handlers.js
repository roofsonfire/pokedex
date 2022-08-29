async function handleSearchButton() {
  hidePokemonImageForLoadingAnimation();
  showGifLoadingAnimation();
  spritePosition = 0;
  pokeTypes.classList.remove(poketypeOne);
  pokeTypes.classList.remove(poketypeTwo);
  data = await getPokemon(input.value.toLowerCase());
  setTimeout(() => displayPokemon(), 2110);
  setTimeout(() => hideGifLoadingAnimation(), 2110);
  setTimeout(() => showPokemonImageForLoadingAnimation(), 2110);
}

async function handleRandom() {
  hidePokemonImageForLoadingAnimation();
  showGifLoadingAnimation();
  spritePosition = 0;
  data = await getPokemon(randomIntFromInterval());
  setTimeout(() => displayPokemon(), 2110);
  setTimeout(() => hideGifLoadingAnimation(), 2110);
  setTimeout(() => showPokemonImageForLoadingAnimation(), 2110);
}

async function handleForwardButton() {
  if (!pokeId) {
    pokeId = 0;
  }
  pokeId += 1;
  spritePosition = 0;
  if (pokeId > 898) {
    pokeId = 1;
  }
  input.value = pokeId;

  handleSearchButton();
}

async function handleBackwardButton() {
  if (!pokeId) {
    pokeId = 898;
  }
  pokeId -= 1;
  spritePosition = 0;
  if (pokeId < 1) {
    pokeId = 898;
  }
  input.value = pokeId;
  handleSearchButton();
}

function handleUpButton() {
  spritePosition -= 1;
  if (spritePosition < 0) {
    spritePosition = spriteAmount - 1;
  }
  displayPokemon();
}

function handleDownButton() {
  spritePosition += 1;
  if (spritePosition > spriteAmount - 1) {
    spritePosition = 0;
  }
  displayPokemon();
}

function handleCryButton() {
  playPokemonCry();
  speaker.classList.add("shake");
}

function handleSecondaryLeftArrow() {
  statsPosition -= 1;
  if (statsPosition < 0) {
    statsPosition = pokemonStats.length - 1;
  }
  if (statsPosition === 0) {
    changeName(pokeName);
  } else if (statsPosition <= statsTitles.length - 1) {
    nameTitle.innerHTML = `<h3>${statsTitles[statsPosition]}</h3><br><p>${pokemonStats[statsPosition]}</p>`;
  } else {
    nameTitle.innerHTML = `<h3>Abilities</h3><br><p>${pokemonStats[statsPosition]}</p>`;
  }
}

function handleSecondaryRightArrow() {
  statsPosition += 1;
  if (statsPosition > pokemonStats.length - 1) {
    statsPosition = 0;
    changeName(pokeName);
  } else if (statsPosition <= statsTitles.length - 1) {
    nameTitle.innerHTML = `<h3>${statsTitles[statsPosition]}</h3><br><p>${pokemonStats[statsPosition]}</p>`;
  } else {
    nameTitle.innerHTML = `<h3>Abilities</h3><br><p>${pokemonStats[statsPosition]}</p>`;
  }
}

async function handleMuteButton() {
  if (!volume.mute) {
    soundIcon.classList.remove("hidden");
    muteIcon.classList.add("hidden");
    volume.mute = true;
  } else {
    soundIcon.classList.add("hidden");
    muteIcon.classList.remove("hidden");
    volume.mute = false;
  }
}

function handleDataButtons(position) {
  if (position === 0) {
    changeName(pokeName);
  } else if (position > 0 && position < statsTitles.length) {
    statsPosition = position;
    nameTitle.innerHTML = `<h3>${statsTitles[statsPosition]}</h3><br><p>${pokemonStats[statsPosition]}</p>`;
  } else if (
    position >= statsTitles.length &&
    pokemonStats[position] != undefined
  ) {
    nameTitle.innerHTML = `<h3>Abilities</h3><br><p>${pokemonStats[position]}</p>`;
  } else {
    nameTitle.innerHTML = ``;
  }
}

function handleHelpButton() {
  if (helpMode) {
    document.body.style.filter = "grayscale(0)";
    helpMode = false;
    nameTitle.innerHTML = ``;
  } else {
    document.body.style.filter = "grayscale(0.5)";
    helpMode = true;
    nameTitle.innerHTML = `<p>Hover over buttons for help</p>`;
  }
}

function handleRefreshButton() {
  if (helpMode) {
    return;
  } else {
    synth.triggerAttackRelease("A2", "60n", "+0.01");
    setTimeout(() => {
      window.location.reload();
    }, 3000);
    nameTitle.innerHTML = `<p>Reseting Pokédex</p>`;
    setInterval(() => {
      nameTitle.innerHTML += `.`;
    }, 500);
  }
}

function handleDataButton(target) {
  synth.triggerAttackRelease("C4", "500n", "+0.01");
  console.log(target.classList.contains("dataButtonOne"));
  // if (target.classList.contains("data-button")) {
  //   handleDataButtons(target.dataset.position);
  // }
}
// synth.triggerAttackRelease("C4", "500n", "+0.01");
// dataButtons.forEach((button) => {
//   button.classList.remove("pressed");
// });
// dataButtonOne.classList.add("pressed");
// if (data) {
//   handleDataButtons(position);
// } else {
//   searchForPokemonFirst();
// }
