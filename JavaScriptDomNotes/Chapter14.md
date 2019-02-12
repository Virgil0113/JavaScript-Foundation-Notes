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

然而，如果仅仅把事件处理函数放到图片列表的一个链接中，会遇到一个问题：点击这个链接时，不仅 showPic 函数被调用，链接被点击的默认行为也会被调用。这意味着用户还是会被带到图片查看窗口，而我们需要阻止这个默认行为被调用。

进一步了解事处理函数的工作机制，在给某个元素添加了事件处理函数之后，一旦事件发生，相应的 JavaScript 代码就会得到执行并返回一个值，这个值将被传递给那个事件处理函数。例如，给某个链接添加一个 onclick 事件处理函数，让这个事件处理函数所触发的 JavaScript 代码回返回布尔值 true 或 false。这样一来如果返回值是 true，onclick 事件处理函数就认为”这个链接被点击了“；反之，如果返回值是 false，onclick 事件处理函数就认为”这个链接没有被点击“。这样在 onclick 事件处理函数所触发的 JavaScript  代码里增加一条 return false 语句，就可以防止用户被带到目标链接窗口：

​                                    `onclick = "showPic(this); return false;"`

下面是最终完成的 onclick 事件处理函数在图片库 HTML 文档里的样子：

​                                    `<li>`

​                                             `<a href="images/fireworks.jpg" onclick="showPic(this); return false;"`                                                                          

​                                               `title="A fireworks diaplay">Fireworks</a>`

​                                    `</li>`

