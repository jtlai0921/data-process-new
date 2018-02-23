<template>
  <div>
    <div class="home">
        <img src="../assets/homeimg/home.jpg" alt="" class="home_img">
        <input type="button" class="btn_login" value="SIGN UP">
        <img src="../assets/homeimg/next.png" alt="" class="btn_next">
    </div>

    <div>
      <introduce></introduce>
    </div>

    <div>
      <iconarea></iconarea>
    </div>
  </div>
</template>

<script>
import introduce from '@/components/HomeChild/introduce'
import iconarea from '@/components/HomeChild/iconarea'
export default{
      components:{
        introduce,iconarea
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

.home .btn_login {
    width: 200px;
    height: 50px;
    border-radius: 10px;
    border: none;
    position: absolute;
    top: 300px;
    left: 575px;
    cursor: pointer;
    background-color: rgba(255, 255, 255, 0.3);
    color: white;
    font-size: 18px;
    letter-spacing: 5px;
    font-weight: 700;
    color: rgb(51, 45, 45);
    transition: All 1s ease-in-out;
    -webkit-transition: All 1s ease-in-out;
    -moz-transition: All 1s ease-in-out;
    -o-transition: All 1s ease-in-out;
}

.home .btn_login:hover {
    transform: scale(1.2);
    -webkit-transform: scale(1.2);
    -moz-transform: scale(1.2);
    -o-transform: scale(1.2);
    -ms-transform: scale(1.2);
    background-color: rgba(255, 255, 255, 0.7);
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
</style>
