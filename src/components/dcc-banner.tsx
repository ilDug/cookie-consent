import * as React from "react";
import { useState, useEffect, useContext } from "react";
import { CookiePreference } from "../classes";
import { ConfigsCtx, InitialConfigs } from "../config";

type Props = {
    onAccept: (consent: CookiePreference | "ALL" | "NONE") => void;
    onChoose: () => void;
};

const Banner: React.FC<Props> = ({ onAccept, onChoose }) => {
    const cnf: InitialConfigs = useContext(ConfigsCtx);

    return (
        <React.Fragment>
            <div id="dcc-banner">
                <div id="dcc-banner-body">
                    <a id="dcc-banner-close" onClick={() => onAccept("NONE")}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                            <path d="M315.3 411.3c-6.253 6.253-16.37 6.253-22.63 0L160 278.6l-132.7 132.7c-6.253 6.253-16.37 6.253-22.63 0c-6.253-6.253-6.253-16.37 0-22.63L137.4 256L4.69 123.3c-6.253-6.253-6.253-16.37 0-22.63c6.253-6.253 16.37-6.253 22.63 0L160 233.4l132.7-132.7c6.253-6.253 16.37-6.253 22.63 0c6.253 6.253 6.253 16.37 0 22.63L182.6 256l132.7 132.7C321.6 394.9 321.6 405.1 315.3 411.3z" />
                        </svg>
                    </a>
                    <div id="dcc-banner-content">
                        <div id="dcc-banner-title">
                            <span id="dcc-banner-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                    <path d="M257.5 27.6c-.8-5.4-4.9-9.8-10.3-10.6c-22.1-3.1-44.6 .9-64.4 11.4l-74 39.5C89.1 78.4 73.2 94.9 63.4 115L26.7 190.6c-9.8 20.1-13 42.9-9.1 64.9l14.5 82.8c3.9 22.1 14.6 42.3 30.7 57.9l60.3 58.4c16.1 15.6 36.6 25.6 58.7 28.7l83 11.7c22.1 3.1 44.6-.9 64.4-11.4l74-39.5c19.7-10.5 35.6-27 45.4-47.2l36.7-75.5c9.8-20.1 13-42.9 9.1-64.9c-.9-5.3-5.3-9.3-10.6-10.1c-51.5-8.2-92.8-47.1-104.5-97.4c-1.8-7.6-8-13.4-15.7-14.6c-54.6-8.7-97.7-52-106.2-106.8zM208 208c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32zm0 128c0 17.7-14.3 32-32 32s-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32zm160 0c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32z" />
                                </svg>
                            </span>
                            <h3> We value your privacy</h3>
                        </div>
                        <div id="dcc-banner-text">
                            <p>
                                Noi e terze parti selezionate utilizziamo cookie o tecnologie simili
                                per finalità tecniche e, con il tuo consenso, anche per
                                “funzionalità semplici e preferenze”, “Performance e Statistica” ,
                                "marketing e targeting" e “social media” come specificato nella{" "}
                                <a href={cnf.cookiePolicyLink}>cookie policy</a>. Il rifiuto del
                                consenso può rendere non disponibili le relative funzioni. Puoi
                                liberamente prestare, rifiutare o revocare il tuo consenso, in
                                qualsiasi momento. Usa il pulsante “<strong>Accetta</strong>” per
                                acconsentire all'utilizzo di tali tecnologie. Usa il pulsante “
                                <strong>Rifiuta</strong>” o chiudi questa informativa per continuare
                                senza accettare.
                            </p>
                        </div>
                    </div>
                    <div id="dcc-banner-actions">
                        <a
                            onClick={() => onAccept("ALL")}
                            className="dcc-btn btn-primary"
                            id="dcc-banner-accept-all"
                        >
                            Accetta Tutto
                        </a>
                        {cnf.diplayRejectAllBtn && (
                            <a
                                onClick={() => onAccept("NONE")}
                                className="dcc-btn btn-secondary"
                                id="dcc-banner-refuse-all"
                            >
                                Rifiuta Tutto
                            </a>
                        )}
                        <a
                            onClick={() => onChoose()}
                            className="dcc-btn btn-secondary"
                            id="dcc-banner-open-choice"
                        >
                            Personalizza Cookies
                        </a>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default Banner;
