## JavaScript DOM 编程艺术 Chapter 12 标记

这一章里我们将用 JavaScript 和 DOM 去建立一个图片库。为了避免简单的把所有的图片都放到一个网页里而导致发布较多图片时页面过于庞大的问题，为每张图片分别建立一个网页的解决方案值得考虑。利用 JavaScript 来创建图片库是最佳的选择：把整个图片库的浏览链接集中安排在图片库主页里，只在用户点击了这个主页的某个图片链接时才把相应的图片传送给他。

### 标记

为了完成 JavaScript 图片库，首先我选择了几张照片并把它们修整成浏览器最适合的尺寸——400像素宽 x 300像素高。

第一项工作是为这些图片创建一个链接清单。我打算用无序清单元素（`<ul>`）来排列这些图片，如果图片事前已经排序号也可以使用有序清单元素（`<ol>`）。--[标记清单](https://github.com/Virgil0113/JavaScript-Foundation-Notes/blob/master/JavaScriptDomCode/Demo3/image%20list.html)

