import * as React from "react";
import { useState, useEffect } from "react";
import { CookiePreference } from "../classes";
import { ConsentCtrl } from "../controllers/";
import DccOverlay from "./dcc-overlay";




type Props = { consentCookieName: string; policyVersion: Date; frequency: number };

const DccApp: React.FC<Props> = ({ consentCookieName, policyVersion, frequency }) => {
    const [show, setShow] = useState(false);
    let main: ConsentCtrl = new ConsentCtrl(consentCookieName, frequency, policyVersion);

    useEffect(() => {
        console.log("enablicng DCC");
        console.log(main.preferences);
        setShow(main.shouldShowBanner());
    }, []);

    const handleAccetp = (prefs: CookiePreference | "ALL" | "NONE") => {
        let preferences: CookiePreference = {};
        switch (prefs) {
            case "ALL":
                for (const key in main.defaultPreferences) {
                    preferences[key] = true;
                }
                break;

            case "NONE":
                for (const key in main.defaultPreferences) {
                    preferences[key] = false;
                }
                break;
            default:
                preferences = prefs;
                break;
        }

        let consent = main.fromPreferenceToConsent(preferences);
        console.log(consent);
    };

    return <>{show && <DccOverlay categories={main.categories} giveConsentTo={handleAccetp} />}</>;
};

export default DccApp;
