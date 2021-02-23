> * 作者：[霜羽 Hoarfroster](https://github.com/PassionPenguin)
> * 标签：前端、后端

# JavaScript 中的循环

![头图](../images/loops-in-javascript-banner.png)

先前翻译了一篇文章，[JavaScript 中哪一种循环最快呢？](https://juejin.cn/post/6930973929452339213)，原作在比较上稍有偏颇，比较的内容似乎也不够全面，也因此想要作此文与大家分享一下。 ψ(｀∇´)ψ

不知道大家的想法是什么，但是看到结果，还是有些乍舌的 —— 其实与评论区和译文中的结果有一些出入。

如果直接想要康康我们能够得出的结论的话，那么就请坐飞起飞向文末嗷，芜湖起飞 ✈️～

首先我们先可以参考 [Mongkii](https://juejin.cn/user/4265760847576808) 老哥的建议，将数组全部赋值为 `0`，以及定义一个 `length` 变量供纯循环使用：

```javascript
const arr = new Array(Math.pow(10,7)).fill(0);
const length = Math.pow(10, 9);
```

出于目的不同，我们其实可以分为几个部分来谈：

* 纯循环（单纯数字循环）
* 数组遍历
* 数组赋值
* 数组修改（原数组修改）
* 数组筛选

以及测试平台，选用了 Chromium-based 的 Chrome，Gecko 的 FireFox，WebKit 的 Safari 三款浏览器在 MacOS Bug Sur（误）上运行测试。

## 纯循环（单纯数字循环）

```javascript
/* ====== FOR 正序 ====== */
console.time("for normal")

for (let i = 0; i < length; i++) {}

console.timeEnd("for normal")
// for normal: 588.867919921875 ms
// min: 571, max: 588

/* ====== FOR 倒序 ====== */

console.time("for reverse")

for (let i = length; i; i--) {}

console.timeEnd("for reverse")
// for reverse: 587.512939453125 ms
// min: 570, max: 587
```

从结果我们其实可以看到，for 和倒序的 for 的时间相差基本不大，而其实测试下，倒序的 for 循环最稳定。

测试中的倒序的 for 稳定在 570ms ~ 576ms 上下，而正序的 for 与之相差 1ms ~ 2ms（个人感觉还是系统的浮动，但是多次测试下，的确，十来次也都没有一次超过 571ms）。

```javascript
/* ====== WHILE 正序 ====== */
console.time("while")

let i = 0;
while (i < length) {
	i++
}

console.timeEnd("while")
// while: 2965.8759765625 ms
// min: 2871, max: 2965

/* ====== WHILE 倒序 ====== */
console.time("while reverse")

let i = length;
while (i) {
	i--
}

console.timeEnd("while reverse")
// while reverse: 3069.81298828125 ms
// min: 3069, max: 3093
```

值得注意的是，大家所说的 while 循环却是表现不佳，不知道是不是我的打开方式有问题，毕竟倒是真的没怎么用 while 循环（。

至于 forEach，最后我也测试了一下，挺好看的数字：

```javascript
forEach: 21016.822998046875 ms
```

所以我们其实可以得出我们的第一个结论，`for` 循环倒序版最快！

## 数组遍历

在这里，我们测试了 `for` 循环正序、赋值后正序以及倒序，还有 `forEach` 等版本：

```javascript
/* ====== FOR 正序 ====== */
console.time("for normal")

for (let i = 0; i < arr.length; i++) {
	let b = arr[i]
}

console.timeEnd("for normal")
// for normal: 11.520263671875 ms
// min: 8.4, max: 11.5

/* ====== FOR 赋值后正序 ====== */
console.time("for assigned")

for (let i = 0, n = arr.length; i < n; i++) {
	let b = arr[i]
}

console.timeEnd("for assigned")
// for assigned: 10.945068359375 ms
// min: 10.9, max: 10.3

/* ====== FOR 倒序 ====== */

console.time("for reverse")

for (let i = arr.length; i; i--) {
	let b = arr[i]
}

console.timeEnd("for reverse")
// for reverse: 12.486083984375 ms
// min: 9.0, max: 16（多次）

/* ====== FOREACH ====== */

console.time("forEach")

arr.forEach((e) => {
	let b = e
})

console.timeEnd("forEach")
// forEach: 165.9423828125 ms
// min: 120, max: 166

/* ====== FOR OF ====== */

console.time("for of")

for (let i of arr) {
	let b = i
}

console.timeEnd("for of")
// for of: 169.17822265625 m
// min: 130, max: 170
```

在运行中，`for` 默认版本是最快的 —— 而且是多次运行下，都保持到 8.5ms 上下的水平，但反观 `for` 倒序版本，最快 9.0ms，平均在 10.3ms 上下，但是出现了 14ms, 16ms 多次，反复试验仍然如此，不知道是什么原因 = =。

而 `forEach` 就太拉垮了，继续拉开十倍差距，和 `for of` 不相上下（误。

## 数组修改

在这里，我们还是去测试了 `for` 循环正序、赋值后正序以及倒序，还有 `forEach` 等版本：

```javascript
/* ====== FOR 正序 ====== */
console.time("for normal")

for (let i = 0; i < arr.length; i++) {
	arr[i] = 2
}

console.timeEnd("for normal")
// for normal: 10.177734375 ms
// min: 10.0, max: 11

/* ====== FOR 赋值后正序 ====== */
console.time("for assigned")

for (let i = 0, n = arr.length; i < n; i++) {
	arr[i] = 1
}

console.timeEnd("for assigned")
// for assigned: 12.109130859375 ms
// min: 12.1, max: 13

/* ====== FOR 倒序 ====== */

console.time("for reverse")

for (let i = arr.length; i; i--) {
	arr[i] = 2
}

console.timeEnd("for reverse")
// for reverse: 25.362060546875 ms
// min: 25, max: 27

/* ====== FOREACH ====== */

console.time("forEach")

arr.forEach((_, i) => {
	this[i] = 1
}, arr)

console.timeEnd("forEach")
// forEach: 4897.624755859375 ms
// min: 4856, max: 5072

/* ====== MAP ====== */

console.time("map")

arr = arr.map(i => {
	return 1;
})

console.timeEnd("map")
// min: 152, max: 195

/* ====== WHILE ====== */
console.time("while")

var i = 0;
while (i < arr.length) {
	arr[i] = 2;
	i++;
}

console.timeEnd("while")
// while: 31.573974609375 ms
// min: 31.5, max: 34

/* ====== WHILE 倒序 ====== */
console.time("while reverse")

var i = arr.length;
while (i) {
	arr[i] = 1;
	i--;
}

console.timeEnd("while reverse")
// while reverse: 33.184814453125 ms
// min: 33, max: 34
```

结果很喜人，还是正序 `for` 循环的结果最漂亮啦！什么，你问 `forEach`？别用了，这也太好看了。至于 `map`？还行吧说得过去。

## 数组筛选

首先先是用了自定义函数 `getNumberInNormalDistribution(0.5, 0.5)` 在运行测试之前给 10^7 大小的数组赋值正态分布的数据，得到的数据小于 `0.5` 的总数从 `4998322` 到 `5002251` 不等。

```javascript
for (let i = 0; i < arr.length; i++) {
	arr[i] = getNumberInNormalDistribution(0.5, 0.5)
}
```

然后多次运行了以下代码，值得注意的是，由于每次 Math.random() 所产生的值并不一样，最终结果有一定数量的浮动

```javascript
/* ====== FOR 正序 ====== */
console.time("for normal")

let filtered1 = []
for (let i = 0; i < arr.length; i++) {
	if (arr[i] > 0.5) filtered1.push(arr[i])
}

console.timeEnd("for normal")
// min: 133, max: 170

/* ====== FOR 赋值后正序 ====== */
console.time("for assigned")

let filtered2 = []
for (let i = 0, n = arr.length; i < n; i++) {
	if (arr[i] > 0.5) filtered2.push(arr[i])
}

console.timeEnd("for assigned")
// min: 134, max: 155

/* ====== FOR 倒序 ====== */

console.time("for reverse")

let filtered3 = []
for (let i = arr.length; i > 0; i--) {
	if (arr[i] > 0.5) filtered3.push(arr[i])
}

console.timeEnd("for reverse")
// min: 195, max: 204

/* ====== FOREACH ====== */

console.time("forEach")

let filtered4 = []
arr.forEach((e) => {
	if (e > 0.5) filtered4.push(e)
})

console.timeEnd("forEach")
// min: 274, max: 331

/* ====== FILTER ====== */

console.time("filter")

arr.filter((e) => {
	return e > 0.5
})

console.timeEnd("filter")
// min: 285, max: 326

/* ====== WHILE ====== */
console.time("while")

let filtered5 = []
var i = 0;
while (i < arr.length) {
	if (arr[i] > 0.5) filtered5.push(arr[i])
	i++;
}

console.timeEnd("while")
// min: 39, max: 42

/* ====== WHILE 倒序 ====== */
console.time("while reverse")

let filtered6 = []
var i = arr.length;
while (i > 0) {
	if (arr[i] > 0.5) filtered6.push(arr[i])
	i--;
}

console.timeEnd("while reverse")
// min: 36, max: 38
```

显然，还是 `for` 循环更胜一筹，但值得注意的是，在这里 `while` 好快啊..值得注意的是 `filter` 比 `forEach` 还要慢不少？

## 结论

还是那句话，如果数据量比较小，或者你的应用程序对时间并不敏感，那其实完全可以使用那些看起来并不那么快但是你很喜欢，或者可读性很强的代码。但如果数据量比较大，那还是建议使用 `for` 循环解决一切问题～

基本上所有测试中，`for` 第一，`while` 第二，`Array.prototype` 所提供的 `forEach`、`filter`、`map` 这些方法基本都排在末尾，至于 `for of`？也还行吧。

另外！非常出乎我的意料，使用 Firefox Nightly（v88.0a1）的运行速度比 Chrome 甚至慢了 200 倍（10ms => 2389ms），运行第一段代码甚至还无响应一分钟还没结果。

至于 Safari，我大概明白了为什么会有人说 `while` 循环快，因为 Safari 上，最后一段代码 `while` 循环测试部分只用 120ms，基本可以说比 Chrome 的 `for` 快！

Firefox 则更擅长 `Array.prototype`，据说做了优化，不过我没仔细看它的代码（笑）。

![](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/200245d5d5ff40598cdeccd7d84474e7~tplv-k3u1fbpfcp-watermark.image)

![](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/9a0acf9537f54b3ab2e1fc31cff3fab9~tplv-k3u1fbpfcp-watermark.image)

![](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/2e30a155a9684d81a502ccff65d8ec8d~tplv-k3u1fbpfcp-watermark.image)

| 类型 | Chrome stable | Firefox Nightly | Safari stable |
| --- | --- | --- | --- |
| `for` | 巨快  | 慢啊，Chrome `for` 的三四倍都有了 | 一般般 |
| `for assigned` | 比 `for` 慢一丢丢 | 比 `for` 快一倍 | `for` 的 75% |
| `for reverse` | 比 `for` 慢一丢丢 | 比 `for` 快一倍 | 比 `for` 慢一丢丢 |
| `forEach` | `for` 的两倍 | 慢啊，Chrome `for` 的三四倍都有了 | `for` 的两倍 |
| `filter` | `for` 的两倍 | 算是 FF 最快的，Chrome 的 `for` 的 150% | `for` 的两倍 |
| `while` | `for` 的 25% | 慢死了，Chrome `for` 的两倍 | 比 Chrome `for` 快 |
| `while reverse` | `for` 的 27% | 慢死了，Chrome `for` 的两倍 | 接近 Chrome `for` 水平 |


所以我们是不是要针对不同平台给出不同的代码？（哭死