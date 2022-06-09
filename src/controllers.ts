import Cookies from 'js-cookie';

export const setConsentInCookies = (cookieName: string) => (consent: boolean) => {
    const x = Cookies.set(cookieName, '1');
    console.log("scrive il consenso nei cookies", x)
    return true
}


/**
 * attiva gli script rimuovendo il tipo text/plain e sostituendolo con text/javascript
 * @param selector il selettore CSS per individuare quali script devono essere sbloccati
 * @returns {number} il numero di elementi sbloccati
 */
export const activateScripts = (selector: string) => (consent: boolean): number => {
    const scripts: HTMLScriptElement[] = Array.from(document.querySelectorAll(selector))
    scripts.forEach(s => {
        s.type = "text/javascript"
    })
    return scripts.length

    const s = {
        "ip": "Che ha fornito il consenso(eventualmente anonimizzato)",
        "date": "Quando è stato fornito il consenso",
        "url": "Indirizzo della pagina web dove è stata effettuata la raccolta",
        "consent_id": "Codice http relativo alla transazione",
        "user_agent": "Applicazione installata sul dispositivo dell’utente che si è connessa al sito",
        "country": "Codice nella Nazione di riferimento",
        "banner_type": "Tipo di modulo proposto all’utente",
        "preferences": "Preferenze espresse per ogni categoria di cookie",
        "policy": "Riferimento a documenti legali e condizioni(cookie policy) nel momento in cui si ha ottenuto il consenso",
    }
}

