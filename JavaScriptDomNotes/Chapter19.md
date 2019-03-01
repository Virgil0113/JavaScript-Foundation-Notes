JavaScript DOM 编程艺术 Chapter 19  分离 JavaScript

此前章节所见到的 JavaScript 代码都已经与 HTML 文档分离。负责实际完成各项任务的 JavaScript 函数都已经存入外部文件，问题出现在内嵌的事件处理函数中。

如果我们使用一个“挂钩”，就像 CSS 机制中的 class 或 id 属性那样，把 JavaScript 代码调用行为与 HTML 文档的结构和内容分离开，网页就会健壮的多。JavaScript 语言不要求事件必须在 HTML 文档里处理，可以在 JavaScript 文件里把一个事件添加到 HTML 文档中的某个元素上：

`element.event = action...`

如果想把一个事件添加到某个带有特定 id 属性的元素上，用 getElementById 就可以解决问题：

`getElementById(id).event = action`

如果事情涉及多个元素，我们就可以用 getElementByTagName 和 getAttribute 把事件添加到有着特定属性的一组元素上。具体步骤如下：

1. 把文档里的所有链接全放入一个数组里
2. 遍历数组
3. 如果某个链接的 class 属性等于 popup，就表示这个链接在被点击时应该调用 popUp() 函数

下面是实现步骤