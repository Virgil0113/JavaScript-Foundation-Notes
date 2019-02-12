## JavaScript DOM 编程艺术 Chapter 14 应用 this JavaScript 函数

showPic 函数写完了，接下来就要在图片库文档里使用它。把这个函数保存在扩展名为 .js 的文本文件中，取名为 [showPic.js](https://github.com/Virgil0113/JavaScript-Foundation-Notes/blob/master/JavaScriptDomCode/Demo4/scripts/showPic.js) 。

现在需要在图片库文档里插入一个链接来引用这 JavaScript 脚本文件。将下面这行代码插入到 [HTML 文档](https://github.com/Virgil0113/JavaScript-Foundation-Notes/blob/master/JavaScriptDomCode/Demo4/gallery.html)的 `</body>`标签之前：

​                                  `<script type="text/javascript" src="scripts.showPic.js"></script> `

这样在图片库文档里就可以使用 showPic 函数了。如果就此打住，那么函数 showPic 永远也不会被调用。我们还需要给图片列表的链接添加行为，也就是事件处理函数，才能达成目标。

### 事件处理函数

事件处理函数的作用是在特定事件发生时调用特定的 JavaScript 代码。在设计的图片库里我希望在用户点击某个元素时触发一个动作，所以需要使用 onclick 事件处理函数。

showPic() 函数需要一个参数：一个带有 href 属性的元素节点参数。当把 onclick 事件处理函数嵌入到一个链接中时，需要把这个链接本身用作 showPic 函数的参数。

一个非常简单有效的办法可以做到这一点：使用 this 关键字。这个关键字的含义是“这个对象”。具体到当前例子，this 表示“这个 `<a>` 元素节点“：`showPic(this)`

这样 onclick 事件就可以调用 showPic 方法了：

​                                   `onclick = "showPic(this);"`

