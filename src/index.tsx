import React from "react";
// import ReactDOM from "react-dom";
import { createRoot } from "react-dom/client";
import "./styles/styles.scss";

import DccApp from "./components/dcc-app";
import { CONSENT_COOKIE_NAME, POLICY_VERSION, UPDATE_FREQUENCY } from "./config";

window.onload = async () => {
    console.log("DAG cookie-consent starting...");

    /** creazione del container */
    init_dcc(CONSENT_COOKIE_NAME, POLICY_VERSION);

    // const cookieName = "dccenabled";
    // const scriptAttr = "dcc-script";
    // const scriptAttr_ = "[dcc-script]";
};

function init_dcc(consentCookieName: string, policyVersion: Date) {
    const dcc: HTMLDivElement = document.createElement("div");
    dcc.id = "dcc-container";
    document.body.append(dcc);
    const root = createRoot(dcc!);
    root.render(
        <DccApp
            consentCookieName={consentCookieName}
            policyVersion={policyVersion}
            frequency={UPDATE_FREQUENCY}
        />
    );
}
