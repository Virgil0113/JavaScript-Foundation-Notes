## JavaScript DOM 编程艺术 Chapter 3 制定标准

在浏览器制造商以 DOM 为武器展开营销大战的同时，W3C （万维网联盟）不事声张的结合了各自的有点推出了一个标准化的 DOM. 令人欣慰的是 Netscape、微软和其他一些浏览器制造商们还能抛开彼此的敌意与 W3C 共同制定新的标准。回到[以上的例子](Chapter2.md)，使用新的标准化 DOM 时需要用都的语法是：

​           `document.getElementById('myelement')`

W3C 所推出的标准化 DOM 可以让**任何一种**程序设计语言对使用**任何一种**标记语言编写出来的**任何一份**文档进行操控。W3C 对 DOM 的定义是：“一个与系统平台和编程语言无关的接口，程序和脚本可以通过这个接口动态的访问和修改文档的内容、样式和结构。” W3C 推出的标准化 DOM，在独立性和适用范围等诸多方面都远远超过了给自为战的浏览器制造商们推出的各种专有 DOM。今天，包括 Firefox、Chrome、Opera 和 IE，以及一些基于 Webkit 的其他浏览器都对 DOM 有着良好的保持。