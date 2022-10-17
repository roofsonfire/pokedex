<script>
export default {
  name: "Screens",
  props: {
    input: {
      type: String,
      default: "",
    },
    name: {
      type: String,
      default: "",
    },
    gender: {
      type: String,
      default: "",
    },
    types: {
      type: Array,
      default: () => [],
    },
    image: {
      type: String,
      default: "",
    },
  },
};
</script>

<template>
  <g id="screens">
    <path
      id="secondary_screen"
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M149 594.5H305.8C309.7 594.5 312.8 597.7 312.8 601.5V647.3C312.8 651.2 309.6 654.3 305.8 654.3H149C145.1 654.3 142 651.1 142 647.3V601.5C142 597.7 145.1 594.5 149 594.5Z"
      fill="#39B348"
    />
    <foreignObject x="140" y="595" height="60" width="175">
      <div class="inputContainer">
        <input id="input" type="text" autocomplete="off" v-model="input" />
      </div>
    </foreignObject>
    <path
      id="tertiary_screen"
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M672.5 228.8H976C1004 228.8 1012.8 238.3 1012.8 256.2V357.2C1012.8 375 1005 386.2 977.1 386.2H672.1C644.1 386.2 634.4 375.1 634.4 357.2V256.2C634.4 238.3 644.5 228.8 672.5 228.8Z"
      fill="#2C2C2C"
    />
    <foreignObject x="640" y="230" width="365" height="150">
      <div id="pokeNameContainer">
        <h2 id="pokeName">
          {{ name }}
        </h2>
      </div>
    </foreignObject>
    <path
      id="small_screen_one"
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M669.4 623.6H778.7C780.6 623.6 782.1 625.1 782.1 627V656.2C782.1 658.1 780.6 659.6 778.7 659.6H669.4C667.5 659.6 666 658.1 666 656.2V627C666.1 625.2 667.6 623.6 669.4 623.6Z"
      fill="#2C2C2C"
    />
    <foreignObject x="663" y="621" width="125" height="40">
      <div id="pokeGenderContainer">
        <h3 id="pokeGender">
          {{ gender }}
        </h3>
      </div>
    </foreignObject>
    <path
      id="small_screen_two"
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M868.8 623.6H978.1C980 623.6 981.5 625.1 981.5 627V656.2C981.5 658.1 980 659.6 978.1 659.6H868.8C867.9 659.6 867 659.2 866.4 658.6C865.8 658 865.4 657.1 865.4 656.2V627C865.4 625.2 866.9 623.6 868.8 623.6Z"
      fill="#2C2C2C"
    />
    <foreignObject x="861" y="621" width="125" height="40">
      <div id="pokeTypesContainer">
        <h3 id="pokeTypes">
          {{ types }}
        </h3>
      </div>
    </foreignObject>
    <path
      id="main_screen"
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M151.1 259.7H373.8C389.3 259.7 402 272.4 402 287.9V420.8C402 436.3 389.3 449 373.8 449H151.1C135.6 449 122.9 436.3 122.9 420.8V287.8C122.9 272.4 135.6 259.7 151.1 259.7Z"
      fill="#CCFFFE"
    />
    <foreignObject x="185" y="285" width="200" height="200">
      <img
        id="loadingGifAnimation"
        width="70%"
        src="assets\animation.gif"
        alt=""
      />
    </foreignObject>
    <foreignObject x="170" y="255" width="200" height="200">
      <img id="pokeImg" :src="image" alt="" />
    </foreignObject>
  </g>
</template>

<style scoped></style>
