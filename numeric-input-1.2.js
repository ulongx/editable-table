/* ulongx ->https://github.com/ulongx/editable-table
numeric-input-1.2.js
这是一个对 editableTableWidget 的一个小扩展，可以定义表格哪几列需要修改，
哪一列是汇总列，还有汇总的计算方式  type * 相乘 + 相加 - 相减
*/
(function () {
    "use strict";

    $.fn.numericInput = function (options) {
        //type * 相乘 + 相加 - 相减
        var defaults = {
            columns: [],   //需要更改的列,默认全部
            totalColIndex: -1, //汇总列，默认没有
            type: '*'
        };

        options = $.extend(defaults, options);

        var element = $(this),
            footer = element.find('tfoot tr'),
            dataRows = element.find('tbody tr'),
            initialTotal = function () {
                var column,total,totalSum;
                if(!options.columns.length) {
                    for (column = 1; column < footer.children().size(); column++) {
                        total = 0;
                        dataRows.each(function () {
                            var row = $(this);
                            total += parseFloat(row.children().eq(column).text());
                        });
                        footer.children().eq(column).text(total);
                    }
                } else {
                    for (var x in options.columns) {
                        total = 0, totalSum = 0;
                        dataRows.each(function () {
                            var row = $(this);
                            total += parseFloat(row.children().eq(options.columns[x]).text());
                            if (options.totalColIndex !== -1){
                                totalSum += parseFloat(row.children().eq(options.totalColIndex).text());
                            }
                        });
                        footer.children().eq(options.columns[x]).text(total);
                        if (options.totalColIndex !== -1){
                            footer.children().eq(options.totalColIndex).text(totalSum);
                        }
                    }
                }

            };

        element.find('td').on('change', function (evt) {
            var cell = $(this),
                column = cell.index(),
                total = 0,
                totalSum = 0,
                totalSumEnd = 0;
            if (options.columns.length && $.inArray(column,options.columns) === -1) {
                //$.Message.info('本单元不可编辑');
								alert('本单元不可编辑');
                return false;
            }
            if (options.columns.length && options.totalColIndex !== -1){
                var parentTr = cell.parent().children();
                options.columns.map(function (item, i) {
                    switch(options.type){
                        case '*':
                            if (totalSum === 0){
                                totalSum = parseFloat(parentTr.eq(item).text());
                            } else {
                                totalSum *= parseFloat(parentTr.eq(item).text());
                            }
                            break;
                        case '+':
                            totalSum += parseFloat(parentTr.eq(item).text());
                            break;
                        case '-':
                            totalSum -= parseFloat(parentTr.eq(item).text());
                            break;
                        default:
                            break;
                    }

                });
                parentTr.eq(options.totalColIndex).text(totalSum);
            }

            element.find('tbody tr').each(function () {
                var row = $(this);
                total += parseFloat(row.children().eq(column).text());
                if (options.totalColIndex !== -1) {
                    totalSumEnd += parseFloat(row.children().eq(options.totalColIndex).text());
                }
            });
            // footer.children().eq(column).text(total);
            if (options.totalColIndex !== -1) {
                footer.children().eq(options.totalColIndex).text(totalSumEnd);
            }else{
                footer.children().eq(column).text(total);
            }

        }).on('validate', function (evt, value) {
            var cell = $(this),
                column = cell.index();
            if (column === 0) {
                return !!value && value.trim().length > 0;
            } else {
                return !isNaN(parseFloat(value)) && isFinite(value);
            }
        });
        initialTotal();
        return this;
    };
})(window.jQuery);
