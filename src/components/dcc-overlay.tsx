import * as React from "react";
import { useState, useEffect } from "react";
import Banner from "./dcc-banner";

type Props = {};

const DccOverlay: React.FC<Props> = (props) => {
    const [showBanner, setShowBanner] = useState(true);
    const [showChioice, setShowChoice] = useState(false);

    const handleLog = (x) => {
        console.log(x);
    };

    const handleAccetp = () => {};

    return (
        <div id="dcc-overlay">
            {showBanner && (
                <Banner
                    onAccept={(x) => setShowBanner(false)}
                    onChoose={() => setShowChoice(true)}
                />
            )}

            {showChioice && <p>choiche</p>}
        </div>
    );
};

export default DccOverlay;
