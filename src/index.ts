import Cookies from 'js-cookie';
import { filter, map, take, tap } from 'rxjs';
import { Banner } from './banner';
import { setConsentInCookies, activateScripts } from './controllers'
// import { Modal } from 'bootstrap'

window.onload = async () => {
    console.log("cookie-consent starting...");

    const cookieName = 'dccenabled'
    const scriptAttr = 'dcc-script'
    const scriptAttr_ = '[dcc-script]'

    /** controlla i cookies */
    const consent = +Cookies.get(cookieName)
    console.log(consent)
    if (consent == 0) {
        /** mostra banner */
        const b = new Banner()

        b.open()

        b.onConsentGiver$
            .pipe(
                take(1),
                filter(consent => consent),
                /** salva i cookies */
                map(setConsentInCookies(cookieName)),
                /** attiva scripts */
                map(activateScripts(scriptAttr_)),
                /** registra la scelta nel database */
            )
            .subscribe()

    }



}