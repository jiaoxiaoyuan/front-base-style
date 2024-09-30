# 💒saduocss原子类css仓库

#### 🌈特点介绍

* 轻量
* 实用
* 小巧
因为轻，所以值得拥有，很好的一个原子类css样式库。

#### ⛱️软件架构

* 重置和基本样式

```style
@import './reset.css';
@import './base.css';
```

* 响应式

```style
@import './screen.css';
```

* 位置

```style
@import './row.css';
@import './col.css';
@import './position.css';
```

* 间距

```style
@import './margin.css';
@import './padding.css';
@import './top.css';
```

* 高度&高度

```style
@import './width.css';
@import './height.css';
@import './line-height.css';
```

* 列表&文本

```style
@import './list.css';
@import './text.css';
@import './font.css';
```

* 阴影

```style
@import './shadow.css';
```

* 透明度

```style
@import './opacity.css';
```

* 滤镜

```style
@import './filters.css';
```

* 颜色

```style
@import './color.css';
```

#### 🚧响应式断点

断点设置，768px，1024px，1280px，1536px，1920px。

* 手机

```css
@media (max-width: 768px){}
```

* phone to ipad

```css

@media (min-width: 768px){}

```

* ipad

```css
@media (min-width:1024px){

}
```

* pc笔记本 old

```css
@media (min-width:1280px) {}
```

* pc笔记本 new 1920px

```css
@media (min-width:1536px) {}
```

* 超大屏 4k

```css
@media (min-width:1920px) {}
```

**注意：正常情况下，只区分wap和pc，只需写一份断点1024即可，如下：
**

```css

//兼容移动端
@media (max-width:1024px){

}
```

#### 使用说明

## 安装方式一

1.安装依赖包

```javascript

npm i saduocss --save
```

2.引入样式

```javascript
import "saduocss/src/all.css";
```

### cdn引入

```html
<link rel="stylesheet" href="https://unpkg.com/saduocss@1.2.0/dist/assets/css/index.css">
或者
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/saduocss@1.2.0/dist/assets/css/index.css">
```


