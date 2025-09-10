import React, {useState } from "react";
import InfoIcon from '@mui/icons-material/Info';
import { Tooltip, ClickAwayListener } from "@mui/material";
import "./styles.scss";

const InfoTooltip = (props) => {

    const {placement = "top", title } = props;
    const [open, setOpen] = useState(false);

    const handelTooltipOpen = () => {
        setOpen(true);
    };

    const handleTooltipClose = () => {
        setOpen(false);
    };

    return (
        <div className="cg-info-tooltip">
            <ClickAwayListener onClickAway={handleTooltipClose}>
                <Tooltip 
                    title={title} 
                    arrow 
                    placement={placement} 
                    open={open}  
                    disableFocusListener
                    disableHoverListener
                    disableTouchListener>
                    <div className="info-tooltip-button" onClick={handelTooltipOpen}>
                        <InfoIcon sx={{ width: 28, height: 28, color: "#005f9e" }} />
                    </div>
                </Tooltip>
            </ClickAwayListener>
        </div>
    );
};

export default InfoTooltip;