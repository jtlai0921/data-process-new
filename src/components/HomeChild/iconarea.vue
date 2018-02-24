<template>
  <div class="content">

        <div>
            <router-link to="/DataProcess"><img src="../../assets/homeimg/chuli.png" alt=""></router-link>
            <router-link to="/DataProcess"><p>数据处理</p></router-link>
        </div>
        <div>
            <a href=""><img src="../../assets/homeimg/yangli.png" alt=""></a>
            <p>结果展示</p>
        </div>
        <div>
            <a href=""><img src="../../assets/homeimg/jieguo.png" alt=""></a>
            <p>案例分析</p>
        </div>

    </div>
</template>
<script>
    
</script>
<style>
a {
    text-decoration: none;
}
.content {
    width: 100%;
    height: 400px;
    text-align: center;
    padding-left: 20px;
    box-sizing: border-box;
    padding-top: 70px;
}

.content div {
    width: 150px;
    height: 180px;
    margin-left: 215px;
    float: left;
    text-align: center;
    transition: All 0.7s ease-in-out;
    -webkit-transition: All 0.7s ease-in-out;
    -moz-transition: All 0.7s ease-in-out;
    -o-transition: All 0.7s ease-in-out;
}
.content div:hover {    
    transform:rotate(360deg) scale(1.2);    
    -webkit-transform:rotate(360deg) scale(1.2);    
    -moz-transform:rotate(360deg) scale(1.2);    
    -o-transform:rotate(360deg) scale(1.2);    
    -ms-transform:rotate(360deg) scale(1.2);
    border: 2px double rgb(212, 198, 198);
    border-radius: 5px;
}

.content img {
    width: 100px;
    height: 100px;
}

.content p {
    font-size: 18px;
    color: #666;
}

</style>

