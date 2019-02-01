## JavaScript DOM 编程艺术 Chapter 2 浏览器战争

#### 两大公司的浏览器发布

Netscape 公司于1997年6月发布了 Netscape Navigator 4, 同年10月微软公司发布了 IE 4 浏览器。 这两种浏览器都对它们的早期版本进行了改进，大幅扩展了DOM，使能通过 JavaScript 完成的功能大大增强。

---
#### DHTML

DHTML 是 “Dynamic HTML” （动态 HTML）的简称。DHTML 是描述 HTML、CSS 和 JavaScript 技术组合的术语。其背后的含义是：

- 利用 HTML 把网页标记为各种元素
- 利用 CSS 设置元素样式和它们的显示位置
- 利用 JavaScipt 实时地操控页面和改变样式

然而不幸的是， NN4 和 IE 4 浏览器使用的是两种不兼容的DOM,这使得在解决DOM问题时采用的方法完全不同。

---

#### 浏览器之间的冲突

Netscape 公司的DOM使用了专有元素，这些元素称为层（layer）。层有唯一的ID，JavaScript 代码需要像下面这样引用它们：

​            `document.layers['myelement']`

而在微软公司的 DOM 中这个元素必须被这样引用：

​            `document.all['myelement']`

这导致了程序员在编写 DOM 脚本代码时必须知道它们将运行在哪种浏览器环境里，所以在实际工作中许多脚本都不得不编写两次，为了确保能正确的像不同浏览器提供与之相应的脚本，程序员还必须编写代码去探查客户端运行的浏览器到底是哪一种。这种可笑的局面使得使得 DHTML 从一个大热门变成了了一个人们不愿意提起的名词。