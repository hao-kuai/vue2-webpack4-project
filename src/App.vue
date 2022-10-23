<template>
<div class="hello" @click="textClick">
  Hello webpack !
  <img :src="iconImage" class="image">
  <img :src="iconImage2" class="image">
  <img :src="chartImage" class="image">
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

<style lang="scss">
.hello {
  color: red;
  transition: all .5s;
  /*引用字体*/
  font-family: "MyFont";
  .image{
    width: 300px;
    height: 300px;
  }
}
</style>
