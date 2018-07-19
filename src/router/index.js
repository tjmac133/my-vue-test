import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)


const Foo = { template: '<div>foo</div>' }
const Bar = { template: '<div>bar</div>' }
const user = { template: '<div>user: {{ $route.params.names }}</div>' }


const routes = [
  { path: '/foo', component: Foo },
  { path: '/bar', component: Bar },
  { path: '/user/:names', component: user }
]


export default new Router({
  routes
})
