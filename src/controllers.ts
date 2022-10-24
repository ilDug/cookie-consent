// import Cookies from 'js-cookie';

// export const setConsentInCookies = (cookieName: string) => (consent: boolean) => {
//     const x = Cookies.set(cookieName, '1');
//     console.log("scrive il consenso nei cookies", x)
//     return true
// }


// /**
//  * attiva gli script rimuovendo il tipo text/plain e sostituendolo con text/javascript
//  * @param selector il selettore CSS per individuare quali script devono essere sbloccati
//  * @returns {number} il numero di elementi sbloccati
//  */
// export const activateScripts = (selector: string) => (consent: boolean): number => {
//     const scripts: HTMLScriptElement[] = Array.from(document.querySelectorAll(selector))
//     scripts.forEach(s => {
//         s.type = "text/javascript"
//     })
//     return scripts.length


// }

