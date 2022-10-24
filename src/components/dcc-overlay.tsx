import * as React from "react";
import { useState, useEffect } from "react";
import { CookieCategories, CookiePreference } from "../classes";
import { ConsentCtrl } from "../controllers/";
import Banner from "./dcc-banner";
import Choice from "./dcc-choice";

type Props = {
    categories: CookieCategories;
    giveConsentTo: (consent: CookiePreference | "ALL" | "NONE") => void;
};

const DccOverlay: React.FC<Props> = ({ categories, giveConsentTo }) => {
    const [showBanner, setShowBanner] = useState(true);
    const [showChioice, setShowChoice] = useState(false);

    return (
        <div id="dcc-overlay">
            {showBanner && (
                <Banner
                    onAccept={giveConsentTo}
                    onChoose={() => {
                        setShowChoice(true);
                        setShowBanner(false);
                    }}
                />
            )}

            {showChioice && (
                <Choice
                    categories={categories}
                    onAccept={giveConsentTo}
                    onClose={() => {
                        setShowBanner(true);
                        setShowChoice(false);
                    }}
                />
            )}
        </div>
    );
};

export default DccOverlay;
