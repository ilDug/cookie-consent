import { Dcc } from "..";
import { InitialConfigs } from "./config";
import "./styles/styles.scss";

/** funzione principale */
export function dcc_init(c: Partial<InitialConfigs>) {
    const dcc = new Dcc(c)
}


/** DECLARE GLOBAL FUNCTION */
(<any>window).dcc_init = dcc_init;




/** USAGE ************************************************************ */
// window.onload = async () => {
//     window.dcc_init({
//         selectorId: "dcc-container",
//         diplayRejectAllBtn: false,
//         policyVersion: new Date("2022-11-30"),
//         cookiePolicyLink: "/privacy/cookies"
//     });
// }