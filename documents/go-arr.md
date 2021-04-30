> * 标签：后端、Golang

![](../images/go-arr.md-15ee9e1f856447fba1935aa98925c0b9~tplv-k3u1fbpfcp-zoom-1.image)

# Go 的奇妙旅程：Go 的数组｜Go 主题月

![](../images/go-arr.md-ee51d3128b444d8f89fdb67552054550~tplv-k3u1fbpfcp-zoom-1.image)

## Go 语言数组

Go 语言提供了数组类型的数据结构，数组是类似于列表的高阶对象。。数组是具有相同唯一类型的一组已编号且长度固定的数据项序列，这种类型可以是任意的原始类型例如整型、字符串或者自定义类型。

相比声明 `number0`、`number1`、……、`number99` 这样的变量，使用数组形式 `numbers[0]`、`numbers[1]`、……、`numbers[99]` 更加方便且易于扩展。

我们可以通过索引（即元素相对于数组来说位置）来访问（或者修改）数组元素（索引从 `0` 开始）。

## 声明数组

Go 语言数组声明需要指定元素类型及元素个数，语法格式如下：

```go
var variable_name [size] variable_type
```

* `variable_name` 变量名
* `size` 数组长度
* `variable_type` 元素类型

以上为一维数组的定义方式。例如以下定义了名为 `descriptor` 长度为 `4` 类型为 `string` 的数组：

```go
var descriptor [4] string
```

## 数组初始化

以下的代码就展示了数组的初始化：

```go
var descriptor = [4]string{"cool", "handsome", "great", "cute"}
```

当然其实我们也可以快速初始化数组：

```go
descriptor := [4]string{"cool", "handsome", "great", "cute"}
```

如果数组长度不确定该咋办？

快快使用 `...` 代替数组的长度。

把这活交给编译器！让它就会根据元素个数自行推断数组的长度：

```go
var descriptor = [...]string{"cool", "handsome", "great", "cute"}
```

```go
descriptor := [...]string{"cool", "handsome", "great", "cute"}
```

如果设置了数组的长度，我们还可以通过指定下标来初始化元素：

```go
//  将索引为 1 和 3 的元素初始化
descriptor := [...]string{1: "cool", 3: "handsome"}
```

不过需要注意初始化数组中 `{}` 中的元素个数不能大于 `[]` 中的数字。

如果忽略 `[]` 中的数字不设置数组大小，Go 语言会根据元素的个数来设置数组的大小：

## 访问数组元素

数组元素可以通过索引（位置）来读取。格式为数组名后加中括号，中括号中为索引的值。例如：

```go
var descriptionForPenguin = descriptor[2]
```

以上代码就读取了数组 `descriptor` 第 3 个元素的值。