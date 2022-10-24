import Cookies from 'js-cookie';
import { CookieCategories, CookiePreference, CookiesCategory } from '../classes';
import { Consent } from '../classes/cookies-consent';
import { CATEGORIES_DEFAULTS } from '../lib/categories'


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


    get preferences(): CookiePreference {
        const consent = this.readConsentFromCookies()
        return consent ? consent.preferences : null
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



}


