import DccApp from "./components/dcc-app";
import React, { Context } from "react";
// import ReactDOM from "react-dom";
import { createRoot, Root } from "react-dom/client";
import { DccOpenEvent } from "./classes";
import { InitialConfigs, ConfigsCtx } from "./config";

/**
 * Crea il div dove verrà renderizzata l'applicazione
 * @param selectorId individua l'elemento in cui verrà renderizzato il Component principale
 */
export function createContainerElement(selectorId: string) {
    const dcc: HTMLDivElement = document.createElement("div");
    dcc.id = selectorId;
    document.body.append(dcc);
    return dcc;
}

/**
 * render root
 * @param el
 * @param consentCookieName
 * @param policyVersion
 * @returns
 */
export function render_dcc(el: HTMLDivElement, cnf: InitialConfigs): Root {
    /** creazione del container */
    const root: Root = createRoot(el!);
    root.render(
        <ConfigsCtx.Provider value={cnf}>
            <DccApp
                consentCookieName={cnf.consentCookieName}
                policyVersion={cnf.policyVersion}
                frequency={cnf.updateFrequency}
            />
        </ConfigsCtx.Provider>
    );
    return root;
}

/** aggiunge un listener al link per aprile il banner */
export function listen_open_link(selector: string) {
    const openLink: HTMLAnchorElement = document.querySelector(selector);
    if (openLink) {
        openLink.style.cursor = "pointer";
        openLink.addEventListener("click", (e) => {
            e.preventDefault();
            /** emette l'evento per forzare l'apertura del banner */
            document.dispatchEvent(DccOpenEvent);
        });
    }
}