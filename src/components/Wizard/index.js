/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState, Children } from "react";
import Slide from "@mui/material/Slide";
import Dialog from "@mui/material/Dialog";
import Button from "../Button";
import { useNavigate } from "react-router-dom";
import "./styles.scss";
import classNames from "classnames";



const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});

const WizardFooter = (props) => {
  const { activeStep, handleBack, handleNext } = props;
  return (
    <div className="wizard-footer">
    {activeStep > 0 && (
      <Button color="secondary" size="small" onClick={handleBack}>
        Back
      </Button>
    )}
    <Button color="primary" size="small" onClick={handleNext}>
      Next
    </Button>
  </div>
  );
};

const Wizard = (props) => {
  const { children, title, urlReturn, noSteps = false } = props;
  const [openDialog, setOpenDialog] = useState(false);
  const [activeStep, setActiveStep] = useState(0);
  const navigate = useNavigate();

  const handleCloseDialog = (event, reason) => {
    if (reason === "backdropClick") return;
    setOpenDialog(false);
  };

  const handleOpenDialog = () => {
    setOpenDialog(true);
  };

  const handleReturn = () => {
    setOpenDialog(false);
    navigate(urlReturn);
  };

  const handleNext = () => {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  useEffect(() => {
    document.getElementById("cg-bottom-bar").style.display = "none";

    return () => {
      document.getElementById("cg-bottom-bar").style.display = "block";
    };
  }, []);

  return (
    <>
      <div className="cg-wizard">
        <div className="wizard-header-container">
          <div className="wizard-header">
            <div className="wizard-space"></div>
            <div className="wizard-title">{title}</div>
            <div className="wizard-close">
              <a onClick={handleOpenDialog}>Cancel</a>
            </div>
          </div>
        </div>
        <div className="wizard-content">
          <div className="wizard-steps">
            {Children.map(children, (child, index) => {
              return <div className={classNames('wizard-step', { active: index === activeStep })} key={index}>{child}</div>;
            })}
          </div>
        </div>
        {!noSteps && <WizardFooter activeStep={activeStep} handleBack={handleBack} handleNext={handleNext} />}
      </div>

      <Dialog
        onClose={handleCloseDialog}
        open={openDialog}
        slots={{
          transition: Transition,
        }}
      >
        <div className="wizard-dialog-container">
          <div className="wizard-dialog-body">
            <div className="wizard-dialog-title">Are you sure?</div>
            <div className="wizard-dialog-content">
              You are about to leave the current step. Any unsaved data will be
              lost. Are you sure you want to proceed?
            </div>
          </div>
          <div className="wizard-dialog-footer">
            <Button color="secondary" size="full" onClick={handleCloseDialog}>
              No
            </Button>
            <Button color="primary" size="full" onClick={handleReturn}>
              Yes
            </Button>
          </div>
        </div>
      </Dialog>
    </>
  );
};

export default Wizard;
