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
};

const DccApp: React.FC<Props> = ({ consentCookieName, policyVersion, frequency }) => {
    const [show, setShow] = useState(false);
    let main: ConsentCtrl = new ConsentCtrl(consentCookieName, frequency, policyVersion);

    useEffect(() => {
        console.log("open DCC-APP");
        setShow(main.shouldShowBanner());
    }, []);

    useEffect(() => {
        const handleForceOpen = (e) => setShow(true);

        document.addEventListener("dcc-open", handleForceOpen);

        /** quando chiude rimuove l'ascolto del listener */
        return () => {
            console.log("removing dcc-open listener");
            document.removeEventListener("dcc-open", handleForceOpen);
        };
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
