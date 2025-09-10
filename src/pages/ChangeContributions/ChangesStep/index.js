/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { InfoBanner, InfoDialog, Table } from '../../../components';
import "./styles.scss";

const ChangesStep = () => {
    const [openMatchingDialog, setOpenMatchingDialog] = React.useState(false);


    const preTaxTableData = {
        title: "Pre-tax & Roth",
        headers: [
            {
                content: "Min: $0.00 | Max: $23,500.00",
                key: "name",
                align: "right"
            },
        ],
        rows: [
            {
                columns: [
                    {
                        content: "Pre-tax contributions",
                        key: "preTaxContributions",
                        align: "left"
                    },
                ]
            }
        ]
    }
    return (
    <>
    <div className="changes-contributions-container">
        <form className="changes-contributions-form">
            <InfoBanner>
            Enter the amount of each paycheck you wish to contribute (not to exceed applicable limits). Many financial professionals say you may need to save 10 to 15% of your salary each year to have enough to live on in retirement, however you should review your own financial situation to determine what makes sense for you. You can elect to contribute to one or more of the plan contribution types shown below. Contribution types (e.g., Roth) not listed are not offered by the plan. Your employer will match your contributions. <a onClick={() => { setOpenMatchingDialog(true)}}>View Matching Calculations</a>
            <br />
            <br />
            The total sum of Pre-Tax and Roth contributions must be less than or equal to the plan's maximum percentage (100%) values.
            <br />
            <br />
            The total percentage for all contribution types must not exceed 100%.
            </InfoBanner>

            <Table data={preTaxTableData} />            
        </form>
    </div>
    <InfoDialog open={openMatchingDialog} onClose={() => setOpenMatchingDialog(false)} title="View Matching Calculations" content="Hello" />
    </>
    )
}

export default ChangesStep;