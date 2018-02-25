<template>
<transition name="slide-fade">
    <div class="bgc" :style="d_div1">
        <div class="login_div">
            <div class="d_title">
                <p>登录</p>
            </div>

            <div class="d_ipt">
                <input type="text" placeholder="用户名/邮箱">
                <input type="text" placeholder="密码">
            </div>

            <div class="d_btn"> 
                <input type="button" value="注册">
                <input type="button" value="登录">
            </div>
        </div>
    </div>
</transition>
</template>

<script>
    export default{
        data(){
            return{
                d_div1:{
                    backgroundImage: "url(" + require("../../assets/dataprocess/background.jpg") + ")",
                },
            }
        }
    }
</script>

<style>
input::-webkit-input-placeholder { /* WebKit browsers */ 
    color: rgba(255, 253, 253,0.5); 
} 
input:-moz-placeholder { /* Mozilla Firefox 4 to 18 */ 
    color: rgba(255, 253, 253,0.5);  
} 
input::-moz-placeholder { /* Mozilla Firefox 19+ */ 
    color: rgba(255, 253, 253,0.5);  
} 
input:-ms-input-placeholder { /* Internet Explorer 10+ */ 
    color: rgba(255, 253, 253,0.5); 
} 
.bgc{
    width: 100%;
    height: 700px;
    margin-top: -100px;
    box-sizing: border-box;
    padding-top: 250px;
    margin-bottom: -20px;
}
.login_div{
    width: 350px;
    height: 400px;
    background-color: rgba(3, 3, 7,0.6);
    margin: 0 auto;
}
.login_div .d_title{
    width: 100%;
    height: 40px;
    background-color: rgb(88, 53, 53);
    text-align: center;
}
.login_div .d_title p{
    color: #fff;
    line-height: 40px;
}
.login_div .d_ipt{
    width: 100%;
    height: 300px;
    background-color: rgba(134, 79, 79,0.3);
    text-align: center;
    padding-top: 90px;
    box-sizing: border-box;
}
.login_div .d_ipt input{
    width: 300px;
    height: 40px;
    border: none;
    margin-bottom: 25px;
    background-color: rgba(250, 250, 250,0.2);
    font-family: "微软雅黑";
    color:#fff;
    padding-left: 15px;
    border-radius: 10px;
}
.login_div .d_btn{
    width: 100%;
    height: 60px;
    background-color: rgb(75, 75, 75);
}
.login_div .d_btn input{
    height: 60px;
    width: 175px;
    float: right;
    border: none;
    cursor: pointer;
    font-family: "微软雅黑";
    letter-spacing: 15px;
    font-size: 18px;
    transition: All 0.4s ease-in-out;
    -webkit-transition: All 0.4s ease-in-out;
    -moz-transition: All 0.4s ease-in-out;
    -o-transition: All 0.4s ease-in-out;
}
.login_div .d_btn input:hover{
    background-color: rgb(75, 75, 75);
    color: #fff;
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