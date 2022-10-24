import { CookieCategories } from "./cookies-category"

export type CookiePreference = { [category: string]: boolean }

export type Consent = {
    /** consent_id | Codice http relativo alla transazione",*/
    uuid: string;

    /** ip | Che ha fornito il consenso(eventualmente anonimizzato)",*/
    ip: string;

    /** date | Quando è stato fornito il consenso",*/
    date: Date;

    /** url | Indirizzo della pagina web dove è stata effettuata la raccolta",*/
    url: string;

    /** user_agent | Applicazione installata sul dispositivo dell’utente che si è connessa al sito",*/
    user_agent: string;

    /** country | Codice nella Nazione di riferimento",*/
    language: string;

    /** preferences | Preferenze espresse per ogni categoria di cookie",*/
    preferences: CookiePreference

    /** policy | Riferimento a documenti legali e condizioni(cookie policy) nel momento in cui si ha ottenuto il consenso",*/
    policy_version: Date
}

