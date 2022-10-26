import React from "react";
// import ReactDOM from "react-dom";
import { createRoot, Root } from "react-dom/client";
import "./styles/styles.scss";
import { DccOpenEvent } from "./classes";
import DccApp from "./components/dcc-app";
import {
    CONSENT_COOKIE_NAME,
    POLICY_VERSION,
    UPDATE_FREQUENCY,
    OPEN_LINK_SELECTOR,
} from "./config";

window.onload = async () => {
    console.log("DAG cookie-consent starting...");

    const dcc: HTMLDivElement = createContainerElement();
    let root = render_dcc(dcc, CONSENT_COOKIE_NAME, POLICY_VERSION);

    const openLink: HTMLAnchorElement = document.querySelector(OPEN_LINK_SELECTOR);
    if (openLink) {
        openLink.style.cursor = "pointer";
        openLink.addEventListener("click", (e) => {
            e.preventDefault();
            /** emette l'evento per forzare l'apertura del banner */
            document.dispatchEvent(DccOpenEvent);
        });
    }

    // const cookieName = "dccenabled";
    // const scriptAttr = "dcc-script";
    // const scriptAttr_ = "[dcc-script]";
};

function render_dcc(el: HTMLDivElement, consentCookieName: string, policyVersion: Date): Root {
    /** creazione del container */
    const root: Root = createRoot(el!);
    root.render(
        <DccApp
            consentCookieName={consentCookieName}
            policyVersion={policyVersion}
            frequency={UPDATE_FREQUENCY}
        />
    );
    return root;
}

function createContainerElement() {
    const dcc: HTMLDivElement = document.createElement("div");
    dcc.id = "dcc-container";
    document.body.append(dcc);
    return dcc;
}

