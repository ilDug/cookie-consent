import * as React from "react";
import { useState, useEffect } from "react";

type Props = { title: string; index?: number; children?: React.ReactNode };

const CookieCategory: React.FC<Props> = ({ title, index, children }) => {
    const [details, setDetails] = useState(false);
    const handleId = `handle-${index}`;
    const toggleId = `toggle-${index}`;

    // const toggleDetails = ()

    return (
        <div className="setting-box">
            <div className={`s-box-header ${details ? "open" : "closed"}`}>
                <span className="handle">
                    <input
                        type="checkbox"
                        checked={details}
                        id={handleId}
                        onChange={() => setDetails(!details)}
                    />
                    <label htmlFor={handleId}> </label>
                </span>
                <span className="grow">
                    {index} - {title}
                </span>

                <span className="toggle">
                    <input type="checkbox" id={toggleId} />
                    <label htmlFor={toggleId}>Toggle</label>
                </span>
            </div>
            <div className={`s-box-content ${details ? "open" : "closed"}`}>{children}</div>
        </div>
    );
};

export default CookieCategory;
