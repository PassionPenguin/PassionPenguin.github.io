> * 标签：后端、Golang

![](../images/go-dimensional-arr.md-15ee9e1f856447fba1935aa98925c0b9~tplv-k3u1fbpfcp-zoom-1.image)

# Go 的奇妙旅程：Go 的多维数组｜Go 主题月

![](../images/go-dimensional-arr.md-ee51d3128b444d8f89fdb67552054550~tplv-k3u1fbpfcp-zoom-1.image)

多维数组的维数大于一。

如果你有过用其它语言的编程经历，那么想必会熟悉数组的概念。有了数组，我们就可以用相同名字引用一系列变量，并用数字（索引）来识别、读取或修改它们。在许多场合，使用数组可以缩短和简化程序，因为我们可以利用索引值设计一个循环，高效地处理多种情况。

多维数组，有时需要追踪记录数组中的相关信息。例如，为了追踪记录计算机屏幕上的每一个像素，需要引用它的 X、Y 坐标。这时应该用多维数组存储值。

Go 语言支持多维数组，以下为常用的多维数组声明方式：

```go
var variable_name [一维尺寸][二维尺寸]...[N 维尺寸] variable_type
```

比如说下面的示例就声明了三维的整型数组：

```go
var arr [5][10][4] int
```

## 二维数组

二维数组是最简单的多维数组，二维数组本质上是由两组一维数组组成的。二维数组定义方式如下：

```go
var variable_name [一维尺寸][二维尺寸] variable_type
```

二维数组中的元素可通过 `a[x][y]` 来访问，比如说要访问 `a` 的第 2 行第 3 列元素，那就是 `a[2][3]`。

### 初始化二维数组

多维数组可通过大括号来初始值。以下实例为一个 3 行 2 列的二维数组：

```go
descriptor := [3][2] string{  
    {"penguin", "cool"},
    {"hoarfroster", "handsome"},
    {"passionpenguin", "unknown"},
}
```

### 访问二维数组

二维数组通过指定坐标来访问。如数组中的行索引与列索引。要访问上面的第 3 行第 1 个元素，我们需要使用 `descriptor[2][0]`

当然我们也可以使用循环嵌套来输出二维数组中的每一个元素：

[`day14/penguin-descriptor.go`](https://github.com/PassionPenguin/AwesomeGo/blob/master/day14/penguin-descriptor.go)

```go
package main

func main() {
	descriptor := [3][2]string{
		{"penguin", "cool"},
		{"hoarfroster", "handsome"},
		{"passionpenguin", "unknown"},
	}
	for i := 0; i < len(descriptor); i++ {
		for j := 0; j < len(descriptor[i]); j++ {
			println(descriptor[i][j])
		}
	}
}
```