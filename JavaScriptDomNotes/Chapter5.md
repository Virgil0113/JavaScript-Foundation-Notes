## JavaScript DOM 编程艺术 Chapter 5 条件语句

关键词：比较操作符、逻辑操作符

### 比较操作符

JavaScript 提供了许多几乎只能用在条件语句里的操作符，其中包括大于（>）、小于（<）、大于或等于（>=）、小于或等于（<=）之类的比较操作符。

如果相比较两个值是否相等，可以使用“等于”比较操作符。这个操作符由两个等号构成（==）。单个等号是（=）是用于完成赋值操作的。

​           `var my_mood = "happy";`

​           `var your_mood = "sad";`

​           `if (my_mood == your_mood){`

​                `alert("we both feel the same.")}`

JavaScript 还提供了一个用来进行“不等于”比较的操作符，它由一个感叹号和一个等号构成（!=）。

​           `if (my_mood != your mood){`

​               `alert ("we're feeling different moods.");`

​           `}`

相等操作符==并不表示严格相等，要进行严格比较，就要使用另外一种等号（===）。这个全等操作符执行严格的比较。如果相比较严格不相等就要使用 !==。

---

### 逻辑操作符

JavaScript 允许把条件语句里的操作组合在一起。‘"逻辑与"操作符由两个“&”字符构成（&&），“逻辑或”操作符由两个垂直线字符构成（||）。逻辑操作符的操作对象是布尔值。每个操作数返回一个布尔值 true 或者是 false。“逻辑与”操作只有在它的两个操作数都是 true 时才会是 true。“逻辑或”操作符只有当它的两个操作数都是 false 时才会是 false。

​             `if（num >= 5 && num <= 10）{`

​                   `alert("The number is in the right range.");`

​             `}`

​              

​                `if（num > 10 || num <5）{`

​                   `alert("The number is not in the right range.");`

​             `}`

JavaScript 还提供了一个“逻辑非”操作符，它由一个感叹号（!）单独构成。