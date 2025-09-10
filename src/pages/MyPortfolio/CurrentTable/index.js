import React from "react";
import { Table, Button, DotMenu } from "../../../components";
import "./styles.scss";

const CurrentTable = () => {

    const options1 = [
        {
            content: "Fund details",
            key: "option1",
            url: "https://www.capitalgroup.com/retirement/participant/servlet/FundLink?fundId=0002259&type=details"
        },
        {
            content: "Prospectus",
            key: "option2",
            url: "https://www.capitalgroup.com/retirement/participant/servlet/FundLink?fundId=0002259&cusip=999998255&type=prospectus"
        }
    ]

    const options2 = [
        {
            content: "Fund details",
            key: "option1",
            url: "https://www.capitalgroup.com/retirement/participant/servlet/FundLink?fundId=0022122&type=details"
        },
        {
            content: "Prospectus",
            key: "option2",
            url: "https://www.capitalgroup.com/retirement/participant/servlet/FundLink?fundId=0022122&cusip=999922122&type=prospectus"
        }
    ]

    const tableData = {
        title: "Investment details",
        headers: [
            {
                content: "Name",
                key: "name",
                align: "left"
               
            },
            {
                content: "Docs",   
                key: "docs",
                align: "center"
               
            },
            {
                content: "Current election",
                key: "currentElection",
                align: "right"
               
            },
            {
                content: "QTD contribution",
                key: "qtdContribution",
                align: "right"
               
            },
            {
                content: "YTD contribution",
                key: "ytdContribution",
                align: "right"
               
            },
        ],
        rows: [
            {
                columns: [
                    {
                        content: "Af U.S. Government Money Market-R2",
                        key: "name",
                        align: "left"         
                    },
                    {
                        content: <DotMenu options={options1}/>,
                        key: "docs",
                        align: "center"         
                    },
                    {
                        content: "90.00%",
                        key: "currentElection",
                        align: "right"         
                    },
                    {
                        content: "$0.00",
                        key: "qtdContribution",
                        align: "right"         
                    },
                    {
                        content: "$0.00",
                        key: "ytdContribution",
                        align: "right"         
                    }
                ]
               
            },
            {
                columns: [
                    {
                        content: "Af Global Insight Fund-R2",
                        key: "name",
                        align: "left"         
                    },
                    {
                        content: <DotMenu options={options2}/>,
                        key: "docs",
                        align: "center"         
                    },
                    {
                        content: "10.00%",
                        key: "currentElection",
                        align: "right"         
                    },
                    {
                        content: "$0.00",
                        key: "qtdContribution",
                        align: "right"         
                    },
                    {
                        content: "$0.00",
                        key: "ytdContribution",
                        align: "right"         
                    }
                ]
               
            }

        ],
        footer: [   
            {
                content: "Total",   
                key: "total",
                align: "left",
                colspan: 2,
            },
            {
                content: "100%",   
                key: "currentElection",
                align: "right",
            },
            {
                content: "$0.00",   
                key: "qtdContribution",
                align: "right",
            },
            {
                content: "$0.00",   
                key: "ytdContribution",
                align: "right",
            },
        ]
    }

    return (
        <div className="portfolio-current-table-container">
            <Table data={tableData}/>

            <div className="portfolio-current-table-button-container">
                <Button variant="primary">Change investments</Button>
            </div>
        </div>
    );
};

export default CurrentTable;