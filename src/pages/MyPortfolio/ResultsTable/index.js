import React from "react";
import { useNavigate } from "react-router-dom";
import { Table, Button, DotMenu } from "../../../components";
import "./styles.scss";

const ResultsTable = () => {

    const navigate = useNavigate();

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
                content: "Year to date",
                key: "yearToDate",
                align: "right"
               
            },
            {
                content: "RTM",
                key: "rtm",
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
                        content: "0.00%",
                        key: "yearToDate",
                        align: "right"         
                    },
                    {
                        content: "3.23%",
                        key: "rtm",
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
                        content: "--",
                        key: "yearToDate",
                        align: "right"         
                    },
                    {
                        content: "",
                        key: "rtm",
                        align: "right"         
                    }
                ]
               
            }

        ]
    }

    return (
        <div className="portfolio-results-table-container">
            <Table data={tableData}/>

            <div className="portfolio-results-table-button-container">
                <Button onClick={() => navigate("/change-investments")}>Change investments</Button>
            </div>
        </div>
    );
};

export default ResultsTable;