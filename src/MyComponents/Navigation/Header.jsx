import React from "react";
import "./style.css";

export const Header = () => {
    return (
        <div className="HEADER">
            <div className="NAV">
                <p className="LOGO">
                    <span className="text-wrapper">Dhruv</span>
                    <span className="span">&nbsp;</span>
                    <span className="text-wrapper-2">_cdlxv</span>
                </p>
                <div className="PAGE-LINKS">
                    <div className="frame">
                        <div className="div">PROJECTS</div>
                        <div className="div">ABOUT</div>
                        <div className="div">CONTACT</div>
                    </div>
                </div>
            </div>
        </div>
    );
};
