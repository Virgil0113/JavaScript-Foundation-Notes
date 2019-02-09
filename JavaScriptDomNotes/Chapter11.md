## JavaScript DOM 编程艺术 Chapter 11 获取和设置属性

关键词：getAttribute、setAttribute

---

前一章我们介绍了三种获取特定元素的方法：getElementById、getElementByTagName和 getElementByClassName。在得到元素之后我们就可以继续使用 getAttribute 方法来获取它的各个属性，并且可以用 setAttribute 方法来更改属性节点的值。

### getAttribute

getAttribute 是一个函数。它只有一个参数——打算查询的属性的名字：

​                      `object.getAttribute(attribute)`

与前面章节介绍的方法不同，getAttribute 方法不属于 document 对象，所以不能通过 document 对象调用。它只能通过元素节点调用。例如，可以与 getElementByTagName 方法合用，获取每一个 `<p>`元素的 title 属性：

​                      `var paras = document.getElementByTagName("p");`

​                      `for (var i = 0; i < paras.length; i++) {`

​                             `var title_text = paras[i].getAttribute("title");`

​                             `if (title_text) alert(title_text);`

​                      `}`

回到之前“购物清单”的例子，文件里只有一个 `<p>`元素，并且它有 title 属性。 假如这份文档有更多个 `<p>`元素，并且它们没有 title 属性，则 `getAttribute(“title”)`方法就会返回 null 值。

### setAttribute      

getAttribute 方法可以用来获取信息，setAttribute 允许对属性节点的值做出修改。与 getAttribute 一样，setAttribute 也只能用于元素节点：

​                       `object.setAttribute(attribute,value)`

在下面的例子里，第一条语句是得到 id 是 purchase 的元素，第二条语句把这个元素的 title 属性值设置为 a list of goods:

​                       `var shopping = document.getElementById("purchase");`

​                       `shopping.setAttribute("title","a list of goods");`

在"购物清单" 示例文档中，`<p>`元素已经有了一个 title 属性，这个属性的值是 a gentle reminder。 可以用 setAttribute 来改变它的值：

​                       `var paras = document.getElementByTagName("p");`

​                       `for (var i=0; i<paras.length; i++) {`

​                             `var title_text = paras[i].getAttribute("title");`

​                             `if (title_text) {`

​                                  `paras.[i].setAttribute("title","brand new title text");`

​                                  `alert(paras.[i].getAttribute("title"));`

​                             }

​                       `}`

这里有一个非常值得注意的细节是：通过 setAttribute 对文档做出修改后，在通过浏览器的 view source 选项去查看文档的源代码时看到的任将是改变前的属性值，setAttribute 做出的修改不会反映在文档本身的源代码里。这种表里不一的现象源自 DOM 的工作模式：先加载文档的静态内容，再动态刷新，动态刷新不影响文档的静态内容。这正是 DOM 的真正威力：对页面内容进行刷新却不需要在浏览器里刷新页面。