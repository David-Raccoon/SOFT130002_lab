# Lab07设计文档

王涵章 18307130214

## 总体思路

### 任务一

左右翻页按钮部分：设置一个全局的current变量，表示当前要被显示的图片。然后实现trunPrev和turnNext函数，用于左右按钮的事件。

### 任务二

将body的load事件处理函数设置为间歇调用turnNext，并将返回id存储在intervalId中，实现页面加载完毕后自动翻页

将图片区域的warp的mouseover设置为取消该间歇调用，利用intervalId值

将图片区域的warp的mouseon设置为间歇调用turnNext，并将返回id存储在intervalId中，实现鼠标移开后后自动翻页

### 任务三

将每一个按钮都分别与一个处理函数对应，该函数将原本class为on的图片取消on的class属性，将所选图片添加on的class属性并更新current值


### 任务四

可编辑表格部分：先获取td元素中间的值存放起来，再将该元素变成一个value为该值的input文本框。然后将该元素失去焦点时的方法用blur()设置为：将文本框中的内容变成一个普通文本内容