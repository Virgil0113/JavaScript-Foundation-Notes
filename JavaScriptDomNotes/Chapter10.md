## JavaScript DOM 编程艺术 Chapter 10 节点

关键词：元素节点、文本节点、属性节点、CSS、获取元素

---

文档是由节点构成的集合，只不过此时的节点是文档树上的树枝和树叶而已。在 DOM 里有许多不同类型的节点其中最主要的三种是元素节点、文本节点和属性节点。

### 元素节点

DOM 的原子是元素节点。在描述上一章的[“购物清单”](https://github.com/Virgil0113/JavaScript-Foundation-Notes/blob/master/JavaScriptDomCode/Demo1/demo1.html)文档中，我们使用了 `<body>、<p>、<ul>`之类的元素。如果把 Web 上的文档比做一座大厦，元素就是建造这座大厦的砖块，这些元素在文档中的布局形成文档的结构。

标签的名字就是元素的名字。文本段落元素的名字是“p”，无序清单元素的名字是“ul”，列表项元素的名字是“li”。

元素可以包含其他的元素。在我们的“购物清单”文档里，所有的列表项元素都包含在一个无序清单元素的内部。

---

### 文本节点

在“购物清单”例子里，`<p>`元素包含着文本“Don't forget to buy this stuff.”。它是一个文本节点（text node）。

在 XHTML 文档里，文本节点总是被包含在元素节点的内部。但并非所有的元素节点都包含有文本节点。在“购物清单”文档里，`<ul>`元素没有直接包含任何文本节点，它包含着其他的元素节点（一些 `<li>`元素），后者包含着文本节点。

---

### 属性节点

属性节点用来对元素做出更具体的描述。例如，几乎所有的元素都有一个 title 属性，我们利用这个属性对包含在元素里的东西做出准确的描述：

​               `<p title="a gentle reminder">Don't forget to buy this stuff.</p>`

在 DOM 中，title="a gentle reminder"是一个属性节点（attribute node）。因为属性节点总是被放在起始标签里，所以属性节点总是被包含在元素节点中。并非所有的元素都包含属性，但是所有的属性都被包含在元素中。

---

### CSS 

DOM 并不是与网络结构打交道的唯一技术，我们还可以通过 CSS (层叠样式) 告诉浏览器应该如何显示一份文档的内容。

类似 JavaScript 脚本，对样式的声明既可以嵌在文档的 `<head>`部分(`<style>`标签之间)，也可以放在另外一个样式表文件里。 CSS 声明元素样式的语法与 JavaScript 函数的定义语法很相似：

​               `selector{`

​                    `property: value;`

​               `}`

在样式声明里我们可以定义浏览器在显示元素时使用的颜色、字体和字号：

​                `p {`

​                     `color: yellow;`

​                     `font-family: "arial", sans-serif;`

​                     `font-size: 1.2em;`

​                `}`

继承是 CSS 技术中的一项强大的功能。类似于 DOM，CSS 也把文档的内容视为一棵节点数。节点树上的各个元素将继承其父元素的样式属性。

在某这些场合，当把样式应用于一份文档时，我们其实只想让那些样式作用于某个特定的元素。为了把某些一个或几个元素与其他元素区别开来，需要是使用 class 属性或 id 属性。

#### Class 属性

可以在所有的元素上任意应用 class 属性：

​                  `<p class="special">This paragraph has the special class</p>`

​                  `<h2 class="special">So does this headline</h2>`

 在样式表里，可以为 class 属性值相同的所有元素定义同一中样式：

​                  `.special {`

​                     `font-style: italic;`

​                  `}`

