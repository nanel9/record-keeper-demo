import React from 'react';
import { Header, InfoBanner } from '../../components';
import ContributionsDetails from './Details';
import "./styles.scss";

const headerButton = { label: "Change Contributions", url: "/change-contributions" }

const Contributions = () => {
    return (
        <div className="contributions-container">
            <div className="contributions-content">
                <Header title="Contributions" button={headerButton}/>

                <div className="contributions-card">
                    <div className="contributions-card-content">
                        <div className="contributions-header">My contributions</div>
                        <InfoBanner>
                            Below is a breakdown of your account contributions.
                            <br />
                            Please note that contribution elections made via paper forms may not be reflected here.
                        </InfoBanner>
                    </div>
                </div>

                <div className="contributions-card">
                    <div className="contributions-card-content">
                        <ContributionsDetails />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contributions;