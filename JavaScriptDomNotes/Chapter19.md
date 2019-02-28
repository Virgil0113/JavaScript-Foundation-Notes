JavaScript DOM 编程艺术 Chapter 19  分离 JavaScript

此前章节所见到的 JavaScript 代码都已经与 HTML 文档分离。负责实际完成各项任务的 JavaScript 函数都已经存入外部文件，问题出现在内嵌的事件处理函数中。

如果我们使用一个“挂钩”，就像 CSS 机制中的 class 或 id 属性那样，把 JavaScript 代码调用行为与 HTML 文档的结构和内容分离开，网页就会健壮的多。JavaScript 语言不要求事件必须在 HTML 文档里处理，可以在 JavaScript 文件里把一个事件添加到 HTML 文档中的某个元素上：

`element.event = action...`

