<template>
  <div>
      <nav class="nav-1">
        <a href="#"><img src="../assets/homeimg/logo.png" alt="logo" class="logo"></a>
        <ul class="nav-ul">
            <a href="">
                <li>{{homepage}}</li>
            </a>
            <router-link to="/DataProcess">
                <li>{{myworkbench}}</li>
            </router-link>
            <a href="">
                <li>{{historicalrecord}}</li>
            </a>
        </ul>

        <input type="text" class="search">
        <img src="../assets/homeimg/search.png" alt="" class="search_ico">

        <div class="login">
            <ul>
                <router-link to="/Login">
                    <li>{{login}}</li>
                </router-link>
            </ul>
        </div>
    </nav>
  </div>
</template>

<script>
export default{
    data(){
        return{
            homepage:"首页",
            myworkbench:"我的工作台",
            historicalrecord:"历史记录",
            login:"登录"
        }
    }
}
</script>

<style>
.nav-1 {
    width: 100%;
    height: 60px;
    background-color: rgb(141, 64, 64);
    position: fixed;
    top: 0;
    background-color: rgba(163, 99, 99, 0.5);
    transition: All 0.4s ease-in-out;
    -webkit-transition: All 0.4s ease-in-out;
    -moz-transition: All 0.4s ease-in-out;
    -o-transition: All 0.4s ease-in-out;
}

.nav-1:hover {
    background-color: rgba(163, 99, 99, 0.8);
}

.logo {
    width: 40px;
    height: 40px;
    float: left;
    margin-left: 40px;
    margin-top: 10px;
    transition: All 0.4s ease-in-out;
    -webkit-transition: All 0.4s ease-in-out;
    -moz-transition: All 0.4s ease-in-out;
    -o-transition: All 0.4s ease-in-out;
}

.logo:hover {
    transform: rotate(360deg);
    -webkit-transform: rotate(360deg);
    -moz-transform: rotate(360deg);
    -o-transform: rotate(360deg);
    -ms-transform: rotate(360deg);
}

.nav-1 .nav-ul {
    float: left;
    margin-left: 50px;
    margin-right: 60px;
    text-align: center;
}

.nav-1 .nav-ul li {
    list-style: none;
    float: left;
    color: white;
    width: 100px;
    height: 58px;
    line-height: 60px;
    margin-top: -15px;
    transition-duration: 0.5s;
}

.nav-1 .nav-ul li:hover {
    border-bottom: 3px solid rgb(115, 230, 21);
    color: rgb(207, 205, 69);
    background-color: rgba(19, 19, 19, 0.5);
    transform: rotate(360deg);
    -webkit-transform: rotate(360deg);
    -moz-transform: rotate(360deg);
    -o-transform: rotate(360deg);
    -ms-transform: rotate(360deg);
}

.nav-1 .search {
    width: 300px;
    height: 25px;
    border: none;
    margin-top: 17px;
    border-radius: 10px;
    padding-left: 60px;
    color: #fff;
    background-color: rgba(255, 255, 255, 0.3);
    transition: All 1s ease-in-out;
    -webkit-transition: All 1s ease-in-out;
    -moz-transition: All 1s ease-in-out;
    -o-transition: All 1s ease-in-out;
}

.nav-1 .search:hover {
    transform: scale(1.1);
    -webkit-transform: scale(1.1);
    -moz-transform: scale(1.1);
    -o-transform: scale(1.1);
    -ms-transform: scale(1.1);
}

.nav-1 .search_ico {
    width: 20px;
    height: 20px;
    position: absolute;
    top: 20px;
    left: 540px;
    cursor: pointer;
}

.nav-1 .login {
    float: right;
}

.nav-1 .login ul {
    margin-right: 40px;
}

.nav-1 .login ul li {
    list-style: none;
    float: left;
    color: white;
    margin-right: 10px;
    margin-top: 5px;
}

.nav-1 .login ul li:hover {
    color: rgb(87, 189, 47);
}

</style>

