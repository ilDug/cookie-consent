import { CookieCategories } from "../classes";

export const CATEGORIES_DEFAULTS: CookieCategories = {
    'technical': {
        title: "Cookies necessari / tecnici",
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident consequatur odio id dolorum sint distinctio ducimus quis reprehenderit doloremque eius enim quae porro perspiciatis, ratione quisquam officia dolorem deleniti obcaecati!",
        consent: true,
        editable: false
    },
    "analytics": {
        title: "Misurazione",
        description: "Quae delectus cupiditate ipsa unde molestias, accusamus dolor illo voluptatum praesentium magni deserunt voluptates consectetur ipsum quas, odio ea iusto temporibus laboriosam. Doloribus consectetur quam dolor ab nemo quos neque?",
        consent: false,
        editable: true
    },
    "thirdParty": {
        title: "Targeting e Pubblicità di terze parti",
        description: "Enim iusto, nostrum aliquid optio, repellat assumenda labore deleniti, repellendus laborum cumque eaque quasi incidunt pariatur consequatur nemo aut sed eligendi. Cumque quibusdam, vitae dolorem quos ducimus placeat suscipit eaque.",
        consent: false,
        editable: true
    }
}