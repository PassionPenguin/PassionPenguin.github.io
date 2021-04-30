> * 标签：后端、Golang

![](../images/go-arr.md-15ee9e1f856447fba1935aa98925c0b9~tplv-k3u1fbpfcp-zoom-1.image)

# Go 的奇妙旅程：Go 向函数中传参数组｜Go 主题月

![](../images/go-arr.md-ee51d3128b444d8f89fdb67552054550~tplv-k3u1fbpfcp-zoom-1.image)

函数是应用程序开发中极度常见的组成部分，而不少的我们往往需要向函数传递数组作为参数，以对数据进行处理。常见的应用领域为：

1. 排序
2. 展示列表
3. 数据分析

如果要将一维数组作为函数的参数传递，则我们必须以下面两种方式之一声明函数形式参数（两种声明方法都会产生相似的结果）。我们也可以类似的方式将多维数组作为形式参数传递。

## 方法一

形参为固定尺寸的数组，如下：

```go
void myFunction(param [10]int) {
    // ……
}
```

## 方法二

形参为非固定尺寸的的数组，如下：

```go
void myFunction(param []int) {
    // ……
}
```

## 例子

抛出一个例子叭：求一组整数数组的各项平均值。

```go
func getAverage(arr []int, int size) float32 {
    var i int
    var avg, sum float32
    
    for i = 0; i < size; ++i {
        sum += arr[i]
    }
    
    avg = sum / size
    return avg;
}
```