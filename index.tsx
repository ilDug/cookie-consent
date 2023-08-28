import { CookiePreference } from './src/classes';
import { InitialConfigs, CNF, OPEN_LINK_SELECTOR, ConfigsCtx } from './src/config';
import { ConsentCtrl } from './src/controllers';
import { createRoot, Root } from "react-dom/client";
import DccApp from "./src/components/dcc-app";
import { DccOpenEvent } from './src/events';

/**
 * USAGE
 * ```
    window.onload = async () => {
        const dcc = new Dcc({
            // override default configs
            selectorId: "dcc-container",
            diplayRejectAllBtn: true,
            policyVersion: new Date("2022-11-30"),
            cookiePolicyLink: "/privacy/cookies"
        });
    }
    ```

    DEFAULT CONFIGS:

    ```
        selectorId: "dcc-container",
        diplayRejectAllBtn: true,
        updateFrequency: (1000 * 60 * 60 * 24 * 180),
        policyVersion: new Date(),
        consentCookieName: "dcc",
        cookiePolicyLink: "/privacy/cookies"
    ```

    Per ascoltare l'evento di salvataggio del consenso (DCCSaveEvent): 
    ```
        document.addEventListener("dcc-save", (e) => {
            console.log("Consent Salvato");
        })
    ```
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

        /** Crea il div dove verrà renderizzata l'applicazione,  utilizzando l'ID della configurazione */
        const dcc: HTMLDivElement = document.createElement("div");
        dcc.id = cnf.selectorId;
        document.body.append(dcc);




        /** renderizza l'applicazione */
        const root: Root = createRoot(dcc);
        root.render(
            <ConfigsCtx.Provider value={cnf} >
                <DccApp consentCtrl={consentCtrl} />
            </ConfigsCtx.Provider>
        );





        /** aggiunge un listener al link per l'apertura dell banner */
        const openLinks: HTMLAnchorElement[] = [...document.querySelectorAll(OPEN_LINK_SELECTOR)] as HTMLAnchorElement[];
        openLinks.forEach(l => {
            l.style.cursor = "pointer";
            l.addEventListener("click", (e) => {
                e.preventDefault();
                /** emette l'evento per forzare l'apertura del banner */
                document.dispatchEvent(DccOpenEvent);
            });
        })
    }



    /** indica se è stato dato il consenso per una categoria */
    public isConsentGiven(category: string): boolean {
        const pref: CookiePreference = this.consentCtrl.preferences
        return pref[category]
    }
}



/** esporta gli eventi CUSTOM */
export * from './src/events';

/** ESEMPIO di ascolto dell'evento DCCSaveEvent */
// document.addEventListener("dcc-save", (e) => {
//     console.log("Consent Salvato");
// })