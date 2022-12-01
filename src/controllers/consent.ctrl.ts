import Cookies from 'js-cookie';
import { CookieCategories, CookiePreference, CookiesCategory } from '../classes';
import { Consent } from '../classes';
import { CATEGORIES_DEFAULTS } from '../lib/categories'
import { v4 as uuidv4 } from 'uuid';
import { getBrowserLang } from './utilities';
import { InitialConfigs } from '../config';


export class ConsentCtrl {
    constructor(cnf: InitialConfigs
    ) {
        this.consentCookieName = cnf.consentCookieName
        this.frequency = cnf.updateFrequency
        this.currentPolicyVersion = cnf.policyVersion
    }
    public consentCookieName: string;
    public frequency: number;
    public currentPolicyVersion: Date


    /**
     * legge lo stato i consensi salvato nei cookies.
     */
    readConsentFromCookies(): Consent {
        const b64 = Cookies.get(this.consentCookieName)
        if (!b64) return null;

        const raw = decodeURIComponent((window.atob(b64)))
        const consent: Consent = JSON.parse(raw)
        return consent
    }

    /** scrive il consenso nei cookies */
    setConsentInCookies(c: Consent): boolean {
        const raw = JSON.stringify(c)
        const b64 = window.btoa((encodeURIComponent(raw)));
        const x = Cookies.set(this.consentCookieName, b64, { expires: 180 });
        return !!x;
    }




    /**
     * le preferenze di default (tutte false tranne per i tecnici)
     */
    get defaultPreferences(): CookiePreference {
        let prefereces: CookiePreference = {};
        for (const cat in CATEGORIES_DEFAULTS) {
            const val = CATEGORIES_DEFAULTS[cat].consent
            prefereces[cat] = val;
        }
        return prefereces;
    }


    /***
     * le preferenze salvate nel cookie tecnico
     */
    get preferences(): CookiePreference {
        const consent = this.readConsentFromCookies()
        return consent ? consent.preferences : null
    }


    /**
     * lle categorie di default
     */
    get defaultCategories(): CookieCategories {
        return JSON.parse(JSON.stringify(CATEGORIES_DEFAULTS)) as CookieCategories
    }

    /**
     * ritorna le categorie salvate nei cookie tecnico
     * se non esiste ritorna le categorie di default
     */
    get categories(): CookieCategories {
        const raw = JSON.stringify(CATEGORIES_DEFAULTS)

        const pref = this.preferences
        if (!pref) return JSON.parse(raw);

        let categories = JSON.parse(raw);
        for (const cat in pref) {
            categories[cat].consent = pref[cat]
        }
        return categories
    }


    /** 
     * decide se mostrare il banner 
     * e restituisce la lista compilata delle categorie disponibili 
     **/
    shouldShowBanner(): boolean {
        /** se non esistono preferenza già salvate */
        const consent = this.readConsentFromCookies()
        if (!consent) return true;

        /** se non esiste una versione della policy */
        if (!this.currentPolicyVersion) return true;

        /** se la policy è stata aggiornata */
        if (consent.policy_version < this.currentPolicyVersion) return true;

        /** se sono passati i giorni di frequenza di aggironamento */
        const deltaMilliseconds: number = (new Date()).getTime() - (new Date(consent.date)).getTime()
        if (deltaMilliseconds > this.frequency) return true;

        /** altrimenti non lo mostra */
        return false;
    }


    /**
     * crea il consenso dalle preferenze scelte dal banner
     */
    fromPreferenceToConsent(preferences: CookiePreference): Consent {
        let c: Consent = {
            uuid: uuidv4(),
            ip: null,
            date: new Date(),
            url: window.location.href,
            user_agent: window.navigator.userAgent ?? null,
            language: getBrowserLang() ?? null,
            preferences: preferences,
            policy_version: this.currentPolicyVersion,
        }
        return c
    }


}


