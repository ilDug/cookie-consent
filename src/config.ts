import { createContext, useContext, Context } from 'react'

export const CONSENT_COOKIE_NAME = "dcc"
export const POLICY_VERSION: Date = new Date()
export const UPDATE_FREQUENCY: number = (1000 * 60 * 60 * 24 * 180)
export const OPEN_LINK_SELECTOR: string = "[dcc-open]"
export const SCRIPT_SELECTOR: string = "dcc-script"

export type InitialConfigs = {
    selectorId?: string
    diplayRejectAllBtn: boolean,
    updateFrequency: number,
    policyVersion: Date,
    consentCookieName: string,
    cookiePolicyLink: string
}

export const CNF: InitialConfigs = {
    selectorId: "dcc-container",
    diplayRejectAllBtn: true,
    updateFrequency: UPDATE_FREQUENCY,
    policyVersion: POLICY_VERSION,
    consentCookieName: CONSENT_COOKIE_NAME,
    cookiePolicyLink: "/privacy/cookies"
}


export const ConfigsCtx: Context<InitialConfigs> = createContext(CNF)

