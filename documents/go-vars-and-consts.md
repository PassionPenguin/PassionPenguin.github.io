> * 标签：后端、Golang

![](../images/go-vars-and-consts.md-15ee9e1f856447fba1935aa98925c0b9~tplv-k3u1fbpfcp-zoom-1.image)

# Go 的奇妙旅程：Go 的变量与常量｜Go 主题月

![](../images/go-vars-and-consts.md-ee51d3128b444d8f89fdb67552054550~tplv-k3u1fbpfcp-zoom-1.image)

## Go 变量

变量（Variable）来源于数学，是计算机语言中能储存计算结果或能表示值抽象概念。我们可以通过使用变量名访问一个变量，而之前我们提及过，变量的名称可以由字母，数字和下划线字符组成。它必须以字母或下划线开头。

变量其实就是赋予程序可以操作的存储区的名称。Go 中的每个变量都有一个特定的类型，该类型确定变量的内存大小和布局，可以存储在该内存中的值的范围以及可以应用于该变量的一组操作。

### 变量的定义

我们一般用 `var` 关键字声明变量 ：

```go
var variable_list optional_data_type;
```

代码中的 `optional_data_type` 指代有效的 Go 数据类型（例如 `boolean`、`byte`、`int`、`float32`、`complex64` 等），并且 `variable_list` 可以包含一个或多个用逗号分隔的标识符名称。例如：

```go
var  i, j, k int;
var  c, ch byte;
var  f, salary float32;
d =  42;
```

> ### 注意
> 不知道你有木有发现，反正我发现了，这个定义方式与不少语言不同～
>
> Go 中的变量定义中，类型与变量名是相反的！

语句 `var i，j，k;` 会声明并定义变量 `i`、`j` 和 `k`，告诉编译器创建类型是为 `int` 的 `i`、`j` 和 `k` 变量。

变量可以在其声明中初始化（分配初始值），而变量的类型由编译器根据传递给它的值自动判断。

### 变量的赋值与初始化

变量的初始化通常由一个等号和一个常量表达式组成，如下所示：

```go
variable_name = value;
```

譬如说：

```go
penguin = 0
Penguin = 1
// 定义两个变量以及初始值
// 此处的两个变量都是 `int`
```

### 简短定义

什么？你竟然说这个方法不简单？Go 还为我们提供了更简单的方法！

```go
penguin := "Cute"
```

> ### 注意
> 在相同的作用域中我们不可以再次对于相同名称的变量使用初始化声明 —— `no new variables on left side of :=`
>
> 不过我们可以使用 `penguin = "Great"` 这种给变量赋予一个新的值的方法。

如果你在定义变量 a 之前使用它，则会得到编译错误 undefined: a。

如果你声明了一个局部变量却没有在相同的代码块中使用它，同样会得到编译错误，例如下面这个例子当中的变量 a：

我们先说个 `nil` 叭～

### `nil`？

啊这……

![](../images/go-vars-and-consts.md-9fe174dda05c4ed18a0d8ef733380375~tplv-k3u1fbpfcp-zoom-1.image)

相信程序员们对下面一段代码是特别特别特别熟悉的了：

```go
if err != nil {
    // do something……
}
```

先让我们来看一下字典的定义叭～

![](../images/go-vars-and-consts.md-edfd4bdc98f24a96a9807771d4016e1e~tplv-k3u1fbpfcp-zoom-1.image)

### 变量的初始化

在 Go 语言中，如果你声明了一个变量但是没有对它进行赋值操作，那么这个变量就会有一个类型的默认零值。这是每种类型对应的零值：

| 类型 | 默认值 |
| --- | --- |
| `bool` | `false` |
| `numbers` | `0` |                                
| `string` | `""` |
| `pointers` | `nil` |
| `slices` | `nil` |
| `maps` | `nil` |
| `channels` | `nil` |
| `functions` | `nil` |
| `interfaces` | `nil` |

诶我觉得也没啥好讲了～

## Go 常量

常量是一个简单值的标识符，在程序运行时，不会被修改的量。常量中的数据类型只可以是 `bool`、`number`（`int`、`float`）和 `string` 型。常量的定义方法是：

```go
const identifier [type] = value
```

不过其实你可以省略类型说明符 `[type]`，因为编译器可以根据变量的值来推断其类型。

另外，多个相同类型的声明可以简写为：

```go
const c_name1, c_name2 = value1, value2
```

### iota

`iota`，特殊常量，可以认为是一个可以被编译器修改的常量。在 `const` 关键字下，`iota` 的出现会被重置为 `0`（`const` 代码块内部的第一行之前），并且 `const` 中每新增一行常量声明将使 `iota` 计数一次（`iota` 可理解为 `const` 语句块中的行索引）。

iota 可以被用作枚举值：

```go
const (
    a = iota
    b = iota
    c = iota
)
```

第一个 `iota` 等于 `0`，然后每当 `iota` 在新的一行被使用时，它的值都会自动加 `1`。它可以简写为如下形式：

```go
const (
    a = iota
    b
    c
)
```