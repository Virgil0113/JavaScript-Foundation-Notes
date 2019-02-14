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

### 在标记里增加一段描述

为了增强图片库函数，我希望在显示图片时把这个文本节点的值替换为目标图片链接的 tilte 的值。首先需要为目标文本安排显示位置。在 gallery.html 文件里在 `<img>` 标签后增加一个新的文本段，为它设置一个独一无二的 id 方便在 JavaScript 函数里引用：

​                                    `<p id="description">Choose an image.</p>`

希望达到的效果是，在某个图片链接被点击时，不仅要把“占位符”图片替换为那个链接的 href 属性所指向的图片，还要把这段文本同时替换为那个图片链接的 title 属性值。为了实现这一效果需要对 showPic 函数做一些改进。

---

### 用 JavaScript 改变描述

原先的 showPic 函数为：

​                                  `function showPic(whichpic) {`

​                                       `var source = whichpic.getAttribute("href");`

​                                       `var placeholder = document.getElementById("placeholder");`

​                                       `placeholder.setAttribute("src",source);`

​                                 `}`

首先需要在 showPic 函数里增加一条语句来获取 whichpic 对象的 title 属性值。把这个值存入 text 变量：

​                                  `var text = whichpic.getAttribute("title");`

接下来，为了能方便引用 id 为 description 的文本段落，新建一个变量来存放它：

​                                  `var description = document.getElementById("description");`

---

### nodeValue 属性

如果想改变一个文本节点的值，那就要使用 DOM 提供的 nodeValue 属性，它用来得到和设置一个节点的值：

​                                  `node.nodeValue`

在用 nodeValue 属性获取 description 对象的值时有一点需要注意的是，此时得到的并不是包含在这个段落里的文本。这个调用将返回一个 null 值。 `<p>`元素本身的 nodeValue 属性是一个空值，而我们真正需要的是 `<p>`元素所包含的文本的值。

包含在 `<p>`元素里的文本是另一种节点，它是 `<p>`元素的第一个节点。因此，想要得到的其实是它的第一个节点的 nodeValue 属性值。

​                                   `alert(description.childNodes[0].nodeValue);`

这个调用的返回值才是需要寻找的“Choose an image.”。这个值来自 childNodes 数组的第一个元素。

---

