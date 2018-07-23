<template>
  <div>
    <p>userProfile 的子组件</p>
    <p v-text="user.username"></p>

    <p v-text="user.lastDate"></p>


    <select @change="updateUserSex">

      <option :value="null"></option>
      <template v-for="option in user.options">
        <option :value="option.value" >{{ option.label }}</option>
      </template>
    </select>

    <p>userProfile 的子组件</p>


  </div>
</template>

<script>
  import $ from 'jquery'
    export default {
        name:'user',
        data () {
            return {};
        },

      props:{
        user:{
          type:Object
        }
      },
      computed :{
      },
      methods: {
        updateUserSex:function({ type, target }){

            console.log(target.value);
            console.log($(target).find("option:selected").text());
           this.$emit("changeUserSex",target.value);
        }

      }
    };
</script>

