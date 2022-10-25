import * as React from "react";
import { useState, useEffect } from "react";
import { CookieCategories, CookiePreference } from "../classes";
import { CATEGORIES_DEFAULTS } from "../lib/categories";
import CookieCategory from "./choice/cookie-category";

type Props = {
    categories: CookieCategories;
    onClose: () => void;
    onAccept: (consent: CookiePreference | "ALL" | "NONE") => void;
};

const Choice: React.FC<Props> = ({ categories, onClose, onAccept }) => {
    const [cats, setCats] = useState(categories);

    const handleConsentChange = (category: string, consent: boolean) => {
        let c = { ...cats };
        c[category].consent = consent;
        setCats(c);
    };

    const expressPreferences = (): CookiePreference => {
        let prefereces: CookiePreference = {};
        for (const cat in cats) {
            prefereces[cat] = cats[cat].consent;
        }
        return prefereces;
    };

    return (
        <div id="dcc-settings">
            <div id="dcc-s-body">
                <div id="dcc-s-content">
                    <span id="dcc-s-close" onClick={onClose}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                            <path d="M315.3 411.3c-6.253 6.253-16.37 6.253-22.63 0L160 278.6l-132.7 132.7c-6.253 6.253-16.37 6.253-22.63 0c-6.253-6.253-6.253-16.37 0-22.63L137.4 256L4.69 123.3c-6.253-6.253-6.253-16.37 0-22.63c6.253-6.253 16.37-6.253 22.63 0L160 233.4l132.7-132.7c6.253-6.253 16.37-6.253 22.63 0c6.253 6.253 6.253 16.37 0 22.63L182.6 256l132.7 132.7C321.6 394.9 321.6 405.1 315.3 411.3z" />
                        </svg>
                    </span>
                    <h2>Preferenze relative al tuo consenso nell'utilizzo dei cookies</h2>

                    <h3>Impostazioni</h3>
                    <p>
                        Quando visitate il nosrtro sito web, questo può memorizzare o recuperare
                        informazioni sul vostro browser, per lo più sotto forma di cookie. Queste
                        informazioni possono riguardare l'utente, le sue preferenze o il suo
                        dispositivo e vengono utilizzate principalmente per far funzionare il sito
                        come ci si aspetta. Di solito le informazioni non identificano direttamente
                        l'utente, ma possono offrire un'esperienza web più personalizzata. Poiché
                        rispettiamo il vostro diritto alla privacy, potete scegliere di non
                        consentire alcuni tipi di cookie. Per saperne di più e gestire le vostre
                        preferenze, fate clic sulle voci delle diverse categorie. Si noti che il
                        blocco di alcuni tipi di cookie può influire sulla vostra esperienza del
                        sito e sui servizi che siamo in grado di offrire. Per ottenere ulteriori
                        informazioni in merito all'utilità e al funzionamento di tali strumenti di
                        tracciamento, fai riferimento alla{" "}
                        <a href="/policy/cookies">cookie policy</a>.
                    </p>
                    <React.Fragment>
                        {Object.entries(cats).map(([name, cat], i) => (
                            <CookieCategory
                                cat={cat}
                                index={i}
                                key={name}
                                consentChange={(consent) => handleConsentChange(name, consent)}
                            >
                                <p>{cat.description}</p>
                            </CookieCategory>
                        ))}
                    </React.Fragment>
                    <div className="box">
                        <h4>More Information</h4>
                        <p>
                            Il seguente pannello ti consente di esprimere le tue preferenze di
                            consenso alle tecnologie di tracciamento che adottiamo per offrire le
                            funzionalità e svolgere le attività sotto descritte. Puoi rivedere e
                            modificare le tue scelte in qualsiasi momento. Tieni presente che il
                            rifiuto del consenso per una finalità particolare può rendere le
                            relative funzioni non disponibili.
                        </p>
                    </div>
                </div>
                <div id="dcc-s-actions">
                    <a onClick={() => onAccept("ALL")} className="dcc-btn btn-primary">
                        Accetta Tutto
                    </a>
                    <a onClick={() => onAccept("NONE")} className="dcc-btn btn-secondary">
                        Rifiuta Tutto
                    </a>

                    <span className="grow"></span>

                    <a
                        onClick={() => {
                            let pref = expressPreferences();
                            onAccept(pref);
                        }}
                        className="dcc-btn btn-secondary"
                    >
                        salva preferenze
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Choice;
