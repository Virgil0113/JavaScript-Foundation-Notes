## JavaScript DOM 编程艺术 Chapter 15  函数扩展

关键词：childNotes 属性、nodeType 属性、nodeValue 属性、firstChild属性、lastChild 属性

---

### childNods 属性

在一棵节点树上，childNodes 属性可以用来获取任何一个元素的所有子元素，它是一个包含这个元素全部子元素的数组。

假设需要把某个文档的 body 元素的全体子元素检索出来。首先使用 getElementByTagName 得到 body 元素。因为每份文档只有一个 body 元素，所以它将是 getElementByTagName("body") 方法返回的数组中的第一个（也是唯一一个）元素：

​                                `var body_element = document.getElementByTagName("body")[0];`

现在，变量 body_element 已经指向了某个文档的 body 元素。接下来，可以使用如下语法获得 body 元素的全体子元素：

​                                `body_element.childNodes`

运用 childNodes 可以精确的查出 body 元素一共有多少个子元素。因为 childNodes 属性返回的是一个数组，所以用 length 属性就可以知道它所包含的元素的个数：

​                                 `body_element.childNodes.length`

把

