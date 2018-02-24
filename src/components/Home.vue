<template>
<transition name="slide-fade">
  <div>
    <div class="home">
        <img src="../assets/homeimg/home.jpg" alt="" class="home_img">
        <!-- <input type="button" class="btn_login" value="SIGN UP"> -->
        <img src="../assets/homeimg/next.png" alt="" class="btn_next">
    </div>
    <div>
        <Model></Model>
    </div>
    <div>
      <introduce></introduce>
    </div>

    <div>
      <iconarea></iconarea>
    </div>
  </div>
</transition>
</template>

<script>
import introduce from '@/components/HomeChild/introduce'
import iconarea from '@/components/HomeChild/iconarea'
import Model from '@/components/HomeChild/Model'
export default{
      components:{
        introduce,iconarea,Model
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.home {
    width: 100%;
}

.home .home_img {
    width: 100%;
    margin-top: -15px;
}



.home .btn_next {
    width: 50px;
    height: 50px;
    position: absolute;
    top: 500px;
    left: 650px;
    cursor: pointer;
    transition: All 1s ease-in-out;
    -webkit-transition: All 1s ease-in-out;
    -moz-transition: All 1s ease-in-out;
    -o-transition: All 1s ease-in-out;
}
.home .btn_next:hover{
   transform: scale(1.1);
    -webkit-transform: scale(1.1);
    -moz-transform: scale(1.1);
    -o-transform: scale(1.1);
    -ms-transform: scale(1.1);
}
.slide-fade{
  position: absolute;left:0;right: 0;
}
.slide-fade-enter-active {
  transition: all 1.2s ease;
}
.slide-fade-leave-active {

  transition: all .1s cubic-bezier(2.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
{
  left:0;right: 0;
  transform: translateX(50px);
  opacity: 0;
}
</style>
