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

#### id 属性

id 属性的用途是给网页里的某个元素加上一个独一无二的标识符，例如：

​                   `<ul id="pruchase">`

在样式表里，可以为 id 属性值的元素定义一种独享的样式：

​                   `#purchase {`

​                        `border: 1px solid white;`

​                   `}`

尽管 id 本身只能用一次，样式表还是可以利用 id 属性为包含在该特定元素里的其他元素定义样式，例如：

​                    `#purchase li {`

​                         `font-weight: bold;`

​                    `}`

---

### 获取元素

有三种 DOM 方法可获取元素节点，分别是通过元素 ID、通过标签名字和通过类名字来获取。

#### getElementById

DOM 提供了一个名为 getElementById 的方法，这个方法将返回一个与给定的 id 属性值的元素节点对应的对象。它是 document 对象特有的函数。在脚本代码里函数后面必须跟有一对圆括号，这对圆括号包含着函数的参数。getElementById 方法只有一个参数：想要获得的那个元素的 id 属性值。

​                     `document.getElementById(id)`

这个调用将返回一个对象，这个对象对应着 document 对象里的一个独一无二的元素。

#### getElementByTagName

getElementByTagName 方法返回一个对象数组，每个对象分别对应着文档里有着给定标签的一个元素。这个方法也是只有一个参数的函数，它的参数是标签名字：

​                      `element.getElementByTagName(tag)`

这个调用将返回一个对象数组，每个对象分别对应着 document 对象中的一个列表项元素。与其他任何数组一样，可以利用 length 属性查出这个数组里的元素个数。

​                      `element.getElementByTagName(tag).length`

getElementByTagName允许把一个通配符作为参数，这意味着文档里的每个元素都将在这个函数所返回的数组里占有一席之地。通配符（星号字符“*”）必须放在引号里，这是为了让通配符与乘法操作符有所区别。可以使用通配符获得某份文档所有的元素节点：

​                       `alert(document.getElementByTagName("*").length);`

还可以把 getElmentById 与 getElementByTagName 结合起来使用。例如，想要知道 id 属性值是 purchase 的元素包含着多少个列表项：

​                       `var shopping = document.getElementById("purchase");`

​                       `var items = shopping.getElementByTagName("*");`

