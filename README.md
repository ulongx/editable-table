editable-table 扩展
=================

This tiny (3KB, < 120 lines) jQuery plugin turns any table into an editable spreadsheet. Here are the key features:

* No magic - works on a normal HTML table (so you can plug it in into any web
table)
* Supports validation and change events (so you can warn about invalid input or
prevent invalid changes)
* Uses standard DOM focus for selection (so does not interrupt scrolling or
tabbing outside the table)
* Native copy/paste support
* Does not force any styling (so you can style it any way you want, using normal
CSS)
* Works well with Bootstrap
* Depends only on jQuery

Basic Usage
-----------

See http://mindmup.github.com/editable-table/

numeric-input-1.2.js
这是一个对 editableTableWidget 的一个小扩展，可以定义表格哪几列需要修改，
哪一列是汇总列，还有汇总的计算方式  type * 相乘 + 相加 - 相减
如图：

![screenshots_1](https://github.com/ulongx/editable-table/blob/master/screenshots_1.gif?raw=true)

Dependencies
------------
* jQuery http://jquery.com/
