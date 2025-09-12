/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setActiveStep } from '../../../state/wizard/wizardSlice';
import { InfoBanner, InfoDialog, Table, InputText, ToggleSwitch, Button } from '../../../components';
import InfoIcon from '@mui/icons-material/Info';
import "./styles.scss";

const ChangesStep = () => {
    const [openMatchingDialog, setOpenMatchingDialog] = React.useState(false);
    const [openPreTaxDialog, setOpenPreTaxDialog] = React.useState(false);
    const [openRothDialog, setOpenRothDialog] = React.useState(false);
    const [openPostTaxDialog, setOpenPostTaxDialog] = React.useState(false);

    const [preTaxType, setPreTaxType] = React.useState("$");
    const [postTaxType, setPostTaxType] = React.useState("$");

    const [preTaxContributions, setPreTaxContributions] = React.useState("0.00");
    const [rothContributions, setRothContributions] = React.useState("0.00");
    const [postTaxContributions, setPostTaxContributions] = React.useState("0.00");

    const [totalPreTaxContributions, setTotalPreTaxContributions] = React.useState("0.00");
    const [totalPostTaxContributions, setTotalPostTaxContributions] = React.useState("0.00");

    const dispatch = useDispatch();

    const changePreTaxToogle = (value) => {
        if (value === 0) {
            setPreTaxType("$");
        } else {
            setPreTaxType("%");
        }
    }

    const changePostTaxToogle = (value) => {
        if (value === 0) {
            setPostTaxType("$");
        } else {
            setPostTaxType("%");
        }
    }


    useEffect(() => {
        const parsedPreTaxContributions = parseFloat(preTaxContributions || "0.00");
        const parsedRothContributions = parseFloat(rothContributions || "0.00");
        const total = parsedPreTaxContributions + parsedRothContributions;

        if (preTaxType === "$") {
            setTotalPreTaxContributions(Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(total));
        } else {
            setTotalPreTaxContributions(total);
        }
    }, [preTaxContributions, rothContributions, preTaxType]);


    useEffect(() => {
        const parsedPostTaxContributions = parseFloat(postTaxContributions || "0.00");
        setTotalPostTaxContributions(parsedPostTaxContributions);
    }, [postTaxContributions]);

    const preTaxTableData = {
        title: "Pre-tax and Roth",
        widgets: [<ToggleSwitch left="$" right="%" onChange={changePreTaxToogle}/>],
        headers: [
            {
                content: `Min: ${preTaxType === "$" ? "$0.00" : '0%'} | Max: ${preTaxType === "$" ? "$23,500.00" : '100%'}`,
                key: "name",
                align: "right",
                colspan: 2
            },
        ],
        rows: [
            {
                columns: [
                    {
                        content: <div className="table-item"><strong>Pre-tax contributions</strong> <InfoIcon sx={{ cursor: "pointer", width: "24px", height: "24px", color: "#005f9e"}} onClick={() => { setOpenPreTaxDialog(true)}} /></div>,
                        key: "preTaxContributions",
                        align: "left"
                    },
                    {
                        content: <InputText type="number" align="right" value={preTaxContributions} setValue={setPreTaxContributions} prefix={preTaxType === "$" ? "$" : null} suffix={preTaxType === "%" ? "%" : null}/>,
                        key: "preTaxContributions",
                        align: "left"
                    },
                ]
            },
            {
                columns: [
                    {
                        content: <div className="table-item"><strong>Roth contributions</strong> <InfoIcon sx={{ cursor: "pointer", width: "24px", height: "24px", color: "#005f9e"}} onClick={() => { setOpenRothDialog(true)}} /></div>,
                        key: "rothContributions",
                        align: "left",
                        width: "70%"
                    },
                    {
                        content: <InputText type="number" align="right" value={rothContributions} setValue={setRothContributions} prefix={preTaxType === "$" ? "$" : null} suffix={preTaxType === "%" ? "%" : null}/>,
                        key: "rothContributions",
                        align: "left",
                        width: "20%"
                        
                    },
                ]
            }
        ]
    }

    const postTaxTableData = {
        title: "Post-tax",
        widgets: [<ToggleSwitch left="$" right="%" onChange={changePostTaxToogle}/>],
        headers: [
            {
                content: `Min: ${postTaxType === "$" ? "$0.00" : '0%'} | Max: ${postTaxType === "$" ? "$23,500.00" : '100%'}`,
                key: "name",
                align: "right",
                colspan: 2
            },
        ],
        rows: [
            {
                columns: [
                    {
                        content: <div className="table-item"><strong>Post-tax contributions</strong> <InfoIcon sx={{ cursor: "pointer", width: "24px", height: "24px", color: "#005f9e"}} onClick={() => { setOpenPostTaxDialog(true)}} /></div>,
                        key: "postTaxContributions",
                        align: "right",
                        width: "70%"
                    },
                    {
                        content: <InputText type="number" align="right" value={postTaxContributions} setValue={setPostTaxContributions} prefix={postTaxType === "$" ? "$" : null} suffix={postTaxType === "%" ? "%" : null}/>,
                        key: "postTaxContributions",
                        align: "left",
                        width: "20%"
                    },
                ]
            },
        ]
    }

    return (
    <>
    <div className="changes-contributions-container">

        <div className="changes-contributions-header">
            <div className="changes-contributions-header-step">STEP 1 OF 2</div>
            <div className="changes-contributions-header-title">How much do you want to contribute each pay period?</div>
        </div>
        <div className="changes-contributions-form">
            <InfoBanner>
                Enter the amount of each paycheck you wish to contribute (not to exceed applicable limits). Many financial professionals say you may need to save 10 to 15% of your salary each year to have enough to live on in retirement, however you should review your own financial situation to determine what makes sense for you. You can elect to contribute to one or more of the plan contribution types shown below. Contribution types (e.g., Roth) not listed are not offered by the plan. Your employer will match your contributions. <a onClick={() => { setOpenMatchingDialog(true)}}>View Matching Calculations</a>
                <br />
                <br />
                The total sum of Pre-Tax and Roth contributions must be less than or equal to the plan's maximum percentage (100%) values.
                <br />
                <br />
                The total percentage for all contribution types must not exceed 100%.
            </InfoBanner>
            <div className="changes-contributions-table-container">
                <Table data={preTaxTableData} />            
                <div className="changes-contributions-table-footer">
                    <div className="changes-contributions-table-footer-text">Total amount:</div>
                    <div className="changes-contributions-table-footer-amount">{totalPreTaxContributions}{preTaxType === "%" ? "%" : null}</div>
                </div>
            </div>
            <div className="changes-contributions-table-container">
                <Table data={postTaxTableData} />            
                <div className="changes-contributions-table-footer">
                    <div className="changes-contributions-table-footer-text">Total amount:</div>
                    <div className="changes-contributions-table-footer-amount">{totalPostTaxContributions}{postTaxType === "%" ? "%" : null}</div>
                </div>
            </div>
          
            <div className="wizard-footer">
                <Button color="primary" size="small" onClick={() => {dispatch(setActiveStep({value: 1}))}}>
                Next
                </Button>
            </div>

        </div>
    </div>
    <InfoDialog open={openMatchingDialog} onClose={() => setOpenMatchingDialog(false)} title="View Matching Calculations" content="Hello" />
    <InfoDialog open={openPreTaxDialog} onClose={() => setOpenPreTaxDialog(false)} title="What is Pre-Tax?" content="Contributions made to your account are not taxed before being invested and reduce your current taxable income. Taxes will be owed on your contributions and earnings when withdrawn at retirement." />
    <InfoDialog open={openRothDialog} onClose={() => setOpenRothDialog(false)} title="What is Roth?" content="Contributions made to your account are taxed before being invested. Qualified withdrawals at retirement, including any earnings, won’t be taxed." />
    <InfoDialog open={openPostTaxDialog} onClose={() => setOpenPostTaxDialog(false)} title="What is Post-Tax?" content="Contributions made to your account are taxed before being invested. When withdrawals are taken at retirement, only your earnings will be taxed." />
    </>
    )
}

export default ChangesStep;