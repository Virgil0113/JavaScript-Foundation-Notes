## JavaScript DOM 编程艺术 Chapter 16  过去的错误

JavaScript 语言和 DOM 构成了一个非常强大的组合，但问题的关键在于能否恰到好处的运用它们所提供的功能。在讨论最佳实践之前，我们先了解一下在编写脚本时出问题的原因。

### 不要怪罪 JavaScript

易学易用的技术就像是一把双刃剑。因为容易学习和掌握它往往会在很短的时间内就被人们广泛的接受，但也往往意味着缺乏高水平的质量控制措施。

HTML 语言就是一个典型的例子。人们只需要花费很短的时间就能顾掌握 HTML 语言的基础知识，并迅速的创建出各式各样的网页，有些人可能连一行 HTML 标记都没有见过就成为了网页设计大军中的一员。因此产生的一个不良后果是绝大多数网页都编写的很糟糕，甚至不做标记合法性检查。