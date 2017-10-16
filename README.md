# editable-table 扩展
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

## Basic Usage
-----------

See http://mindmup.github.com/editable-table/

numeric-input-1.2.js
这是一个对 editableTableWidget 的一个小扩展，可以定义表格哪几列需要修改，
哪一列是汇总列，还有汇总的计算方式  type * 相乘 + 相加 - 相减

如图：

![screenshots_1](https://github.com/ulongx/editable-table/blob/master/screenshots_1.gif?raw=true)

### 使用方式

``` html

<table id="editMainTable" class="table table-striped m-b-0">
    <thead>
    <tr>
        <th>名称</th><th>品类</th><th>型号</th><th>数量</th><th>单价</th><th>总额</th>
    </tr>
    </thead>
    <tbody>
    <tr>
        <td>Car</td><td>Car</td><td>100*100</td><td>0</td><td>100</td><td>0</td>
    </tr>
    <tr>
        <td>Bike</td><td>Car</td><td>140*10</td><td>1</td><td>100</td><td>100</td>
    </tr>
    <tr>
        <td>Plane</td><td>Car</td><td>540*20</td><td>3</td><td>100</td><td>300</td>
    </tr>
    <tr>
        <td>Yacht</td><td>Car</td><td>200*30</td><td>0</td><td>100</td><td>0</td>
    </tr>
    <tr>
        <td>Segway</td><td>Car</td><td>240*30</td><td>1</td><td>100</td><td>100</td>
    </tr>
    </tbody>
    <tfoot>
    <tr>
        <th><strong>合计</strong></th><th></th><th></th><th></th><th></th><th></th>
    </tr></thead>
</table>

```

``` javascript
$('#editMainTable').editableTableWidget().numericInput({
    columns: [3,4],   //需要计算的列
    totalColIndex: 5, //汇总列的index
    type: '*'
});
```

* 设置不可以修改的列


``` javascript
$('#editMainTable').editableTableWidget({
  needEdits: [3,4]
});
```

Dependencies
------------
* jQuery http://jquery.com/
