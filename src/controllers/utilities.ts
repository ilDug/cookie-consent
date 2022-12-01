import Cookies from "js-cookie";

/**
 * Get current client's browser language
 * @returns {string}
 */
export const getBrowserLang = (): string => {
    var browser_lang = navigator.language;
    browser_lang.length > 2 && (browser_lang = browser_lang[0] + browser_lang[1]);
    console.log("CookieConsent [LANG]: detected_browser_lang = '" + browser_lang + "'");
    return browser_lang.toLowerCase()
}