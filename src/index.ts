import "./styles/styles.scss";

import { createContainerElement, listen_open_link, render_dcc } from "./main-fn";
import {
    CONSENT_COOKIE_NAME,
    POLICY_VERSION,
    UPDATE_FREQUENCY,
    OPEN_LINK_SELECTOR,
} from "./config";


/** funzione principale */
export function dcc_init(cnf: { selectorId?: string }) {
    cnf.selectorId = cnf.selectorId ?? "dcc-container";

    /** crea il container */
    const dcc: HTMLDivElement = createContainerElement(cnf.selectorId);

    /** renderizza l'applicazione */
    let root = render_dcc(dcc, CONSENT_COOKIE_NAME, POLICY_VERSION, UPDATE_FREQUENCY);

    /** attiva il link */
    listen_open_link(OPEN_LINK_SELECTOR);
}


/** DECLARE GLOBAL FUNCTION */
(<any>window).dcc_init = dcc_init;

// window.onload = async () => {
//     console.log("DAG cookie-consent starting...");

//     // dcc_init({
//     //     selectorId: "dcc-container",
//     // });
// };