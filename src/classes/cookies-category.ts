export type CookieCategories = { [category: string]: CookiesCategory }

export type CookiesCategory = {
    title: string;
    description: string;
    consent: boolean;
    editable: boolean
}