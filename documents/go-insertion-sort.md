> * 标签：后端、Golang

![](../images/go-arr.md-15ee9e1f856447fba1935aa98925c0b9~tplv-k3u1fbpfcp-zoom-1.image)

# Go 的奇妙旅程：Go 的插入排序｜Go 主题月

![](../images/go-arr.md-ee51d3128b444d8f89fdb67552054550~tplv-k3u1fbpfcp-zoom-1.image)

插入排序，一般也被称为直接插入排序。对于少量元素的排序，它是一个非常游泳的算法。插入排序是一种最简单的排序方法，基本思想是将一个记录插入到已经排好序的有序表中，从而一个新的、记录数增 1 的有序表。在其实现过程使用双层循环，外层循环对除了第一个元素之外的所有元素，内层循环对当前元素前面有序表进行待插入位置查找，并进行移动。

**基本思想：每一步将一个待排序的数据插入到前面已经排好序的有序序列中，直到将所有元素插入至正确位置为止。**

插入排序的平均时间复杂度是 `O(n^2)`，空间复杂度为常数阶 `O(1)`，具体时间复杂度和数组的有序性也是有关联的。

插入排序中，当待排序数组是有序时，是最优的情况，只需当前数跟前一个数比较一下就可以了，这时一共需要比较 `N-1` 次，时间复杂度为 `O(N)`。最坏的情况是待排序数组是逆序的，此时需要比较次数最多，最坏的情况是 `O(n^2)`。

插入排序的伪代码为：

```fake
INSERTION-SORT(A)
for j = 2 to A.length
    key = A[j]
    // Insert A[j] into the sorted sequence A[1, j - 1]
    i = j - 1
    while i > 0 and A[i] > key
        A[i + 1] = A[i]
        i = i - 1
    A[i + 1] = key
```

转换为 Go 代码，有：

```go
package main

import "fmt"

func insertionSort(arr []int) []int {
	for j := 0; j < len(arr); j++ {
		key := arr[j]
		i := j - 1
		for i >= 0 && arr[i] > key {
			arr[i+1] = arr[i]
			i = i - 1
		}
		arr[i+1] = key
	}
	return arr
}

func main() {
	fmt.Println(insertionSort([]int{5, 2, 4, 6, 1, 3}))
}
```

当然也可以写一段自动生成数据测试的代码，经检验，10w 级别数据 2.6s，100w 级数据 s：

```go
func main() {
	var arr []int
	for i := 0; i < 1000000; i++ {
		arr = append(arr, rand.Intn(1000000))
	}
	s := time.Now()
	insertionSort(arr)
	fmt.Println(time.Now().Sub(s))
}
```