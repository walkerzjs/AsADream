---
title: The ways to fix a navbar on top
date: "2020-08-18"
description: "Discuss the difference between using position: 'sticky' and 'fixed' to put a navbar on top."
---

When I aws developing my project, I want to have a navbar fixed on top of the page all the time, and the rest of the content should stay below it when the page loads.
I came up with one way: 'position: sticky' at first, but later changed to 'position: fixed'.

The benefit of using position sticky is that the navbar can still be in the normal document flow, and push the rest of the content below it. But there is a problem, it seems that it is not very well supported by mobile broswers. When I tested it on ios, the content behind the navbar sometimes merged with it when scrolling the page, making the navbar "blinking".
(<a href="https://codepen.io/jacobjsz/pen/LYNZMMq" target="__blank">Codepen example</a>)

I then shifted to using "position: fixed". And the problem disappeared. Just need to know that "position: fixed" removes the element from the normal document flow. So the element below it should have "margin-top" set. The code looks like below:

```html
<div class="navbar">navbar</div>
<div class="rest">rest of the content</div>
```

```css
.navbar {
  background-color: skyblue;
  height: 70px;
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
}

.rest {
  height: 2000px;
  margin-top: 70px;
  background-color: grey;
}
```

(<a href="https://codepen.io/jacobjsz/pen/VwajqNJ" target="__blank">Codepen example</a>)
