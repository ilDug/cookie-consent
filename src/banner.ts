
import './styles.scss';
import { BehaviorSubject } from 'rxjs'

export class Banner {

    constructor() {
        this.element = document.createElement('div')
        this.element.id = 'dcc-banner';
        this.element.innerHTML = `
            <span id="dcc-close-btn"></span> 

            <div class="dcc-content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, assumenda voluptate. Earum corporis ipsa obcaecati tenetur harum iure, sint aperiam ullam nemo quisquam quidem eligendi autem dolorem id nostrum voluptas. Aliquam nemo molestiae tempora?<a href="#">Ipsum eius aliquam</a> quos beatae fugiat cumque perferendis fuga. Similique dicta consectetur quas sequi excepturi unde quisquam, earum enim animi exercitationem dolores numquam nihil est nulla.</div>

            <div class="dcc-actions"><a href="#" class="dcc-btn " dcc-accept>prosegui</a></div>
        `

        const acceptBtn = this.element.querySelector('[dcc-accept]')
        acceptBtn.addEventListener('click', (ev: Event) => this.saveConsent(ev))


    }

    private element: HTMLElement
    private emitter = new BehaviorSubject<boolean>(null)
    public get onConsentGiver$() { return this.emitter.asObservable() }

    public open() {
        document.body.append(this.element)
    }

    saveConsent(ev) {
        ev.preventDefault();
        console.log('consenso salvato')
        this.element.remove()
        this.emitter.next(true)
    }

}