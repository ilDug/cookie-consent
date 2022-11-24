import { InitialConfigs, CNF, OPEN_LINK_SELECTOR } from './src/config';
import { createContainerElement, render_dcc, listen_open_link } from './src/main-fn';

/**
 * USAGE
 *  window.onload = async () => {
 *    dcc_init({ diplayRejectAllBtn: false });
 *  }
 */
export function dcc(c: Partial<InitialConfigs>) {
    let cnf: InitialConfigs = { ...CNF, ...c };

    console.log(cnf);

    /** crea il container */
    const dcc: HTMLDivElement = createContainerElement(cnf.selectorId);

    /** renderizza l'applicazione */
    let root = render_dcc(dcc, cnf);

    /** attiva il link */
    listen_open_link(OPEN_LINK_SELECTOR);
}