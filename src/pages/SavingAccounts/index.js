import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { InputText, Wizard, RoundButton, Button, InputSelect } from "../../components";
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import "./styles.scss"; 


const SavingAccounts = () => {
    const navigate = useNavigate();
    const savingAccounts = useSelector((state) => state.savingAccounts);
    const [manualAccounts, setManualAccounts] = useState(Object.assign([], savingAccounts.filter((account) => account.isKnownAccount === false)));
    const knownAccounts = Object.assign([], savingAccounts.filter((account) => account.isKnownAccount === true));

    const handleAddAccount = () => {
        setManualAccounts([...manualAccounts, {
            name: "Other",
            type: "",
            balance: "$0.00",
            protected: "$0.00",
            isKnownAccount: false
        }]);
    };

    const handleDeleteAccount = (index) => {
        setManualAccounts(manualAccounts.filter((account, i) => i !== index));
    };

    const handleSaveAccount = () => {
        navigate("/goals-calculator");
    };

    const accountTypeOptions = [
        { value: "IRA", label: "IRA" },
        { value: "Stock Account", label: "Stock Account" },
        { value: "Certificate of Deposit", label: "Certificate of Deposit" },
        { value: "Checking Account", label: "Checking Account" },
        { value: "Savings Account", label: "Savings Account" },
        { value: "Other Investment Type", label: "Other Investment Type" },
        { value: "Monthly Retirement Income", label: "Monthly Retirement Income" },
    ];
    
    return (
        <Wizard title="My Accounts" urlReturn="/goals-calculator" noSteps>
            <div className="saving-accounts-container">
                <div className="saving-accounts-content">
                    <div className="saving-accounts-title">Manage accounts</div>
                    <div className="saving-accounts-list">  

                        <div className="saving-account-known-account">
                            <div className="saving-account-title">Known Accounts</div>
                            <div className="saving-account-list-content">
                                
                                    {knownAccounts.map((account, index) => (
                                        <div className="saving-account-item" key={index}>{account.name} | {account.type} | {account.balance}</div>
                                    ))}
                            </div>
                        </div>

                        <div className="saving-account-manu-account">
                            <div className="saving-account-title">Manual Accounts</div>
                            <div className="saving-account-list-content">
                                {manualAccounts.map((account, index) => (
                                        <div className="saving-account-item" key={index}>
                                            <div className="saving-account-item-form">
                                                <InputSelect options={accountTypeOptions} value={account.type} label="Account Type" name="accountType" />
                                                <InputText label="Account Name" name="accountName" initialValue={account.name} />
                                                <InputText align="right" label="Balance" prefix="$" name="accountBalance" initialValue={account.balance} />
                                            <div className="saving-account-item-button">
                                                <RoundButton icon={<DeleteForeverIcon sx={{ width: "24px", height: "24px", color: "#fff" }} />} onClick={() => handleDeleteAccount(index)}/>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="saving-account-add-account">
                            <Button size="small" onClick={handleAddAccount}>
                                <AddCircleIcon sx={{ width: "16px", height: "16px", color: "#fff" }} />
                                Add Manual Account
                            </Button>
                        </div>

                        <div className="saving-account-save-account">
                            <Button size="small" onClick={handleSaveAccount}>
                                Save
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </Wizard>
    );
};

export default SavingAccounts;