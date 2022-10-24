import * as React from "react";
import { useState, useEffect } from "react";
import { CookiePreference } from "../classes";
import { ConsentCtrl } from "../controllers/";
import DccOverlay from "./dcc-overlay";
type Props = { consentCookieName: string };

const DccApp: React.FC<Props> = ({ consentCookieName }) => {
    const [show, setShow] = useState(false);
    let main: ConsentCtrl = new ConsentCtrl(consentCookieName, new Date(2022, 10, 23));

    useEffect(() => {
        console.log("enablicng DCC");
        console.log(main.preferences);
        setShow(main.shouldShowBanner());
    }, []);

    const handleAccetp = (consent: CookiePreference | "ALL" | "NONE") => {
        console.log(consent);
    };

    return <>{show && <DccOverlay categories={main.categories} giveConsentTo={handleAccetp} />}</>;
};

export default DccApp;
