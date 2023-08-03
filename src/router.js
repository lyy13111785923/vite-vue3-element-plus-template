// 该文件由gen-router.js自动生成，请勿手动修改
   import VueRouter from 'vue-router'
   import Vue from 'vue'
   
   Vue.use(VueRouter)
   var routes = [
   {path: '/demo1', component: ()=> import(/* webpackChunkName: "demo1" */ "@/views/demo1/index.vue") },
{path: '/demo10', component: ()=> import(/* webpackChunkName: "demo10" */ "@/views/demo10/index.vue") },
{path: '/demo2', component: ()=> import(/* webpackChunkName: "demo2" */ "@/views/demo2/index.vue") },
{path: '/demo3', component: ()=> import(/* webpackChunkName: "demo3" */ "@/views/demo3/index.vue") },
{path: '/demo4', component: ()=> import(/* webpackChunkName: "demo4" */ "@/views/demo4/index.vue") },
{path: '/demo5', component: ()=> import(/* webpackChunkName: "demo5" */ "@/views/demo5/index.vue") },
{path: '/demo6', component: ()=> import(/* webpackChunkName: "demo6" */ "@/views/demo6/index.vue") },
{path: '/demo7', component: ()=> import(/* webpackChunkName: "demo7" */ "@/views/demo7/index.vue") },
{path: '/demo8', component: ()=> import(/* webpackChunkName: "demo8" */ "@/views/demo8/index.vue") },
{path: '/demo9', component: ()=> import(/* webpackChunkName: "demo9" */ "@/views/demo9/index.vue") },
{path: '/index', component: ()=> import(/* webpackChunkName: "index" */ "@/views/index.vue") },

   ];
   
   const router = new VueRouter({
   mode: 'hash',
   routes
   })
   export default router
  