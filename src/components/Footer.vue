<template>
  <div>
      <footer class="footer">
        <div class="fot_u">
            <ul>
                <router-link to="">
                    <li>团队介绍</li>
                </router-link>  
                <router-link to="">
                   <li>联系我们</li>
                </router-link>
                <router-link to="">
                    <li>技术支持</li>
                </router-link>
            </ul>
        </div>
    </footer>
  </div>
</template>
<script>
    
</script>
<style>
.footer {
    width: 100%;
    height: 100px;
    background-color: rgb(58, 50, 50);
    margin-top: 20px;
}


.footer li {
    color: #fff;
    float: left;
    list-style: none;
    margin-left: 200px;
    line-height: 100px;
}
.footer li:hover{
    color: chartreuse;    
}
.fot_u {
    margin-left: 138px;
}
</style>
