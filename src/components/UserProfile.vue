<template>
 <div>
   <p style="color: red">父级组件</p>

   <button v-on:click="setUser" >修改父级User数据</button>
   <label>子组件的选择</label>
   <p v-text="user.sex"></p>
   <p style="color: red">父级组件</p>
    <user :user="this.user" @changeUserSex="getUserSex"></user>



 </div>
</template>

<script>
  import user from './user';
    export default {
        name:'userprojectr',
        data () {
            return {
               user:{
                   username:'test',
                   lastDate:new Date,
                   options:[{"value":'1',"label":"男"},{"value":'21',"label":"女"}],
                   sex:''
               }
            };
        },
      components:{
        user
      },
      methods: {
        setUser: function (event) {
          this.user.lastDate=new Date;
        },
        setUserSex:function (sex) {
            this.user.sex=sex;

        },
        getUserSex:function (msg) {
          console.log('接收的数据--------->'+msg)//接收的数据--------->我是子组件中的数据
        }
      }
    };
</script>
