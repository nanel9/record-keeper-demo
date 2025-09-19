/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { resetWithdrawal } from "../../state/withdrawal/withdrawalSlice";
import { Wizard } from "../../components";
import Overview from "./Overview";
import Options from "./Options";
import Reason from "./Reason";
import Assets from "./Assets";
import Rollover from "./Rollover";
import Beneficiaries from "./Beneficiaries";
import Review from "./Review";
import "./styles.scss";


const WithdrawalRequest = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    return () => {
     dispatch(resetWithdrawal()); 
    }
  }, []);

  return (
    <Wizard title="Request a Withdrawal" urlReturn="/loans-and-withdrawals">
      {/* Step 0 */}
      <Overview />
      {/* Step 1 */}
      <Options />
      {/* Step 2 */}
      <Reason />
      {/* Step 3 */}
      <Assets />
      {/* Step 4 */}
      <Rollover />
      {/* Step 5 */}
      <Beneficiaries />
      {/* Step 6 */}
      <Review />
    </Wizard>
  );
};

export default WithdrawalRequest;
