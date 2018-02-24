<template>
<transition name="slide-fade">
  <div class="bgc" :style="d_div">
      <div class="d_div">
        <div class="d_head">
            <p>非结构化数据转结构化数据</p>
        </div>

        <div>
            <textarea name="" id="txtarea" cols="90" rows="20" class="d_input" placeholder="输入或拖拽.txt文件至框内" v-model="str"></textarea>
            
        </div>

        <div class="d_btn">
            <input type="button" value="开始分析" class="d_process">
            <input type="button" value="清空" class="d_del">
            <input type="button" value="复制" class="d_copy">
            <input type="file" id="upload" @change="upl">
            <input type="button" value="上传文件" @click="up">
        </div>

        <div>
            <textarea name="" id="" cols="90" rows="20" class="d_output" placeholder="分析结果">123</textarea>
        </div>
    </div>
  </div>
  </transition>
</template>
<script>
    export default{
        data(){
            return{
                d_div:{
                    backgroundImage: "url(" + require("../../assets/dataprocess/background.jpg") + ")",
                },
                str:''
            }
        },
        methods:{
            upl:function(){
                    var selectedFile = document.getElementById("upload").files[0];
                    var name = selectedFile.name;//读取选中文件的文件名
                    var size = selectedFile.size;//读取选中文件的大小
                    console.log("文件名:"+name+"大小："+size);
                    var reader = new FileReader();//读取操作就是由它完成的。
                    reader.readAsText(selectedFile,"UTF-8");//读取文件的内容

                    
                    reader.onload = function(){
                    var txtresult=document.getElementById("txtarea"); 
                    txtresult.str=this.result;
                 };
           
            },
            up:function(){
                    var upitp=document.getElementById('upload');
                    upitp.click();
            }
        }
    }
</script>
<style>
.bgc{
    width: 100%;
    height: 1100px;
    padding-top: 100px;
    padding-left:275px;
    /* background-color:rgba(20, 2, 2,0.7); */
    box-sizing: border-box;
    margin-bottom: -20px;
}
.d_div {
    width: 800px;
    height: 900px;
    text-align: center;
}

.d_div .d_head {
    width: 100%;
    height: 60px;
    text-align: center;
    border:1px solid #fff;
    border-radius: 10px;
}
.d_div .d_head p{
    letter-spacing: 10px;
    font-family: "微软雅黑";
    color: #fff;
    line-height: 25px;
}
.d_div .d_input{
    resize: none;
    margin-bottom: 20px;
    background-color: rgba(0, 0, 0,0.7);
    padding-top: 10px;
    padding-left: 10px;
    margin-top: 15px;
    margin-left: 15px;
    color: #fff;
    font-family: "微软雅黑";
}
.d_div .d_btn{
    height: 60px;
    line-height: 60px;
    border:1px solid #fff;
     border-radius: 10px;
}

.d_div .d_btn input{
    line-height: 40px;
    color: #fff;
    width: 100px;
    height: 40px;
    border: none;
    background-color: rgba(46, 10, 10, 0.5);
    cursor: pointer;
    margin-left: 10px;
}
.d_div .d_btn input:hover{
    background-color: rgb(114, 114, 114);
}

.d_div .d_output{
    resize: none;
    background-color: rgba(0, 0, 0,0.7);
    padding-top: 10px;
    padding-left: 10px;
    margin-top: 15px;
    margin-left: 15px;
    color: #fff;
    font-family: "微软雅黑";
}
#upload{
    display: none;
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

