import Vue from 'vue';
import Router from 'vue-router';
import home from '@/components/home';
import about from '@/components/about';
import UserProfile from '@/components/UserProfile';


Vue.use(Router)


const Foo = { template: '<div>foo</div>' }
const Bar = { template: '<div>bar</div>' }
const user = { template: '<div>user: {{ $route.params.names }}</div>' }


const routes = [
  {path:'',component:home},
  { path: '/foo', component: Foo },
  { path: '/bar', component: Bar },
  { path: '/user/:names', component: user },
  {
    path: '/home',
    name: 'home',
    component: home
  },
  {
    path: '/about',
    name: 'about',
    component: about,
    children: [
      {
        path: '/',

        component: UserProfile
      }]
  },
]


export default new Router({
  routes
})
