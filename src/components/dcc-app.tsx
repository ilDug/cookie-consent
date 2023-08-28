import * as React from "react";
import { useState, useEffect } from "react";
import { CookiePreference } from "../classes";
import { SCRIPT_SELECTOR } from "../config";
import { ConsentCtrl, ScriptsCtrl } from "../controllers/";
import DccOverlay from "./dcc-overlay";
import { DccSaveEvent } from '../events';

type Props = {
    consentCtrl: ConsentCtrl
};

const DccApp: React.FC<Props> = ({ consentCtrl }) => {
    const [show, setShow] = useState(false);
    const scriptCtrl = new ScriptsCtrl(SCRIPT_SELECTOR);

    /** verifica se mostrare il banner */
    useEffect(() => {
        setShow(consentCtrl.shouldShowBanner());
    }, []);

    /** abilita il listener per l'evento DCC-OPEN */
    useEffect(() => {
        const handleForceOpen = (e) => setShow(true);

        document.addEventListener("dcc-open", handleForceOpen);

        /** quando chiude rimuove l'ascolto del listener */
        return () => {
            document.removeEventListener("dcc-open", handleForceOpen);
        };
    }, []);

    /** abilita gli scripts all'avvio se le preferenze sono già salvate */
    useEffect(() => {
        console.log("activating scripts on saved consent preferences");
        !consentCtrl.shouldShowBanner() && scriptCtrl.activate(consentCtrl.preferences);
    }, []);

    const handleAccetp = (prefs: CookiePreference | "ALL" | "NONE") => {
        let preferences: CookiePreference = {};
        switch (prefs) {
            case "ALL":
                for (const key in consentCtrl.defaultPreferences) {
                    preferences[key] = true;
                }
                break;

            case "NONE":
                for (const key in consentCtrl.defaultPreferences) {
                    preferences[key] = false || consentCtrl.defaultCategories[key].consent;
                }
                break;
            default:
                preferences = prefs;
                break;
        }

        /** crea l'istanza del consent */
        let consent = consentCtrl.fromPreferenceToConsent(preferences);
        console.log(consent);

        /** lo salva nei cookies */
        consentCtrl.setConsentInCookies(consent);

        /** chiude il banner */
        setShow(false);
        console.log("activate scripts on giving consent ");
        scriptCtrl.activate(consentCtrl.preferences);

        /** emette  l'evento di salvataggio */
        document.dispatchEvent(DccSaveEvent);
    };

    return (
        <>
            {show && (
                <DccOverlay categories={consentCtrl.categories} giveConsentTo={handleAccetp} />
            )}
        </>
    );
};

export default DccApp;
