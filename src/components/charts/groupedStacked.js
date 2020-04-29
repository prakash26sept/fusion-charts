import React from 'react';
import FusionCharts from "fusioncharts";
import charts from "fusioncharts/fusioncharts.charts";
import ReactFusioncharts from "react-fusioncharts";

// Resolves charts dependancy
charts(FusionCharts);

const dataSource = {
    chart: {
        caption: "Break-up of Annual Revenue",
        subcaption: "In Million $",
        xaxisname: "Year",
        yaxisname: "Sales in M$",
        numberprefix: "$",
        numbersuffix: "M",
        showsum: "1",
        plottooltext:
            "Revenue from <b>$seriesName</b> in $label was <b>$dataValue</b>",
        theme: "fusion"
    },
    categories: [
        {
            category: [
                {
                    label: "2011"
                },
                {
                    label: "2012"
                },
                {
                    label: "2013"
                },
                {
                    label: "2016"
                },
                {
                    label: "2017"
                }
            ]
        }
    ],
    dataset: [
        {
            dataset: [
                {
                    seriesname: "Developer libraries",
                    data: [
                        {
                            value: "30"
                        },
                        {
                            value: "26"
                        },
                        {
                            value: "29"
                        },
                        {
                            value: "31"
                        },
                        {
                            value: "34"
                        }
                    ]
                },
                {
                    seriesname: "Business Tools",
                    data: [
                        {
                            value: "21"
                        },
                        {
                            value: "28"
                        },
                        {
                            value: "39"
                        },
                        {
                            value: "41"
                        },
                        {
                            value: "24"
                        }
                    ]
                }
            ]
        },
        {
            dataset: [
                {
                    seriesname: "Infrastructure Consulting",
                    data: [
                        {
                            value: "27"
                        },
                        {
                            value: "25"
                        },
                        {
                            value: "28"
                        },
                        {
                            value: "26"
                        },
                        {
                            value: "10"
                        }
                    ]
                },
                {
                    seriesname: "Training",
                    data: [
                        {
                            value: "17"
                        },
                        {
                            value: "15"
                        },
                        {
                            value: "18"
                        },
                        {
                            value: "16"
                        },
                        {
                            value: "10"
                        }
                    ]
                },
                {
                    seriesname: "AMC",
                    data: [
                        {
                            value: "12"
                        },
                        {
                            value: "17"
                        },
                        {
                            value: "16"
                        },
                        {
                            value: "15"
                        },
                        {
                            value: "12"
                        }
                    ]
                }
            ]
        }
    ]
};

export default class MyComponent extends React.Component {
    render() {
        return (
            <ReactFusioncharts
                type="msstackedcolumn2d"
                width="100%"
                height="400"
                dataFormat="JSON"
                dataSource={dataSource}
            />
        );
    }
}
