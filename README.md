# v-ebook

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

### Run your tests

```
npm run test
```

### Lints and fixes files

```
npm run lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).

### 下载的依赖包

### other

#### \$store

- this.\$store.dispatch(调度)

#### 获取路由参数

- \$route.params.fileName

#### actions

- 混入方法中使用可以用 this 直接访问 vuex 中的方法

---

### vuex 传入的共享值

- 通过对象解构可以通过 this 拿到所需要的值

- menuVisible(控制按钮栏的显示与隐藏)

### 环境变量与模式
> 在不同模式下调用不同的变量的(例如路径)时候

##### 创建环境变量


1. 在更目录下创建.env.xxxx 文件
2. xxx 表示模式
   - development(开发模式)
   - production(生产模式)
   - test(测试模式)
3. 文件中输入

```js
VUE_APP_RES_URL= XXXX
// VUE_APP_未必填参数
```

##### 调用环境变量
- 在使用的地方,通过使用process.env.进行调用环境变量

```js
process.env.VUE_APP_RES_URL
```

### storage
 cnpm i --save web-storage-cache

 可以将对象转为Json 读取时将Json转为对象
 ### 国际化语言