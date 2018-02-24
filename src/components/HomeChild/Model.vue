<template>
  <div>
         <el-button type="text" @click="dialogFormVisible = true" class="btn_login">SIGN   UP</el-button>

        <el-dialog title="注册" :visible.sync="dialogFormVisible">
            <el-form :model="form">
                <span class="lg_sp">用户名</span>
                <el-input v-model="input" placeholder="请输入用户名"></el-input>
                <span class="lg_sp">邮箱</span>
                <el-input v-model="input" placeholder="请输入电子邮箱"></el-input>
                <span class="lg_sp">密码</span>
                <el-input v-model="input" placeholder="请输入密码"></el-input>
                <span class="lg_sp">确认密码</span>
                <el-input v-model="input" placeholder="必须与上面密码一致"></el-input>   

            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="dialogFormVisible = false">取 消</el-button>
                <el-button type="primary" @click="dialogFormVisible = false">注册</el-button>
            </div>
        </el-dialog>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        dialogTableVisible: false,
        dialogFormVisible: false,
        form: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        },
        formLabelWidth: '80px'
      };
    }
  };
</script>


<style>
.btn_login {
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

.btn_login:hover {
    transform: scale(1.2);
    -webkit-transform: scale(1.2);
    -moz-transform: scale(1.2);
    -o-transform: scale(1.2);
    -ms-transform: scale(1.2);
    background-color: rgba(255, 255, 255, 0.7);
    color: rgb(75, 16, 16);
}
.lg_sp{
    font-size: 15px;
}
</style>

