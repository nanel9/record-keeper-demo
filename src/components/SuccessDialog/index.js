import React from "react";
import Slide from "@mui/material/Slide";
import Dialog from "@mui/material/Dialog";
import Button from "../Button";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import "./styles.scss";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});

const SuccessDialog = (props) => {

    const {open, onClose, title, content, textButton} = props;
    
    return (
        <Dialog
            onClose={onClose}
            open={open}
            slots={{
            transition: Transition,
            }}
        >
        <div className="cg-info-dialog">
          <div className="dialog-body">
            <CheckCircleIcon sx={{ width: "80px", height: "80px", color: "#929292" }} />
            <div className="dialog-title">{title}</div>
            <div className="dialog-content">
              {content}
            </div>
          </div>
          <div className="dialog-footer">
            <Button color="primary" size="full" onClick={onClose}>
              {textButton}
            </Button>
          </div>
        </div>
      </Dialog>
    );
};

export default SuccessDialog;
