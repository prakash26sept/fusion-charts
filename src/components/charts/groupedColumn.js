import React from 'react';
import FusionCharts from "fusioncharts";
import charts from "fusioncharts/fusioncharts.charts";
import ReactFusioncharts from "react-fusioncharts";

// Resolves charts dependancy
charts(FusionCharts);

const dataSource = {
    chart: {
        caption: "Products sold by Hindustan Unilever",
        subcaption: "2012-2016",
        xaxisname: "Years",
        yaxisname: "Total number of products sold",
        formatnumberscale: "1",
        plottooltext:
            "<b>$dataValue</b> sold <b>$seriesName</b> in $label",
        theme: "fusion",
        drawcrossline: "1"
    },
    categories: [
        {
            category: [
                {
                    label: "2012"
                },
                {
                    label: "2013"
                },
                {
                    label: "2014"
                },
                {
                    label: "2015"
                },
                {
                    label: "2016"
                }
            ]
        }
    ],
    dataset: [
        {
            seriesname: "Health Products",
            data: [
                {
                    value: "125000"
                },
                {
                    value: "300000"
                },
                {
                    value: "480000"
                },
                {
                    value: "800000"
                },
                {
                    value: "1100000"
                }
            ]
        },
        {
            seriesname: "Eatables",
            data: [
                {
                    value: "70000"
                },
                {
                    value: "150000"
                },
                {
                    value: "350000"
                },
                {
                    value: "600000"
                },
                {
                    value: "1400000"
                }
            ]
        },
        {
            seriesname: "Other Items",
            data: [
                {
                    value: "10000"
                },
                {
                    value: "100000"
                },
                {
                    value: "300000"
                },
                {
                    value: "600000"
                },
                {
                    value: "900000"
                }
            ]
        }
    ]
};

export default class GroupedColumn extends React.Component {
    render() {
        return (
            <ReactFusioncharts
                type="mscolumn2d"
                width="100%"
                height="400"
                dataFormat="JSON"
                dataSource={dataSource}
            />
        );
    }
}
