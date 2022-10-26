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

export const getClientInfo = async () => {
    const response = await fetch(`https://ipinfo.io/json`)
    if (response.ok) return null;
    let data = await response.json()

    return { ...data.ip, ...data.country, ...data.timezone }
}

// {
//   "ip": "79.61.107.84",
//   "hostname": "host-79-61-107-84.business.telecomitalia.it",
//   "city": "Casnigo",
//   "region": "Lombardy",
//   "country": "IT",
//   "loc": "45.8131,9.8688",
//   "org": "AS3269 Telecom Italia S.p.A.",
//   "postal": "24020",
//   "timezone": "Europe/Rome",
//   "readme": "https://ipinfo.io/missingauth"
// }