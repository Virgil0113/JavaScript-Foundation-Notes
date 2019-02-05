## JavaScript DOM 编程艺术 Chapter 8 对象

关键词：内建对象、宿主对象

---

对象（object）是一种非常重要的数据类型。对象是自包含的数据集合，包含在对象里的数据可以通过两种形式访问——属性（property）和方法（method）：

- 属性是隶属于某个特定对象的变量
- 方法是只有某个特定对象才能调用的函数

对象就是由一些属性和方法组合在一起而构成的一个数据实体。

在 JavaScript 里，属性和方法都是用“点”语法来访问：

​           `Object.property`

​           `Object.method()`

---

### 内建对象

可以直接拿来就用的对象称为内建对象（native object）。数组就是就是其中的一种，当我们使用 new 关键词去初始化一个数组时，其实是在创建一个 Array 对象的新实例：

​           `var beatles = new Array();`

当需要了解某个数组有多少个元素时，利用 Array 对像的 length 属性来获取这一信息：

​           `beatles.length;`

Array 对象是诸多 JavaScript 内建对象中的一种，其他的例子还包含 Math 对象和 Date 对象，它们分别提供了许多非常有用的方法处理数值和日期值。Math 对象的 round 方法可以把十进制数值舍入为一个与之最接近的整数：

​            `var num = 7.561;`

​            `var num =  Math.round(num);`

​            `alert(num);`

Date 对象可以用来存储和检索与特定日期和时间有关的信息。在创建 Date 对象的新实例时，JavaScript 解释器将自动的使用当前日期和时间对它进行初始化：

​             `var current_date = new Date();`

Date 对象还提供了 getDay()、getHours()、getMonth() 等方法。

​             `var today = current_date.getDay();`

---

### 宿主对象

除了内建对象，还可以在 JavaScript 脚本里使用一些已经预先定义好的其他对象。这些对象不是由 JavaScript 语言本身而是由运行环境提供的。具体到 Web 应用，这个环境就是浏览器。由浏览器提供的预定义对象被称为宿主对象（host object）。宿主对象包括 Form、Image 和 Element 等。

