## JavaScript DOM 编程艺术 Chapter 7 函数

关键词：函数、变量

---

### 函数

如果需要多次使用同一段代码，就可以把它们封装成一个函数。函数就是一组允许在代码里随时调用的语句，每个函数实际上是一个短小的脚本。每当需要反复做一件事时，都可以利用函数来避免重复键入大量的内容。函数的真正威力体现在可以把不同的数据传递给它们，而它们将使用这些数据去完成预定的操作。传递给函数的数据被称为参数（argument）。

定义一个函数的语法：

​                    `function name（arguments）{`

​                        statements;

​                   `}`               

JavaScript 提供了许多内建函数，在[前一章](JavaScriptDomNotes/Chapter6.md)出现过的 alert 就是一例。这个函数需要我们提供一个参数，它将弹出一个对话框来显示这个参数的值。在定义函数时，可以为它声明多个参数，只要用逗号把它们分隔开来就行。

下面的例子是一个需要传递两个参数的函数。如果把两个值传递给这个函数，函数将对它们进行乘法运算：

​                   `function multiply(num1,num2) {`

​                         `var total = num1 * num2;`

​                         `alert(total);`

​                  `}`                 

我们也可以创建一个函数并让它返回一个数值、一个字符串、一个数组或一个布尔值。这需要用到 return 语句：

​                   `function multiply(num1,num2) {`

​                         `var total = num1 * num2;`

​                         `return total;`

​                  `}`                 

函数真正的价值体现在，可以把它当作一种数据类型来使用，这意味着可以把一个函数的调用结果赋值给一个变量：

​                   `function convertToCelsius(temp) {`

​                           `var result = temp - 32;`

​                           `result = result / 1.8;`

​                          `​return result;` 

​                   `}`

​                    `var temp_fahrenheit = 95;`

​                    `var temp_celsius = convertToCelsius(temp_fahrenheit);`

​                    `alert(temp_celsius);`

在这个例子里，变量 temp_celsius 的值将是35，这个数值由 convertToCelsius 函数返回。

---

### 变量

在第一次对某个变量赋值时应该用 var 对其做出声明。变量可以是全局的，也可以是局部的。在谈论全局变量和局部变量之间的区别时，我们其实是在讨论变量的作用域（scope）。

**全局变量**可以在脚本中任何位置被引用。一旦在脚本里声明了一个全局变量，就可以从这个脚本的任何位置包括函数内部引用它。全局变量的作用域是整个脚本。

**局部变量**只存在于声明它的那个函数的内部，在那个函数的外部是无法引用的。

如果在某个函数中使用了 var, 那个变量就将被视为一个局部变量，它值存在于这个函数的上下文中；反之如果没有使用 var， 那个变量就将被视为全局变量。