import { CookiePreference } from "../classes";


export class ScriptsCtrl {
    constructor(protected selector: string) {
        /** * ritrova tutti gli script che corrispondono ad un certo selettore */
        this.scripts = [...document.querySelectorAll<HTMLScriptElement>(`script[${this.selector}]`)]
    }

    public scripts: HTMLScriptElement[] = [];


    protected acceptedCategories(preferences: CookiePreference): string[] {
        return Object.keys(preferences).filter(cat => preferences[cat])
    }


    activate(preferences: CookiePreference) {
        const categories = this.acceptedCategories(preferences)
        const _type = 'text/javascript';

        for (const s of this.scripts) {
            const category = s.getAttribute(this.selector)

            /** se non è compreso nelle categorie accettate non esegue l'attivazione */
            if (!category || !categories.includes(category)) continue;

            /** crea un nuovo elemento SCRIPT da sostituire */
            let actualScript: HTMLScriptElement = document.createElement('script')

            const attributes = s.attributes
            const { length: len } = attributes
            for (var i = 0; i < len; i++) {
                var attr_name = attributes[i].nodeName;
                actualScript.setAttribute(attr_name, s[attr_name] || s.getAttribute(attr_name));
            }

            const { src, innerText, innerHTML, textContent } = s

            actualScript.type = _type;
            actualScript.textContent = innerHTML || textContent || innerText;

            if (src) actualScript.src = src;

            const { parentNode } = s
            parentNode.replaceChild(actualScript, s)
        }

    }





    // if script has "src" attribute
    // try loading it sequentially
    // if (src) {
    //     // load script sequentially => the next script will not be loaded
    //     // until the current's script onload event triggers
    //     if (fresh_script.readyState) {  // only required for IE <9
    //         fresh_script.onreadystatechange = function () {
    //             if (fresh_script.readyState === "loaded" || fresh_script.readyState === "complete") {
    //                 fresh_script.onreadystatechange = null;
    //                 _loadScripts(scripts, ++index);
    //             }
    //         };
    //     } else {  // others
    //         fresh_script.onload = function () {
    //             fresh_script.onload = null;
    //             _loadScripts(scripts, ++index);
    //         };
    //     }
    // }





}