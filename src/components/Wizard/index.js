/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState, Children } from "react";
import { useSelector, useDispatch } from "react-redux";
import { reset } from "../../state/wizard/wizardSlice";
import Slide from "@mui/material/Slide";
import Dialog from "@mui/material/Dialog";
import Button from "../Button";
import { useNavigate } from "react-router-dom";
import "./styles.scss";
import classNames from "classnames";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});

const Wizard = (props) => {
  const { children, title, urlReturn } = props;
  const [openDialog, setOpenDialog] = useState(false);
  const navigate = useNavigate();
  const activeStep = useSelector((state) => state.wizard.activeStep);
  const subTitle = useSelector((state) => state.wizard.subTitle);
  const dispatch = useDispatch();

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

  useEffect(() => {
    document.getElementById("cg-bottom-bar").style.display = "none";

    return () => {
      dispatch(reset());
      document.getElementById("cg-bottom-bar").style.display = "block";
    };
  }, []);

  return (
    <>
      <div className="cg-wizard">
        <div className="wizard-header-container">
          <div className="wizard-header">
            <div className="wizard-space"></div>
            <div className="wizard-title">
              {title}
              {subTitle && (
                <div className="wizard-sub-title">{subTitle}</div>
              )}
            </div>
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
