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

​                             `alert(paras[i].getAttribute("title"));`

​                      `}`



​      