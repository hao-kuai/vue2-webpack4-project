<template>
<div class="hello" @click="textClick">
  Hello webpack !
  <img :src="iconImage">
  <img :src="iconImage2">
  <img :src="chartImage">
</div>
</template>

<script>
import {textPrint} from "./js/textPrint";
import iconImage from "./image/icon.jpg";
import iconImage2 from "./image/image2.jpeg";
import chartImage from "./image/chart.png";
export default {
  name: "App",
  data(){
    return {
      iconImage,iconImage2,chartImage
    }
  },
  methods:{
    textClick(){
      textPrint()
    }
  }
}
</script>

<style >
.hello {
  color: red;
  /*引用字体*/
  font-family: "MyFont";
}
</style>