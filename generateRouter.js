let fs = require('fs');
let path = require('path');

const vueDir = './src/views/';

fs.readdir(vueDir, function (err, file) {
  let routers = ``;
  readdir(vueDir)
  
  function readdir(p){
    //读取当前目录下的文件
    let files = fs.readdirSync(p)
  
    //循环当前目录下的文件
    files.forEach(file => {
        //如果是文件就直接打印，否则就读文件夹
        let msg = fs.statSync(path.join(__dirname, p, file));
  
        if (msg.isFile()) {
            if(file==='index.vue'){
              let arr=path.join(__dirname, p, file).split('/')
              let name=arr[arr.length-2]
              let filename=arr[arr.length-2]
              if(name === 'views'){
                name=arr[arr.length-1].split('.')[0]
                routers += `{path: '/${name === 'root' ? '' : name}', component: ()=> import(/* webpackChunkName: "${name}" */ "@/${filename}/index.vue") },\n`;
              }else{
                routers += `{path: '/${name === 'root' ? '' : name}', component: ()=> import(/* webpackChunkName: "${name}" */ "@/views/${filename}/index.vue") },\n`;
              }
            }
        } else {
            readdir(path.join(p, file))
        }
    })
  }

  const result = 
  `// 该文件由gen-router.js自动生成，请勿手动修改
   import VueRouter from 'vue-router'
   import Vue from 'vue'
   
   Vue.use(VueRouter)
   var routes = [
   ${routers}
   ];
   
   const router = new VueRouter({
   mode: 'hash',
   routes
   })
   export default router
  `

  fs.writeFile('./src/router.js',result, 'utf-8', 
   (err) => {  
     if (err) throw err; 
     // 如果没有错误
     console.log("./src/router.js 生成成功！")  
  });
})


