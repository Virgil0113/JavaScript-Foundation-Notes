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