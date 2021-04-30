> * 标签：后端、Golang

![](../images/go-function.md-15ee9e1f856447fba1935aa98925c0b9~tplv-k3u1fbpfcp-zoom-1.image)

# Go 的奇妙旅程：Go 的函数｜Go 主题月

![](../images/go-function.md-ee51d3128b444d8f89fdb67552054550~tplv-k3u1fbpfcp-zoom-1.image)

函数是基本的代码块，用于执行一个任务，而一个 Go 程序至少就要有一个 `main()` 函数作为执行的起点。我们可以通过函数来划分不同功能，逻辑上每个函数执行的是指定的任务。

函数声明告诉了编译器函数的名称，返回类型，和参数。

Go 语言标准库提供了多种可动用的内置的函数。例如，`len()` 函数可以接受不同类型参数并返回该类型的长度。如果我们传入的是字符串则返回字符串的长度，如果传入的是数组，则返回数组中包含的元素个数。

又比如说，我们需要使用 `fmt.Itoa()` 函数将 `int` 类型值转化为 `string` 类型值。

## 函数定义

Go 语言函数定义格式如下：

```go
func function_name( [parameter_list] ) [return_types] {
    /* 函数体 */ 
}
```

* `func`：函数声明由 `func` 引导
* `function_name`：函数名称。函数名和参数列表一起构成了函数签名。
* `parameter_list`：参数列表。参数就像一个占位符，当函数被调用时，你可以将值传递给参数，这个值被称为实际参数。参数列表指定的是参数类型、顺序、及参数个数。参数是可选的，也就是说函数也可以不包含参数。这里的参数可以是引用也可以是传值。
* `return_types`：返回类型。函数返回一列值。`return_types` 是该列值的数据类型。有些功能不需要返回值，这种情况下 `return_types` 不是必须的。
* 函数体：函数定义的代码集合。

## 栗子

以下实例为 `max()` 函数的代码，该函数传入两个 `int` 参数 `a` 和 `b`，返回这两个参数的最大值：

[`day11/max.go`](https://github.com/PassionPenguin/AwesomeGo/blob/master/day11/max.go)

```go
/* 函数返回两个数的最大值 */
func max(a, b int) int {
    if a < b {
        return b
    }
    return a
}
```

## 函数调用

当创建函数时，你定义了函数需要做什么。但是我们需要怎么执行这个函数呢？我们需要调用该函数来执行指定任务。比如说：

[`day11/using-max.go`](https://github.com/PassionPenguin/AwesomeGo/blob/master/day11/using-max.go)

```go
package main

import "fmt"

func main(){
	fmt.Println(max(1, 2))
}
```

以上实例在 `main()` 函数中调用了同一个包 `main` 下的 `max()` 函数输出最大值。

## 多个返回值

Go 函数可以返回多个值，比如说

```go
package main

import "fmt"

func sortDes(a, b int) (int, int) {
	if a < b {
		return b, a
	}
	return a, b
}

func main() {
	fmt.Println(sortDes(1, 2))
}
```