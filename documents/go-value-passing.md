> * 标签：后端、Golang

![](../images/go-value-passing.md-15ee9e1f856447fba1935aa98925c0b9~tplv-k3u1fbpfcp-zoom-1.image)

# Go 的奇妙旅程：Go 的值传递｜Go 主题月

![](../images/go-value-passing.md-ee51d3128b444d8f89fdb67552054550~tplv-k3u1fbpfcp-zoom-1.image)

## 函数参数

函数如果使用参数，那么传递的变量可称为函数的形参 —— 形参就像定义在函数体内的局部变量。

在调用函数的时候我们有两种传递参数的方法：

| 传递类型 | 描述 |
| --- | --- |
|值传递 | 值传递是指在调用函数时将实际参数复制一份传递到函数中，这样在函数中如果对参数进行修改，将不会影响到实际参数。|
| 引用传递 | 引用传递是指在调用函数时将实际参数的地址传递到函数中，那么在函数中对参数所进行的修改，将影响到实际参数。 |

默认情况下，Go 语言使用的是值传递，即在调用过程中不会影响到实际参数。

### 值传递

传递是指在调用函数时将实际参数复制一份传递到函数中，这样在函数中如果对参数进行修改，将不会影响到实际参数。

默认情况下，Go 语言使用的是值传递，即在调用过程中不会影响到实际参数。

### 引用传递

引用传递是指在调用函数时将实际参数的地址传递到函数中，那么在函数中对参数所进行的修改，将影响到实际参数。也就是说引用会传递指针参数传递到函数内。

[`day12/swap.go`](https://github.com/PassionPenguin/AwesomeGo/blob/master/day12/swap.go)

```go
func swap(x, y string) {
	x, y = y, x
}

func swapRef(x, y *string) {
	*x, *y = *y, *x
}
```

[`day12/swap-value-passing.go`](https://github.com/PassionPenguin/AwesomeGo/blob/master/day12/swap-value-passing.go)

```go
package main

import "fmt"

func main() {
	/* 定义局部变量 */
	var a = "cute"
	var b = "ugly"

	fmt.Printf("Penguin is %s?", a)
	fmt.Printf("or Penguin is %s?", b)

	swap(a, b)

	fmt.Printf("Not sure if Penguin is %s?", a)
	fmt.Printf("Not sure if Penguin is %s either.", b)
	
	swapRef(&a, &b)
	
	fmt.Printf("Penguin is %s?", a)
	fmt.Printf("No Penguin is %s!", b)
}
```