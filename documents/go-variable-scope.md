> * 标签：后端、Golang

![](../images/go-variable-scope.md-15ee9e1f856447fba1935aa98925c0b9~tplv-k3u1fbpfcp-zoom-1.image)

# Go 的奇妙旅程：Go 的变量的作用域｜Go 主题月

![](../images/go-variable-scope.md-ee51d3128b444d8f89fdb67552054550~tplv-k3u1fbpfcp-zoom-1.image)

## 变量的作用域

变量在程序中有一定的作用范围。

如果一个变量声明在函数体的外部，这样的变量被认为是全局变量，全局变量在整个包内，也就是当前的包内都可以被调用得到。而如果变量定义在函数体内部，则被称之为局部变量。而函数定义里的变量就是形式参数。

作用域其实就是已声明标识符所表示的常量、类型、变量、函数或包在源代码中的作用范围。

Go 语言中变量可以在三个地方声明：

* 函数内定义的变量称为局部变量
* 函数外定义的变量称为全局变量
* 函数定义中的变量称为形式参数

接下来让我们具体了解局部变量、全局变量和形式参数。

## 局部变量

在函数体内声明的变量称之为局部变量，而它们的作用域只在函数体内，参数和返回值变量也是局部变量。

## 全局变量

在函数体外声明的变量称之为全局变量，全局变量可以在整个包甚至外部包（被导出后）使用。

Go 语言程序中全局变量与局部变量名称可以相同，但是函数内的局部变量会被优先考虑。

## 形式参数

形式参数会作为函数的局部变量来使用。

## 栗子

[`day13/var-scope.go`](https://github.com/PassionPenguin/AwesomeGo/blob/master/day13/var-scope.go)

```go
package main

import "fmt"

var str = "企鹅真丑"

func main() {
   var str = "企鹅真帅"

   fmt.Printf ("我还是觉得%d\n", str)
}
```