import React, { useState } from "react";
import { RadioButton, InputSelect, DatePicker } from "../../../components";
import "./styles.scss";

const AutomaticRebalancing = () => {
    
    const [rebalance, setRebalance] = useState("No");
    const [frequency, setFrequency] = useState("Quarterly");
    const [startDate, setStartDate] = useState("Next available business day");
    const [date, setDate] = useState(null);

    return (
        <div className="automatic-rebalancing-body">
                
                <div className="automatic-rebalancing-body-question">
                    Would you like to setup automatic rebalancing for your new portfolio?
                </div>

                <RadioButton
                    label="Yes"
                    name="rebalance"
                    value="Yes"
                    setValue={setRebalance}
                />
                <RadioButton
                    label="No"
                    name="rebalance"
                    value="No"
                    setValue={setRebalance}
                />

                {rebalance === "Yes" && (
                    <>
                        <InputSelect
                            label="How often would you like to rebalance your portfolio?"
                            name="rebalance"
                            value={frequency}
                            setValue={setFrequency}
                            options={[
                                { label: "Quarterly", value: "Quarterly" },
                                { label: "Semi-Annually", value: "Semi-Annually" },
                                { label: "Annually", value: "Annually" },
                            ]}
                        />

                        <InputSelect
                            label="When would you like automatic rebalancing to start?"
                            name="rebalance"
                            value={startDate}
                            setValue={setStartDate}
                            options={[
                                { label: "Next available business day", value: "Next available business day" },
                                { label: "Next plan date", value: "Next plan date" },
                                { label: "Specify a date", value: "Specify a date" },
                            ]}
                        />
                        {startDate === "Specify a date" && (
                            <DatePicker
                                label="Date"
                                type="date"
                                value={date}
                                setValue={setDate}
                            />
                        )}
                    </>
                )}

            </div>  
    );
};

export default AutomaticRebalancing;
