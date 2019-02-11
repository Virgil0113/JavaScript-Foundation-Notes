## JavaScript DOM 编程艺术 Chapter 13 JavaScript

为了把“占位符”图片替换为想要查看的图片，需要改变它的 src 属性。setAttribute 是完成这项任务的最佳选择。未完成这项任务我编写了一个函数，这个函数只有一个参数即一个图片链接。它通过改变“占位符”图片的 src 属性将其替换为参数图片。这个函数被命名为 showPic，参数为 whichpic。whichpic 代表着一个元素节点，那是一个指向某个图片的 `<a>`元素。我们需要分解出图片的路径，就可以通过 whichpic 元素上调用 getAttribute 得到，只要把 “href” 作为参数传递给 getAttribute 就可以了。

下面是 showPic 函数完整的代码清单：

​                                      `function showPic(whichpic) {`

​                                            `var source = whichpic.getAttribute("href");`

​                                            `var placeholder = document.getElementById("placeholder");`

​                                            `placeholder.setAttribute("src",source);`

​                                      }

接下来的任务就是把这个 JavaScript 函数与标记文档结合起来。

