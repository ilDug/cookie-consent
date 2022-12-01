import { CookiePreference } from './src/classes';
import { InitialConfigs, CNF, OPEN_LINK_SELECTOR } from './src/config';
import { ConsentCtrl } from './src/controllers';
import { createContainerElement, render_dcc, listen_open_link } from './src/main-fn';

/**
 * USAGE
 * 
    window.onload = async () => {
        const dcc = new Dcc({
            selectorId: "dcc-container",
            diplayRejectAllBtn: false,
            policyVersion: new Date("2022-11-30"),
            cookiePolicyLink: "/privacy/cookies"
        });
    }
 */
export class Dcc {
    constructor(c: Partial<InitialConfigs>) {
        /** imposta la configurazione */
        this.cnf = { ...CNF, ...c }
        /** crea il controller */
        this.consentCtrl = new ConsentCtrl(this.cnf);

        this.run(this.cnf, this.consentCtrl)
    }



    public cnf: InitialConfigs
    public consentCtrl: ConsentCtrl



    /**inizializza il banner ed il consenso */
    private run(cnf: InitialConfigs, consentCtrl: ConsentCtrl) {
        console.log(cnf);

        /** crea il container */
        const dcc: HTMLDivElement = createContainerElement(cnf.selectorId);

        /** renderizza l'applicazione */
        let root = render_dcc(dcc, consentCtrl, cnf);

        /** attiva il link */
        listen_open_link(OPEN_LINK_SELECTOR);
    }



    /** indica se è stato dato il consenso per una categoria */
    public isConsentGiven(category: string): boolean {
        const pref: CookiePreference = this.consentCtrl.preferences
        return pref[category]
    }
}