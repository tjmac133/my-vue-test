<template>

  <div id="example">
    <p> home </p>
    <button v-on:click="greet(popShow)">Greet</button>
    <router-view></router-view>
  </div>
</template>

<script>
  import route from '../router/index'
  export default {
    name: "home",
    data(){
      return {
        popShow: false,
        moneys: ''
      }
    },
    methods: {

      greet: function (e) {
        route.push({
          path:'/about',
          query:{
            status:'status',
            orderId:'orderId',
            ids:'ids'
          }
        })

      }
    }

  }
</script>


