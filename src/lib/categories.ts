import { CookieCategories } from "../classes";

export const CATEGORIES_DEFAULTS: CookieCategories = {
    "technical": {
        title: "Necessari / Tecnici",
        description: "Questi strumenti di tracciamento sono strettamente necessari per garantire il funzionamento e la fornitura del servizio che ci hai richiesto e, pertanto, non richiedono il tuo consenso e non possono essere disattivati nei nostri sistemi. Di solito vengono impostati solo in risposta ad azioni compiute dall'utente che equivalgono a una richiesta di servizi, come l'impostazione delle preferenze sulla privacy, l'accesso, l'autenticazione,  la gestione delle autorizzazioni e/o pagamenti,  la compilazione di moduli o quando sono essenziali per fornire un servizio richiesto dall'utente. Non è possibile rinunciare a questi cookie. È possibile impostare il browser in modo da bloccare o avvisare l'utente di questi cookie, ma in tal caso alcune parti del sito non funzioneranno. Questi cookie non memorizzano alcuna informazione di identificazione personale",
        consent: true,
        editable: false
    },
    "functional": {
        title: "Funzionali / Preferenze",
        description: "Questi cookie consentono al sito web di fornire funzionalità e personalizzazioni avanzate. Possono essere impostati da noi o da fornitori terzi i cui servizi sono stati aggiunti alle nostre pagine. Se non si accettano questi cookie, alcuni o tutti i servizi potrebbero non funzionare correttamente. [ed es: Contattare l’Utente, Gestione delle richieste di supporto e contatto, Gestione dei database di Utenti, Commento dei contenuti, Interazione con piattaforme di raccolta dati e altre terze parti, Visualizzazione di contenuti da piattaforme esterne.]",
        consent: false,
        editable: true
    },
    // "performance": {
    //     title: "Performance / Statistica",
    //     description: "Questi cookie ci permettono di contare le visite e le fonti di traffico per poter misurare e migliorare le prestazioni del nostro sito, e per la gestione della raccolta dati e dei sondaggi online. Ci aiutano a sapere quali sono le pagine più e meno popolari e a vedere come i visitatori si muovono all'interno del sito, il che ci aiuta a ottimizzare la vostra esperienza.,  sia da noi che da terze parti. Se non consentite questi cookie, non potremo utilizzare i vostri dati in questo modo.",
    //     consent: false,
    //     editable: true
    // },
    "targeting": {
        title: "Analytics / Targeting / Marketing",
        description: "Questi cookie possono essere impostati attraverso il nostro sito dai nostri partner pubblicitari. Possono essere utilizzati da tali aziende per creare un profilo dei vostri interessi e mostrarvi pubblicità pertinenti su altri siti. Si basano sull'identificazione univoca del vostro browser e del vostro dispositivo internet. Ci aiutano a sapere quali sono le pagine più e meno popolari e a vedere come i visitatori si muovono all'interno del sito, il che ci aiuta a ottimizzare la vostra esperienza.,  sia da noi che da terze parti. Se non consentite questi cookie, non potremo utilizzare i vostri dati in questo modo e la pubblicità sarà meno mirata.[Analytics, Statistica, Gmap, Pubblicità , Infrastruttura al servizio pubblicitario , Affiliazione commerciale , Gestione contatti e invio di messaggi , Remarketing e behavioral targeting.",
        consent: false,
        editable: true
    },
    "social": {
        title: "social media",
        description: "Questi cookie sono impostati da una serie di servizi di social media che abbiamo aggiunto al sito per consentirvi di condividere i nostri contenuti con i vostri amici e reti. Sono in grado di tracciare il vostro browser su altri siti e di costruire un profilo dei vostri interessi. Ciò può influire sul contenuto e sui messaggi che vedete su altri siti web che visitate. Se non consentite questi cookie, potreste non essere in grado di utilizzare o vedere questi strumenti di condivisione.",
        consent: false,
        editable: true
    }

}