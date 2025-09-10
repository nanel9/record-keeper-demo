/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Wizard } from '../../components';
import ChangesStep from './ChangesStep';
import VerifyStep from './VerifyStep';
import "./styles.scss";

const ChangeContributions = () => {
    
    return (    
        <Wizard title="Change contributions" urlReturn="/contributions" >
            <ChangesStep />
            <VerifyStep />
        </Wizard>         
    );
};

export default ChangeContributions;
