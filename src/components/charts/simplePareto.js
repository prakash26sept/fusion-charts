import React from 'react';
import FusionCharts from "fusioncharts";
import charts from "fusioncharts/fusioncharts.charts";
import ReactFusioncharts from "react-fusioncharts";

// Resolves charts dependancy
charts(FusionCharts);

const dataSource = {
    chart: {
        caption: "Late arrivals by reported cause",
        subcaption: "Last month",
        pyaxisname: "No. of Occurrence",
        theme: "fusion",
        showsecondarylimits: "0",
        showdivlinesecondaryvalue: "0",
        plottooltext:
            "Due to $label, late arrivals count is : <b>$dataValue</b> of the total <b>$sum</b> employees",
        drawcrossline: "1"
    },
    data: [
        {
            label: "Traffic",
            value: "5680"
        },
        {
            label: "Family Engagement",
            value: "1036"
        },
        {
            label: "Public Transport",
            value: "950"
        },
        {
            label: "Weather",
            value: "500"
        },
        {
            label: "Emergency",
            value: "140"
        },
        {
            label: "Others",
            value: "68"
        }
    ]
};

export default class MyComponent extends React.Component {
    render() {
        return (
            <ReactFusioncharts
                type="pareto2d"
                width="100%"
                height="400"
                dataFormat="JSON"
                dataSource={dataSource}
            />
        );
    }
}
