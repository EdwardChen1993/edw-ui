### 安装


```bash
npm i @edwardchen1993/edw-ui --save
```

### 开始使用

**全局使用**


```js
// 引入所有组件
import EDWUI from '@edwardchen1993/edw-ui'
// 引入样式
import '@edwardchen1993/edw-ui/dist/index.css'

import App from './App.vue'
// 全局使用
createApp(App).use(EDWUI).mount('#app')
```

```vue
<template>
  <EDWButton>我是 EDWButton</EDWButton>
</template>
```

**单个导入**

edw-ui 提供了基于 ES Module 的开箱即用的 Tree Shaking 功能。


```vue
<template>
  <Button>我是 EDWButton</Button>
</template>
<script>
  import { Button } from '@edwardchen1993/edw-ui'
  export default {
    components: { Button },
  }
</script>
```
