let searchInput = document.getElementById("input");
let searchButton = document.getElementById("main_light_blue_button");
let image = document.getElementById("pokeImg");
let loadingAnimationImg = document.getElementById("loadingGifAnimation");
let nameTitle = document.getElementById("pokeName");
let pokeGender = document.getElementById("pokeGender");
let pokeTypes = document.getElementById("pokeTypes");
let forwardButton = document.getElementById("d_pad_right");
let backwardButton = document.getElementById("d_pad_left");
let upButton = document.getElementById("d_pad_up");
let downButton = document.getElementById("d_pad_down");
let cryButton = document.getElementById("primary_screen_red_button");
let mainBigLed = document.getElementById("main_big_led");
let speaker = document.getElementById("speaker");
let secondaryLeftArrow = document.getElementById("secondary_left_arrow");
let secondaryRightArrow = document.getElementById("secondary_right_arrow");
let pokemonStats;
let statsKeys = [
    "Name",
    "Height",
    "HP",
    "Attack",
    "Defense",
    "Speed",
    ];
let statsPosition = 0;
let spritePosition = 0;
let availableSprites;
let spriteKey;
let spriteSrc;
let spriteAmount;
let data;
let pokeId;
let pokeName;
let poketypeOne;
let poketypeTwo;
let randomPokemon;