## JavaScript DOM 编程艺术 Chapter 17  平稳退化

关键词：JavaScript 伪协议、内嵌事件处理函数

---

当我们在使用 JavaScript 时需要记住的一点是，网站的访问者完全有可能使用的是不支持 JavaScript 的浏览器，还有一中可能就是虽然浏览器支持 JavaScript 但是用户已经禁用了它（比如因为讨厌看到弹出的广告）。如果没有考虑到这种情况，人们在访问你设计的网站时可能会遇到各种各样的麻烦。

如果正确的使用了 JavaScript 脚本，就可以让访问者在他们浏览器不支持 JavaScript 的情况下任能顺利的浏览网站。这就是所谓的平稳退化，就是说虽然某些功能无法使用，但最基本的操作任能顺利完成。

### JavaScript 伪协议

“真”协议用来在因特网上的计算机之间传输数据包，如 HTTP 协议（http://）、FTP 协议（ftp://）等，伪协议则是一种非标准化的协议。“javascript:”伪协议让我们通过一个链接来调用 JavaScript 函数。

下面是通过 “javascript:”伪协议调用 popUp() 函数的具体做法：

​                                      `function popUp(winURL) {`

​                                          `window.open(winURL,"popup","width=320,height=480");`

​                                       `}`

​                                       `<a href="javascript:popUp('http://www.example.com/');">Eample</a>`

这条语句在支持 “javascript:” 伪协议的浏览器中运行正常，较老的浏览器则会尝试打开那个链接但失败，支持这种伪协议但禁用了 JavaScript 功能的浏览器会什么也不做。所以在 HTML 文档中通过 “javascript:” 伪协议调用 JavaScript 代码的做法非常的不好。

---

### 内嵌的事件处理函数

在第四部分的图片库脚本里我们见识过了[事件处理函数](Chapter14.md)的用途和用法：把 onclick 事件处理函数作为属性嵌入 `<a>`标签，该处理函数将在 onclick 事件发生时调用图片切换函数。

这个技巧同样可以用来调用 popUp 函数。但当在某个链接里用 onclick 事件处理函数去打开心窗口时，这个链接的 href 属性失去了用处——与这个链接有关的重要信息已经都包括在它的 onclick 属性里了。这也正是我们经常看到如下链接的原因：

​                                     `<a href="#" onclick="popUp('http://www.example.com/'); return false;">`

​                                                  `Example</a>`

因为上面这条 HTML 指令里使用了 return false 语句，这个链接不会真的被打开。“#”符号是一个仅供文档内部使用的链接记号。在某些浏览器里，”#“链接指向当前问文档的开头。把 href 属性的值设置伪 ”#“只是为了创建一个空链接。实际工作全部由 onclick 属性完成。

很遗憾，这个技巧与用 ”javascript:“ 伪协议调用 JavaScript 代码的做法同样糟糕，因为它们不能平稳退化。如果用户禁用了浏览器的 JavaScript 功能，这样的链接将毫无意义。