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

添加一个小函数到 showPic.js 文件里将弹出一个 alert 对话框，显示 body 元素的子元素的总个数：

​                                  function countBodyChildren() {

​                                        var body_element = document.getElementByTagName("body")[0];

​                                        alert(body_element.childNodes.length);

​                                  }

如果想让这个函数在页面加载时执行，需要使用 onload 函数，所需要添加的到代码段末尾的语句为：

​                                   `window.onload = countBodyChildren;`

更新后的 showPic.js 文件为——[code](https://github.com/Virgil0113/JavaScript-Foundation-Notes/blob/master/JavaScriptDomCode/Demo5/scripts/showPic.js)

---

### nodeType 属性

每一个节点都有 nodeType 属性。这个属性可以让我们知道自己正在与哪一种节点打交道。nodeType 的值不是英文字符串而是一个数字。nodeType 属性总共有12种可取值，其中3种具有实用价值：

- 元素节点的 nodeType 属性值是1
- 属性节点的 nodeType 属性值是2
- 文本节点的 nodeType 属性值是3

这就意味着，可以让函数只针对特定的节点进行处理。例如，可以编写出一个只处理元素节点的函数。

---

