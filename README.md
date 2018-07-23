# my-vue-test

> A Vue.js project

## 使用vue-cli脚手架创建新项目

1. 安装vue
> $ npm install vue-cli -g

2. 创建项目my-vue-test
> $ vue init webpack my-project
## 项目创建过程中会提示是否安装eslint，可以选择不安装，否则项目编译过程中出现各种代码格式的问题

3. 项目创建完成后，启动项目
> $ npm run dev

## 没有特殊情况，项目可以正常运行
4. 安装项目基础包
> $ npm install vue-router --save （路由管理模块）

> $ npm install vuex --save （状态管理模块）

> $ npm install vue-resource --save （网路请求模块）


# 实现了简单路由

# select change 获取传中的值和内容
>
 npm install jquery --save

>
 import $ from 'jquery'
>
   <select @change="updateUserSex">
      <option :value="null"></option>
      <template v-for="option in user.options">
        <option :value="option.value" >{{ option.label }}</option>
      </template>
    </select>
>
 updateUserSex:function({ type, target }){

            console.log(target.value);
            console.log($(target).find("option:selected").text());
           this.$emit("changeUserSex",target.value);
        }
