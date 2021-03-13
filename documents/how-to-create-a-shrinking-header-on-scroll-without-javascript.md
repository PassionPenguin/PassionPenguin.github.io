> * 原文地址：[How to Create a Shrinking Header on Scroll Without JavaScript](https://css-tricks.com/how-to-create-a-shrinking-header-on-scroll-without-javascript/)
> * 原文作者：[Håvard Brynjulfsen](https://css-tricks.com/author/havardbrynjulfsen/)
> * 译者：[霜羽 Hoarfroster](https://github.com/PassionPenguin)

# 如何不使用 JavaScript 在页面滚动时自动折叠标题？

想象以下我们有一个看起来很棒而且很厚的一个标题栏，在标题内容的上下都有着不小的内间距。当页面向下滚动时，标题栏的内间距会被缩小而被折叠，从而让页面中的其他内容拥有了更多的屏幕空间展示它们的风采。

通常，我们必须使用一些 JavaScript 代码才能制作出类似的折叠效果，但是自 `position: sticky` 的引入以来，我们现在可以使用纯 CSS 完成标题栏的折叠。

![](../images//Library/WebServer/Documents/documents/how-to-create-a-shrinking-header-on-scroll-without-javascript.md-1s0Ea8DEbYPwwbzrt3C1g4g.gif)

![](../images//Library/WebServer/Documents/documents/how-to-create-a-shrinking-header-on-scroll-without-javascript.md-1s0Ea8DEbYPwwbzrt3C1g4g.gif)

让我就此解决这个问题：我通常不喜欢粘在顶部的标题栏，因为它们真的占用了屏幕太多的空间了。但是我们是否应该在自己的网站上使用粘顶的标题栏就是一个完全不同的问题了，而这实际上取决于我们的内容，以及我们是否有一个一直存在的导航，会给标题栏中添加导航内容。如果我们真的要使用粘顶的标题栏，我们应该格外小心，以免无意间让粘性区域覆盖或遮盖了部分的内容或功能，造成了数据的丢失。

不管怎么说，就让我们从 HTML 标记开始，了解一下无 JavaScript 代码构建自动折叠的标题栏的方法。下面的 HTML 代码没有什么复杂的 —— 只有一个 `<header>` 以及一个包含徽标和导航的子 `div`。

```html
<header class="header-outer">
    <div class="header-inner">
        <div class="header-logo">...</div>
        <nav class="header-navigation">...</nav>
    </div>
</header>
```

至于样式，我们将为父元素 `<header>` 声明一个高度（120px），并将其设置为一个 `flex` 的容器，以使其子元素始终保持中心对齐。然后，我们让其具有粘性：

```css
.header-outer {
    display: flex;
    align-items: center;
    position: sticky;
    height: 120px;
}
```

内部容器包含了所有标题栏元素，例如徽标和导航。内部容器在某种程度上是实际的标题栏，而父 `<header>` 元素的唯一功能是使标题栏更大，因此我们需要缩小它让它折叠。

我们将内部容器 `.header-inner` 设置 70px 的高度，并使其具有粘性。

```css
.header-inner {
    height: 70px;
    position: sticky;
    top: 0;
}
```

那 `top: 0` 是干什么的？它用于确保容器变粘时将其自身放置在最顶部。

现在是窍门！为了使内部容器实际粘贴到页面的“天花板”，我们需要为父容器 `<header>` 设置一个拥有负值的 `top`，该负值等于两个容器之间的高度差，从而使其内部“停留”在视口上方（也就是 70px - 120px，也就是 -50px！）让我们把这个高度差添加回去一下。

```css
.header-outer {
    display: flex;
    align-items: center;
    position: sticky;
    top: -50px; /* 等同于 header-outer 和 header-inner 的高度差 */
    height: 120px;
} 
```

让我们现在糅合一下代码 —— `<header>` 滑出了视窗，而内部容器在视口的顶端放置本身整齐。

```html
<!-- Sticky header -->
<header class="header-outer">
    <div class="header-inner responsive-wrapper">
        <div class="header-logo">
            <img src="https://assets.codepen.io/285131/acme-2.svg"/>
        </div>
        <nav class="header-navigation">
            <a href="#">Home</a>
            <a href="#">About</a>
            <a href="#">Blog</a>
            <a href="#">Contact Us</a>
            <button>Menu</button>
        </nav>
    </div>
</header>
<!-- Content -->
<main class="main">
    <div class="main-content responsive-wrapper">
        <article class="widget">
            <h2>How does it work without JS? 🤯</h2>
            <p>This sticky header consists of two elements: an <strong>outer</strong> and an <strong>inner</strong> container. The outer container is taller than the inner — and the inner is centered vertically.
            <p>By utilizing the <code>position: sticky</code> property <strong>twice</strong>, both on the header's <strong>outer container</strong> and <strong>inner container</strong> the outer container will stick to the <code>body</code>, while the inner container will stick to the outer container.</p>
            <p>Note that the outer container has a negative <code>top</code> value equal to the height difference between the two containers. This causes the outer container to stick <strong>above</strong> the <code>body</code>, making the inner container stick to the "ceiling" on scroll.
            <p></p>
        </article>
    </div>
</main>
```

```css
@import url("https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&display=swap");

*,
*:after,
*:before {
    box-sizing: border-box;
}

:root {
    --header-outer-height: 110px;
    --header-inner-height: 70px;
    --header-height-difference: calc(
            var(--header-outer-height) - var(--header-inner-height)
    );
    --header-bg: #fff;
}

body {
    font-family: "DM Sans", sans-serif;
    background-color: #f2f5f7;
    line-height: 1.5;
    min-height: 300vh;
    position: relative;
}

.responsive-wrapper {
    width: 90%;
    max-width: 1280px;
    margin-left: auto;
    margin-right: auto;
}

/* Sticky header */
.header-outer {
    /* Make it stick */
    height: var(--header-outer-height);
    position: sticky;
    top: calc(
            var(--header-height-difference) * -1
    ); /* Multiply by -1 to get a negative value */
    display: flex;
    align-items: center;

    /* Other */
    background-color: var(--header-bg);
    box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.1);
}

.header-inner {
    /* Make it stick */
    height: var(--header-inner-height);
    position: sticky;
    top: 0;

    /* Other */
    display: flex;
    align-items: center;
    justify-content: space-between;
}

/* Styling of other elements */
.header-logo img {
    display: block;
    height: calc(var(--header-inner-height) - 30px);
}

.header-navigation {
    display: flex;
    flex-wrap: wrap;
}

.header-navigation a,
.header-navigation button {
    font-size: 1.125rem;
    color: inherit;
    margin-left: 1.75rem;
    position: relative;
    font-weight: 500;
}

.header-navigation a {
    display: none;
    font-size: 1.125rem;
    color: inherit;
    text-decoration: none;
}

.header-navigation button {
    border: 0;
    background-color: transparent;
    padding: 0;
}

.header-navigation a:hover:after,
.header-navigation button:hover:after {
    transform: scalex(1);
}

.header-navigation a:after,
.header-navigation button:after {
    transition: 0.25s ease;
    content: "";
    display: block;
    width: 100%;
    height: 2px;
    background-color: currentcolor;
    transform: scalex(0);
    position: absolute;
    bottom: -2px;
    left: 0;
}

.main {
    margin-top: 3rem;
}

.widget {
    width: 100%;
    max-width: 600px;
    border-radius: 8px;
    box-shadow: 0 15px 30px 0 rgba(0, 0, 0, 0.1);
    background-color: #fff;
    padding: 2.5rem;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 2rem;
    font-size: 1.125rem;
}

.widget > * + * {
    margin-top: 1.25em;
}

.widget h2 {
    font-size: 1.5rem;
    font-weight: 700;
    line-height: 1.25;
}

.widget code {
    display: inline-block;
    padding: 0.125em 0.25em;
    border-radius: 2px;
    background-color: #bee5d3;
}

.widget strong {
    font-weight: 700;
}

@media (min-width: 800px) {
    .header-navigation a {
        display: inline-block;
    }

    .header-navigation button {
        display: none;
    }
}
```

![](../images/how-to-create-a-shrinking-header-on-scroll-without-javascript-gif-1.gif)

我们可以将其扩展到其他元素！一个持续的提示如何？

```html
<div class="banner-outer">
    <div class="banner-inner responsive-wrapper">
        <p>Save up to 70% on selected merch. <a href="#">Go to sale</a></p>
    </div>
</div>
<header class="header-outer">
    <div class="header-inner responsive-wrapper">
        <div class="header-logo">
            <img src="https://assets.codepen.io/285131/acme-2.svg"/>
        </div>
        <nav class="header-navigation">
            <a href="#">Home</a>
            <a href="#">About</a>
            <a href="#">Blog</a>
            <a href="#">Contact Us</a>
            <button>Menu</button>
        </nav>
    </div>
</header>
```

```css
@import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&display=swap');

*,
*:after,
*:before {
    box-sizing: border-box;
}

:root {
    /* Banner */
    --banner-outer-height: 75px;
    --banner-inner-height: 50px;
    --banner-height-difference: calc(
            var(--banner-outer-height) - var(--banner-inner-height)
    );
    --banner-bg: #ffc75f;

    /* Header */
    --header-outer-height: 110px;
    --header-inner-height: 70px;
    --header-bg: #FFF;
}

body {
    font-family: "DM Sans", sans-serif;
    background-color: #f2f5f7;
    line-height: 1.5;
    min-height: 300vh;
    position: relative;
}


a {
    color: inherit;
}

.responsive-wrapper {
    width: 90%;
    max-width: 1280px;
    margin-left: auto;
    margin-right: auto;
}

/* Sticky banner */
.banner-outer {
    /* Make it stick */
    height: var(--banner-outer-height);
    position: sticky;
    top: calc(var(--banner-height-difference) * -1); /* Multiply by -1 to get a negative value */
    display: flex;
    align-items: center;

    /* Other */
    background-color: var(--banner-bg);
    z-index: 1;
}

.banner-inner {
    /* Make it stick */
    height: var(--banner-inner-height);
    position: sticky;
    top: 0;

    /* Other */
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    line-height: 1.25;
}

.header-outer {
    height: var(--header-outer-height);
    display: flex;
    align-items: center;
    background-color: var(--header-bg);
    box-shadow: 0 2px 10px 0 rgba(0, 0, 0, .1);
}

.header-inner {
    height: var(--header-inner-height);
    display: flex;
    align-items: center;
    justify-content: space-between;
}


/* Styling of other elements */
.header-logo img {
    display: block;
    height: calc(var(--header-inner-height) - 30px);
}

.header-navigation {
    display: flex;
    flex-wrap: wrap;
}

.header-navigation a,
.header-navigation button {
    font-size: 1.125rem;
    color: inherit;
    margin-left: 1.75rem;
    position: relative;
    font-weight: 500;
}

.header-navigation a {
    display: none;
    font-size: 1.125rem;
    color: inherit;
    text-decoration: none;
}

.header-navigation button {
    border: 0;
    background-color: transparent;
    padding: 0;
}

.header-navigation a:hover:after,
.header-navigation button:hover:after {
    transform: scalex(1);
}

.header-navigation a:after,
.header-navigation button:after {
    transition: 0.25s ease;
    content: "";
    display: block;
    width: 100%;
    height: 2px;
    background-color: currentcolor;
    transform: scalex(0);
    position: absolute;
    bottom: -2px;
    left: 0;
}

.main {
    margin-top: 3rem;
}

@media (min-width: 800px) {
    .header-navigation a {
        display: inline-block;
    }

    .header-navgitaion button {
        display: none;
    }
}
```

![](../images/how-to-create-a-shrinking-header-on-scroll-without-javascript-gif-2.gif)

尽管我们可以使用 CSS 做到折叠的效果，但它确实仍然有着一定的局限性。例如，内部和外部容器使用固定的高度。这使得它们不易于更改，就像把导航元素包装起来一样，因为菜单项的数量可能会超过了尺寸，从而导致内容的溢出。

另一个限制？徽标不能缩小。这可能是最大的缺点，因为徽标通常是占用空间的最大罪魁祸首。也许有一天，我们将能够基于元素的粘性来应用样式……
