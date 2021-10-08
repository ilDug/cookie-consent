import Cookies from 'js-cookie';

export const setConsentInCookies = (cookieName: string) => (consent: boolean) => {
    const x = Cookies.set(cookieName, '1');
    console.log("scrive il consenso nei cookies", x)
    return true
}



export const activateScripts = (selector: string) => (consent: boolean): number => {
    const scripts: HTMLScriptElement[] = Array.from(document.querySelectorAll(selector))
    scripts.forEach(s => {
        s.type = "text/javascript"
    })
    return scripts.length
}