> * 标签：后端、Golang

![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/15ee9e1f856447fba1935aa98925c0b9~tplv-k3u1fbpfcp-zoom-1.image)

# Go 的奇妙旅程：Go 程序结构和运行｜Go 主题月

![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/ee51d3128b444d8f89fdb67552054550~tplv-k3u1fbpfcp-zoom-1.image)

## Hello Go 的结构是什么

在继续研究 Go 编程语言的程序构建部分之前，让我们先讨论一下 Go 程序的最基本的结构，帮助我们后续的开发。

### Go 程序组成

Go 程序基本上由以下部分组成-

* 包装声明g
* 导入包
* 函数
* 变量
* 语句
* 注释

### Hello Go 代码分析

让我们看一下上述程序的各个部分 —— 在上一篇文章我们配置好了偏好设置以后试着写的代码：

[`day1/hello.go`](https://github.com/PassionPenguin/AwesomeGo/blob/master/day1/hello.go)

```go
package main

import "fmt"

func main() {
    /* Print `Hello, World!` */
    fmt.Println("Hello, World!")
}
```

* 程序包（`main`）定义于我们代码的第一行，声明了该程序位于的包名称。这是强制性不可省略的声明，因为 Go 程序在程序包中运行。主程序包是运行程序的起点，而每个软件包都有与之关联的路径和名称。

* 下一行 `import "fmt"` 是一个预处理程序命令，告诉 Go 编译器导入位于 `fmt` 包中的文件。

* 下一行 `func main()` 声明这是程序执行开始的主函数。

* 下一行 `/*...*/` 会被编译器忽略。我们可以像在其他语言一样在 Go 程序中添加注释。注释也可以使用 `//` 开头，就类似于 Java、JavaScript 或 C++ 那样。

* 下一行的 `fmt.Println()` 调用了 Go 中的一个函数，在控制台中打印了消息 `Hello, World!`。这个函数是从 `fmt` 包中导出被调用的。

* 注意 `Println` 方法的大写字母 `P`。

![golang-programstructure.png](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/56e82c7f485f4e20b462a5922ffc9501~tplv-k3u1fbpfcp-zoom-1.image)

> 注意：在 Go 语言中，**如果一个函数或变量或是别的什么东西的名称，是以大写字母开头，Go 编译器则会将其导出**。导入这个包意味着我们可以在当前包内访问到导入的包的函数、变量以及常量。

## 执行 Go 程序

### 我们该如何使用终端执行 Go 代码？

### `go run`

1. 编辑一个文件，输入上述代码。

2. 将文件另存为 `hello.go`

3. 打开命令提示符。

4. 转到保存文件的目录。

5. 键入 `go run hello.go`，然后按 Enter 键运行代码。

6. 如果我们的代码中没有错误，那么我们能看到 `Hello, World!` 打印了在终端上。

```shell
$ go run hello.go
Hello, World!
```

### `go install`

另外一种运行 Go 程序的方法是执行 `go install` 命令。

1. 打开命令提示符。

2. 转到保存文件的目录。

3. 键入 `go install day2/hello.go`，然后按 Enter 键运行代码。

4. 如果我们的代码中没有错误，那么程序就会被安装到 `~/go/bin`，二进制文件的名称将是 `hello`。

不过当你尝试安装程序时可能会遇到以下错误：

```shell
$ go install day2/hello.go
go install: no install location for .go files listed on command line (GOBIN not set)
```

上述错误的实际含义是，`go install` 无法找到安装编译后的二进制文件的位置。因此，让我们先给它添加环境变量。此位置由 `GOBIN` 环境变量控制。

```shell
$ export GOBIN=~/go/bin/  
```

上面的命令指定 `go install` 的编译的二进制文件复制到 `~/go/bin/`。这会是一般存放 Go 二进制文件的常位置，但我们也可以随时将其更改为所需的任何位置。现在，尝试再次执行 `go install`，然后运行二进制文件：

```shell
$ go install day2/hello.go
$ ~/go/bin/hello
Hello, World!
```

上面的命令将执行 `hello` 二进制文件，输出 `Hello World`。

### `go build`

运行程序的第三个选项是使用 `go build`，也是 GoLand 的默认的执行方法。除了不将编译的二进制文件安装（复制）到指定路径之外，它与之 `go build` 非常相似。他会直接在当前目录下（终端所处的目录下）创建二进制文件。在终端中键入以下命令：

```shell
$ go build day2/hello.go
$ ./hello
Hello, World!
```

### Go Play

运行程序的最后一种方法是使用 Go Playground。尽管此方法有一定的局限性（网络限制啊什么都），但是使用浏览器执行代码太方便了，还能够贡献代码，一起编辑，不香吗？

### 应该怎么选？

* install：用于全局使用的应用程序
* build：用于项目使用的应用程序
* run、play：用于简单代码的应用程序

### 注意环境变量

我们需要在环境变量中添加 Go 编译器的目录，这样在终端内执行命令系统才能寻址到 Go 编译器。

不过它不支持 Preprocessors，因此我们也没办法整他……

> 注意：确保 Go 编译器在我们终端的路径中，并且在包含源文件 `hello.go` 的目录中运行上述代码。
