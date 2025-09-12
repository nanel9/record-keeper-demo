import React, { useState } from "react";      
import { useDispatch, useSelector } from "react-redux";
import { setActiveMenuId } from "../../../state/nav/navSlice";
import classNames from "classnames";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { navitems } from "./nav";
import "./styles.scss";

const MainNav = () => {

    const [isOpened, setIsOpened] = useState(false);
    const [menuId, setMenuId] = useState(null);
    const [secondaryMenu, setSecondaryMenu] = useState([]);
    const dispatch = useDispatch();
    const activeMenuId = useSelector((state) => state.nav.activeMenuId);


    const closeSecondaryMenu = (id) => {
        dispatch(setActiveMenuId({id: id}));
        setIsOpened(false);
    }

    const opensSecondaryMenu = (value) => {

        if(!value.children) {
            return;
        }

        if(value.id === menuId)
            setIsOpened(!isOpened);
        else {
            setMenuId(value.id);
            setIsOpened(true);
            setSecondaryMenu(value.children);
        }
    }

    return (
        <>
            <div className="main-nav">
                {navitems.map((item, index) => (
                    <div key={index} >  
                        {item.children ? (
                            <div key={index} className={classNames("nav-menu", {opened: isOpened && menuId === item?.id, active: activeMenuId === item?.id})}  onClick={() => opensSecondaryMenu(item)}>
                                {item.title}
                                {item.children && (
                                    <span className="nav-menu-icon">
                                        <KeyboardArrowDownIcon sx={{ width: 24, height: 24 }}/>
                                    </span>
                                )}
                            </div>
                        ) : (
                            <div key={index} className={classNames("nav-menu", {active: activeMenuId === item?.id})}>
                                <a href={item.url} onClick={() => dispatch(setActiveMenuId({id: item.id}))}>{item.title}</a>
                            </div>
                        )}
                    </div>
                ))}
            </div>

            <div className={classNames("secondary-nav", {opened: isOpened})}>
                
                {menuId === "quick-links" && (
                    <>
                    <div className="quick-links-title">Take action</div>
                    <div className="quick-links-title"></div>
                    <div className="quick-links-title">Review</div>
                    </>
                )}
                {secondaryMenu.map((item, index) => (
                    <div className="secondary-nav-menu-item" key={index}>
                        {item.title && (
                            <a href={item.url} onClick={() => closeSecondaryMenu(item.id)}>
                                {item.icon}
                                {item.title}
                            </a>
                        )}
                    </div>
                ))}
            </div> 
        </>
    );
};

export default MainNav;
