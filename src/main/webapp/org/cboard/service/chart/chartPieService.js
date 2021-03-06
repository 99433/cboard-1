/**
 * Created by yfyuan on 2016/10/28.
 */
'use strict';
cBoard.service('chartPieService', function () {

    this.render = function (containerDom, option, scope, persist) {
        return new CBoardEChartRender(containerDom, option, null, scope).chart(null, persist);        
    };

    this.parseOption = function (data) {
        var chartConfig = data.chartConfig;
        var casted_keys = data.keys;
        var casted_values = data.series;
        var aggregate_data = data.data;
        var newValuesConfig = data.seriesConfig;

        var series = new Array();
        var string_keys = _.map(casted_keys, function (key) {
            return key.join('-');
        });
        var string_value = _.map(casted_values, function (value) {
            return value.join('-');
        });
        var b = 100 / (casted_values.length * 9 + 1);
        var titles = [];
        for (var i = 0; i < aggregate_data.length; i++) {
            var s = {
                name: string_value[i],
                type: 'pie',
                center: [5 * b + i * 9 * b + '%', '50%'],
                data: [],
                //roseType: 'angle'
                itemStyle: {
                    normal: {
                        label: {
                            show: true,
                            //position:'inside',
                            formatter: '{b}: {d}%'
                        }
                    },
                    labelLine: {show: true}
                }
            };
            titles.push({
                textAlign: 'center', textStyle: {
                    fontSize: 12,
                    fontWeight: 'normal'
                }, text: string_value[i], left: 5 * b + i * 9 * b + '%', top: '90%'
            });
            for (var j = 0; j < aggregate_data[i].length; j++) {
                s.data.push({
                    name: string_keys[j],
                    value: _.isUndefined(aggregate_data[i][j]) ? 0 : aggregate_data[i][j]
                });
            }
            series.push(s);
        }
        var echartOption = {
            title: titles,
            legend: {
                orient: 'vertical',
                left: 'left',
                show: false,
                data: string_keys
            },
            tooltip: {
                trigger: 'item',
                formatter: "{a} <br/>{b} : {c} ({d}%)"
            },
            toolbox: false,
            series: series,
            in_radius: chartConfig.option.in_radius,
            out_radius: chartConfig.option.out_radius,
//            radius: [chartConfig.option.in_radius, '80%'],
            name: typeof(chartConfig.name != 'undefined')? chartConfig.name : ''
        };

        updateEchartOptions(chartConfig.option, echartOption);
        
        return echartOption;
    };
});