import React from "react";
import css from './Section.module.css'


const Section = ({ title, children }) => {
    return (
        <div>
            {title && <div>{title}</div>}
            {children}
        </div>
    );
}

export default Section;