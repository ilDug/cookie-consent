import "./styles/styles.scss";

import { createContainerElement, listen_open_link, render_dcc } from "./main-fn";
import {
    OPEN_LINK_SELECTOR,
    InitialConfigs,
    CNF,
} from "./config";



/** funzione principale */
export function dcc_init(c: Partial<InitialConfigs>) {
    let cnf: InitialConfigs = { ...CNF, ...c }

    console.log(cnf);

    /** crea il container */
    const dcc: HTMLDivElement = createContainerElement(cnf.selectorId);

    /** renderizza l'applicazione */
    let root = render_dcc(dcc, cnf);

    /** attiva il link */
    listen_open_link(OPEN_LINK_SELECTOR);
}


/** DECLARE GLOBAL FUNCTION */
(<any>window).dcc_init = dcc_init;




/** USAGE ************************************************************ */
// window.onload = async () => {
//     window.dcc_init({ diplayRejectAllBtn: false });
// }