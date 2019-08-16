<template>
  <div id="pagehead">
    <div class="pagehead-welcome">
      <a class="welcome"> 权限管理系统</a>
    </div>
    <div class="pagehead-bg">
      <a class="username">
        {{user.userName}}
      </a>
      <a class="login_out" @click="removeSession">
        注销
        <i class="el-icon-s-release"></i>
      </a>
    </div>
  </div>
</template>

<script>
  // var url = "http://localhost:8080"

  var url = "http://106.13.207.98:8080/jurisdiction";
export default {
  name: 'pagehead',
  data(){
    return{
      userId:"",
      user:{}
    }
  },
  props: {
    msg: String
  },
  created(){
    this.init()
  },
  methods: {
    init(){
      this.userId = this.$store.state.loginUserId;
      this.userId = this.$store.state.loginUserId;
      this.$axios.get(url + "/user/findById", {
        params: {
          userId: this.userId
        }
      }).then(res2 => {
        if (res2.data.status == 200) {
          this.user = res2.data.data;
        }
      }).catch(error2 => {
        this.$message('查询用户异常');
      })
    },
    removeSession:function () {

      this.$router.push({name: 'home'})
      window.localStorage.removeItem("userId")
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  #pagehead{
    margin: 0;
    padding: 0;
    width: 100%;
    height: 80px;
    background-color: #545c64;
  }
  .pagehead-welcome{
    float: left;
    margin: auto;
  }
  .welcome{
    text-decoration: none;
    line-height: 80px;
    color: #fbffff;
    font-size: 20px;
    margin-right: 10px;
  }
    .pagehead-bg{
      float: right;
      margin: 0;
    }
    .username{
      text-decoration: none;
      line-height: 80px;
      color: #409eff;
      font-size: 20px;
      margin-right: 10px;
    }
  .login_out{
    text-decoration: none;
    line-height: 80px;
    margin-right: 50px;
    font-size: 20px;
    color: white;
    cursor: pointer;
  }

</style>
