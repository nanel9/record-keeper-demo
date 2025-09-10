import React from "react";
import Slide from "@mui/material/Slide";
import Dialog from "@mui/material/Dialog";
import Button from "../Button";
import "./styles.scss";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});

const InfoDialog = (props) => {

    const {open, onClose, title, content} = props;
    
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
            <div className="dialog-title">{title}</div>
            <div className="dialog-content">
              {content}
            </div>
          </div>
          <div className="dialog-footer">
            <Button color="primary" size="full" onClick={onClose}>
              Close
            </Button>
          </div>
        </div>
      </Dialog>
    );
};

export default InfoDialog;
