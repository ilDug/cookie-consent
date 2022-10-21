import * as React from "react";
import { useState, useEffect } from "react";
import CookieCategory from "./choice/cookie-category";

type Props = {};

const Choice: React.FC<Props> = (props) => {
    const settings = ["Cookies necessari / tecnici ", "Misurazione", "Targeting e Pubblicità"];
    const categories = {
        "Cookies necessari / tecnici ":
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident consequatur odio id dolorum sint distinctio ducimus quis reprehenderit doloremque eius enim quae porro perspiciatis, ratione quisquam officia dolorem deleniti obcaecati!",
        "Misurazione ":
            "Quae delectus cupiditate ipsa unde molestias, accusamus dolor illo voluptatum praesentium magni deserunt voluptates consectetur ipsum quas, odio ea iusto temporibus laboriosam. Doloribus consectetur quam dolor ab nemo quos neque?",
        "Targeting e Pubblicità":
            "Enim iusto, nostrum aliquid optio, repellat assumenda labore deleniti, repellendus laborum cumque eaque quasi incidunt pariatur consequatur nemo aut sed eligendi. Cumque quibusdam, vitae dolorem quos ducimus placeat suscipit eaque.",
    };

    return (
        <div id="dcc-settings">
            <div id="dcc-s-body">
                <div id="dcc-s-content">
                    <span id="dcc-s-close">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                            <path d="M315.3 411.3c-6.253 6.253-16.37 6.253-22.63 0L160 278.6l-132.7 132.7c-6.253 6.253-16.37 6.253-22.63 0c-6.253-6.253-6.253-16.37 0-22.63L137.4 256L4.69 123.3c-6.253-6.253-6.253-16.37 0-22.63c6.253-6.253 16.37-6.253 22.63 0L160 233.4l132.7-132.7c6.253-6.253 16.37-6.253 22.63 0c6.253 6.253 6.253 16.37 0 22.63L182.6 256l132.7 132.7C321.6 394.9 321.6 405.1 315.3 411.3z" />
                        </svg>
                    </span>
                    <h2>Impostazioni dei cookies</h2>

                    <h3>Cookie Usage</h3>
                    <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident
                        consequatur odio id dolorum sint distinctio ducimus quis reprehenderit
                        doloremque eius enim quae porro perspiciatis, ratione quisquam officia
                        dolorem deleniti obcaecati! Lorem ipsum dolor sit amet consectetur,
                        adipisicing elit. Est quibusdam rem iure illum fugiat illo, explicabo minus
                        ullam! Atque expedita nulla vitae enim assumenda non dolorem accusantium
                        illo nostrum beatae.
                    </p>
                    <React.Fragment>
                        {/* {settings.map((s, i) => (

                        ))} */}
                        {Object.entries(categories).map(([cat, descr], i) => (
                            <CookieCategory title={cat} index={i} key={i}>
                                <p>{descr}</p>
                            </CookieCategory>
                        ))}
                    </React.Fragment>
                    <div className="box">
                        <h4>More Information</h4>
                        <p>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis est
                            amet eligendi fugit laboriosam animi, deserunt, accusantium mollitia
                            assumenda facilis in rem aspernatur sit delectus doloribus quod tenetur
                            aut? Omnis?
                        </p>
                    </div>
                </div>
                <div id="dcc-s-actions">
                    <a href="" className="dcc-btn btn-primary">
                        Accetta Tutto
                    </a>
                    <a href="" className="dcc-btn btn-secondary">
                        Rifiuta Tutto
                    </a>

                    <span className="grow"></span>

                    <a href="" className="dcc-btn btn-secondary">
                        salva preferenze
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Choice;
