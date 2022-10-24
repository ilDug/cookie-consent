import Cookies from 'js-cookie';
import { CookieCategories, CookiePreference, CookiesCategory } from '../classes';
import { Consent } from '../classes';
import { CATEGORIES_DEFAULTS } from '../lib/categories'
import { v4 as uuidv4 } from 'uuid';


export class ConsentCtrl {
    constructor(public consentCookieName: string, public currentPolicyVersion?: Date) {
    }

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
        const x = Cookies.set(this.consentCookieName, '1');
        return !!x;
    }


    get defaultPreferences(): CookiePreference {
        let prefereces: CookiePreference = {};
        for (const cat in CATEGORIES_DEFAULTS) {
            prefereces[cat] = CATEGORIES_DEFAULTS[cat].consent;
        }
        return prefereces;
    }


    get preferences(): CookiePreference {
        const consent = this.readConsentFromCookies()
        return consent ? consent.preferences : null
    }


    get defaultCategories(): CookieCategories {
        return { ...CATEGORIES_DEFAULTS }
    }

    get categories(): CookieCategories {
        const pref = this.preferences
        if (!pref) return CATEGORIES_DEFAULTS;

        let categories = { ...CATEGORIES_DEFAULTS }
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
        const consent = this.readConsentFromCookies()
        if (!consent) return true;

        if (!this.currentPolicyVersion) return true;
        if (consent.policy_version < this.currentPolicyVersion) return true;
        const deltaMilliseconds: number = (new Date()).getTime() - consent.date.getTime()
        if (deltaMilliseconds > (1000 * 60 * 60 * 24 * 180)) return true;

        return false;
    }


    fromPreferenceToConsent(preferences: CookiePreference): Consent {
        let c: Consent = {
            uuid: uuidv4(),
            ip: null,
            date: new Date(),
            url: window.location.href,
            user_agent: window.navigator.userAgent ?? null,
            language: window.navigator.language ?? null,
            preferences: preferences,
            policy_version: this.currentPolicyVersion,
        }
        return c
    }


}


