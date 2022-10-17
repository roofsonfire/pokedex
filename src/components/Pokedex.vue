<script>
import { defineComponent } from "vue";
import Axios from "axios";

import Screens from "./sub/Screens.vue";
import Glows from "./sub/Glows.vue";
import NoName1 from "./sub/noName/NoName1.vue";
import Group from "./sub/Group.vue";
import NoName2 from "./sub/noName/NoName2.vue";
import Speaker from "./sub/Speaker.vue";
import MainBigLed from "./sub/MainBigLed.vue";
import NoName3 from "./sub/noName/NoName3.vue";
import DPad from "./sub/DPad.vue";
import NoName4 from "./sub/noName/NoName4.vue";
import BtnOrange from "./sub/BtnOrange.vue";
import NoName5 from "./sub/noName/NoName5.vue";
import SecondaryLeftArrow from "./sub/SecondaryLeftArrow.vue";
import SecondaryRightArrow from "./sub/SecondaryRightArrow.vue";
import PrimaryScreenRedButton from "./sub/PrimaryScreenRedButton.vue";
import MainLightBlueButton from "./sub/MainLightBlueButton.vue";
import PrimaryScreenUnderLeftButton from "./sub/PrimaryScreenUnderLeftButton.vue";
import PrimaryScreenUnderRightButton from "./sub/PrimaryScreenUnderRightButton.vue";
import NoName6 from "./sub/noName/NoName6.vue";
import LedGreenInput from "./sub/LedGreenInput.vue";
import LedYellowInput from "./sub/LedYellowInput.vue";
import LedGreenMain from "./sub/LedGreenMain.vue";
import LedYellowMain from "./sub/LedYellowMain.vue";
import LedRedMain from "./sub/LedRedMain.vue";
import BtnsCelestes from "./sub/BtnsCelestes.vue";
import NoName7 from "./sub/noName/NoName7.vue";

export default defineComponent({
  name: "Pokedex",
  data() {
    return {
      input: null,
      name: null,
      gender: null,
      types: [],
      image: null,
    };
  },
  components: {
    Screens,
    Glows,
    NoName1,
    Group,
    NoName2,
    Speaker,
    MainBigLed,
    NoName3,
    DPad,
    NoName4,
    BtnOrange,
    NoName5,
    SecondaryLeftArrow,
    SecondaryRightArrow,
    PrimaryScreenRedButton,
    MainLightBlueButton,
    PrimaryScreenUnderLeftButton,
    PrimaryScreenUnderRightButton,
    NoName6,
    LedGreenInput,
    LedYellowInput,
    LedGreenMain,
    LedYellowMain,
    LedRedMain,
    BtnsCelestes,
    NoName7,
  },
  methods: {
    random() {
      this.search(Math.floor(Math.random() * 898) + 1);
    },
    search(random) {
      if (!random) {
        this.input = input.value;
      } else {
        this.input = random;
      }
      console.log(this.input);
      Axios.get(`https://pokeapi.co/api/v2/pokemon/${this.input}`).then(
        response => {
          this.display(response.data);
        }
      );
    },
    display(data) {
      console.log(data);
      this.changeImgSrc(data.sprites.front_default);
      this.changeName(data.name);
      this.changeGender("female");
      this.changeTypes(data.types);
    },
    backward() {
      this.search(this.input - 1);
    },
    forward() {
      this.search(this.input + 1);
    },
    changeImgSrc(src) {
      this.image = src;
    },
    changeName(name) {
      this.name = name;
      console.log(this.name);
    },
    changeGender(gender) {
      this.gender = gender;
      console.log(this.gender);
    },
    changeTypes(types) {
      this.types = types;
      console.log(this.types);
    },
  },
});
</script>

<template>
  <svg
    width="1086"
    height="720"
    viewBox="0 0 1086 720"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g id="Pokedex">
      <Screens
        :input="input"
        :name="name"
        :gender="gender"
        :types="types"
        :image="image"
        @keyup.enter="search()"
      />
      <Glows />
      <NoName1 />
      <Group />
      <NoName2 />
      <Speaker />
      <MainBigLed @click="random()" />
      <NoName3 />
      <DPad />
      <NoName4 />
      <BtnOrange />
      <NoName5 />
      <SecondaryLeftArrow />
      <SecondaryRightArrow />
      <PrimaryScreenRedButton />
      <MainLightBlueButton />
      <PrimaryScreenUnderLeftButton @click="search()" />
      <PrimaryScreenUnderRightButton />
      <NoName6 />
      <LedGreenInput />
      <LedYellowInput />
      <LedGreenMain />
      <LedYellowMain />
      <LedRedMain />
      <BtnsCelestes />
      <NoName7 />
    </g>
  </svg>
</template>

<style scoped></style>
