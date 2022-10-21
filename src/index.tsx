import Cookies from "js-cookie";
import { filter, map, take, tap } from "rxjs";
import { setConsentInCookies, activateScripts } from "./controllers";
import React from "react";
// import ReactDOM from "react-dom";
    import { createRoot } from "react-dom/client";
import "./styles/styles.scss";

import DccApp from './components/dcc-container'
// import { Modal } from 'bootstrap'

window.onload = async () => {
    console.log("DAG cookie-consent starting...");

    /** creazione del container */
    const dcc: HTMLDivElement = document.createElement("div");
    dcc.id = "dcc-container";
    document.body.append(dcc);
    const root = createRoot(dcc!); 
    root.render(<DccApp />);


    // const cookieName = "dccenabled";
    // const scriptAttr = "dcc-script";
    // const scriptAttr_ = "[dcc-script]";

    /** controlla i cookies */
    // const consent = +Cookies.get(cookieName);
    // console.log(consent);

    // if (consent == 0) {
    //     /** mostra banner */
    //     const b = new Banner();

    //     b.open();

    //     b.onConsentGiver$
    //         .pipe(
    //             take(1),
    //             filter((consent) => consent),
    //             /** salva i cookies */
    //             map(setConsentInCookies(cookieName)),
    //             /** attiva scripts */
    //             map(activateScripts(scriptAttr_))
    //             /** registra la scelta nel database */
    //         )
    //         .subscribe();
    // }
};
