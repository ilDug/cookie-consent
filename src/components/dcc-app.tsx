import * as React from "react";
import { useState, useEffect } from "react";
import { CookiePreference } from "../classes";
import { ConsentCtrl } from "../controllers/";
import { CATEGORIES_DEFAULTS } from "../lib/categories";
import DccOverlay from "./dcc-overlay";

type Props = {
    consentCookieName: string;
    policyVersion: Date;
    frequency: number;
    force?: boolean;
};

const DccApp: React.FC<Props> = ({
    consentCookieName,
    policyVersion,
    frequency,
    force = false,
}) => {
    const [show, setShow] = useState(force);
    let main: ConsentCtrl = new ConsentCtrl(consentCookieName, frequency, policyVersion);

    useEffect(() => {
        console.log("enablicng DCC-APP");
        console.log("display forced", force);
        setShow(main.shouldShowBanner() || force);
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
                    preferences[key] = false || main.defaultCategories[key].consent;
                }
                break;
            default:
                preferences = prefs;
                break;
        }

        /** crea l'istanza del consent */
        let consent = main.fromPreferenceToConsent(preferences);
        console.log(consent);

        /** lo salva nei cookies */
        main.setConsentInCookies(consent);

        /** chiude il banner */
        setShow(false);
    };

    return <>{show && <DccOverlay categories={main.categories} giveConsentTo={handleAccetp} />}</>;
};

export default DccApp;
