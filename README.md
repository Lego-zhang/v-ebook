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
