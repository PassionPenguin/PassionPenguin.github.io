> * 标签：后端、Golang

![](../images/go-function.md-15ee9e1f856447fba1935aa98925c0b9~tplv-k3u1fbpfcp-zoom-1.image)

# Go 的奇妙旅程：Go 的集合｜Go 主题月

![](../images/go-function.md-ee51d3128b444d8f89fdb67552054550~tplv-k3u1fbpfcp-zoom-1.image)

Map 是一种无序的键值对的集合。Map 最重要的一点是通过 key 来快速检索数据，key 类似于索引，指向数据的值。

在别的语言中我们经常会使用到 Map，就比如说 JavaScript（JSON 也一直）我们就经常使用 `{}` 定义一个集合关系：

```javascript
const map = {
    age: -1,
    name: "Unknown",
    region: "Guangzhou, Guangdong Province, China",
    postcode: 510000
}
```

因为 Map 是一种集合，所以我们可以像迭代数组和切片那样迭代它。

不过需要注意的是，Map 是无序的，我们无法决定它的返回顺序，只因 Map 是使用 hash 表来实现的。

## 定义 Map

我们可以使用内建函数 `make` 来定义 Map。当然，我们也可以使用 `map` 关键字来定义 Map:

```go
/* 声明变量，默认 map 是 nil */
var map_variable map[key_data_type]value_data_type

/* 使用 make 函数 */
map_variable := make(map[key_data_type]value_data_type)
```

如果不初始化 `map`，那么就会创建一个 `nil map`（空集，空集合）。`nil map` 不能用来存放键值对。

```go
package main

import "fmt"

func main() {
var provinceCapitalMap map[string]string /* 创建一个集合 */
provinceCapitalMap = make(map[string]string)

    /* 向 map 中插入键值对（key - value），让各个省份对应他们的省会 */
    provinceCapitalMap [ "Guangdong" ] = "Guangzhou"
    provinceCapitalMap [ "Fujian" ] = "Xiamen"
    provinceCapitalMap [ "Beijing" ] = "Beijing"
    provinceCapitalMap [ "Sichuan " ] = "Chengdu"

    /* 使用键输出该键在 map 中的对应值 */
    for province := range provinceCapitalMap {
        fmt.Println(province, "'s captial city is ", countryCapitalMap [country])
    }

    /*查看元素在集合中是否存在 */
    capital, ok := provinceCapitalMap [ "Shaanxi" ] /* 如果确定 ok 为真则表示记录存在，否则表示没有定义该记录 */
    if (ok) {
        fmt.Println("Shaanxi's capital city is ", capital)
    } else {
        fmt.Println("Shaanxi's capital city is not defined.")
    }
}
```