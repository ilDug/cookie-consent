import { CookieCategories } from "../classes";

export const CATEGORIES_DEFAULTS: CookieCategories = {
    "technical": {
        title: "Necessari / Tecnici",
        description: "Questi strumenti di tracciamento sono strettamente necessari per garantire il funzionamento e la fornitura del servizio che ci hai richiesto e, pertanto, non richiedono il tuo consenso e non possono essere disattivati nei nostri sistemi. Di solito vengono impostati solo in risposta ad azioni compiute dall'utente che equivalgono a una richiesta di servizi, come l'impostazione delle preferenze sulla privacy, l'accesso, l'autenticazione,  la gestione delle autorizzazioni,  la compilazione di moduli o quando sono essenziali per fornire un servizio richiesto dall'utente. Non è possibile rinunciare a questi cookie. È possibile impostare il browser in modo da bloccare o avvisare l'utente di questi cookie, ma in tal caso alcune parti del sito non funzioneranno. Questi cookie non memorizzano alcuna informazione di identificazione personale",
        /**
 * Questi cookie sono necessari per il funzionamento del sito web e non possono essere disattivati nei nostri sistemi. Di solito vengono impostati solo in risposta ad azioni compiute dall'utente che equivalgono a una richiesta di servizi, come l'impostazione delle preferenze sulla privacy, il login o la compilazione di moduli. Potete impostare il vostro browser in modo da bloccare o avvisare di questi cookie, ma alcune parti del sito non funzioneranno. Questi cookie non memorizzano alcuna informazione di identificazione personale.
 * 
 */
        //     Salvataggio e gestione di backup
        //     Hosting ed infrastruttura backend
        //     Gestione di landing page e pagine di invito
        //     Servizi di piattaforma e hosting
        //     Protezione dallo SPAM
        //     Ottimizzazione e distribuzione del traffico
        //     Monitoraggio dell’infrastruttura
        //     Gestione dei pagamenti
        consent: true,
        editable: false
    },
    "functional": {
        title: "Funzionali / Preferenze",
        description: "Questi cookie consentono al sito web di fornire funzionalità e personalizzazioni avanzate. Possono essere impostati da noi o da fornitori terzi i cui servizi sono stati aggiunti alle nostre pagine. Se non si accettano questi cookie, alcuni o tutti i servizi potrebbero non funzionare correttamente.",
        /**
         * Questi cookie consentono al sito web di fornire funzionalità e personalizzazioni avanzate. Possono essere impostati da noi o da fornitori terzi i cui servizi sono stati aggiunti alle nostre pagine. Se non si accettano questi cookie, alcuni o tutti i servizi potrebbero non funzionare correttamente.
         */
        // Interazioni e funzionalità semplici(id 2).Finalità incluse:
        //     Contattare l’Utente
        //     Interazione con le piattaforme di live chat
        //     Gestione di conferenze web e telefonia online
        //     Gestione delle richieste di supporto e contatto
        //     Interazione con le piattaforme di supporto e di feedback
        //     Gestione dei tag
        //     Registrazione ed autenticazione
        //     Gestione dei database di Utenti
        // Miglioramento dell’esperienza(id 3).Finalità incluse:
        //     Commento dei contenuti
        //     Interazione con piattaforme di raccolta dati e altre terze parti
        //     Visualizzazione di contenuti da piattaforme esterne
        //     Interazione con social network e piattaforme esterne
        //     Interazione con le piattaforme per sondaggi online
        //     Gestione dei feed RSS
        //     Funzionalità sociali
        consent: false,
        editable: true
    },
    "performance": {
        title: "Performance / Statistica",
        description: "Questi cookie ci permettono di contare le visite e le fonti di traffico per poter misurare e migliorare le prestazioni del nostro sito. Ci aiutano a sapere quali sono le pagine più e meno popolari e a vedere come i visitatori si muovono all'interno del sito, il che ci aiuta a ottimizzare la vostra esperienza. sia da noi che da terze parti. Se non consentite questi cookie, non potremo utilizzare i vostri dati in questo modo.",
        /**
         * Questi cookie ci permettono di contare le visite e le fonti di traffico in modo da poter misurare e migliorare le prestazioni del nostro sito. Ci aiutano a sapere quali sono le pagine più e meno popolari e a vedere come i visitatori si muovono all'interno del sito. Tutte le informazioni raccolte da questi cookie sono aggregate e quindi anonime. Se non accettate questi cookie, non sapremo quando avete visitato il nostro sito e non saremo in grado di monitorarne le prestazioni.
         */
        // Misurazione(id 4).Finalità incluse:
        //     Statistica
        //     Beta testing
        //     Test di performance di contenuti e funzionalità(A / B testing)
        //     Heat mapping e registrazione sessioni
        //     Gestione della raccolta dati e dei sondaggi online
        consent: false,
        editable: true
    },
    "targeting": {
        title: "Marketing / targeting",
        description: "Questi cookie possono essere impostati attraverso il nostro sito dai nostri partner pubblicitari. Possono essere utilizzati da tali aziende per creare un profilo dei vostri interessi e mostrarvi pubblicità pertinenti su altri siti. Si basano sull'identificazione univoca del vostro browser e del vostro dispositivo internet. Se non si consente l'utilizzo di questi cookie, la pubblicità sarà meno mirata.",
        /**
         * Questi cookie possono essere impostati attraverso il nostro sito dai nostri partner pubblicitari. Possono essere utilizzati da tali aziende per creare un profilo dei vostri interessi e mostrarvi pubblicità pertinenti su altri siti. Non memorizzano informazioni direttamente personali, ma si basano sull'identificazione univoca del vostro browser e del vostro dispositivo internet. Se non si consente l'utilizzo di questi cookie, la pubblicità sarà meno mirata.
         */
        //     Pubblicità
        //     Infrastruttura al servizio pubblicitario
        //     Affiliazione commerciale
        //     Gestione contatti e invio di messaggi
        //     Remarketing e behavioral targeting
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