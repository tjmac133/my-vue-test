<template>
  <div>

    <p v-text="status"></p>
    <button v-on:click="goBack()">go back</button>
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: "about",
    data(){
      return {
        status: '',
        orderId: '',
        ids: ''
      }
    },
    created(){
      this.status = this.$route.query.status;


    },
    methods:{
      goBack:function(e){

          this.$router.go(-1);
      }
    }
  }
</script>

