import * as React from "react";
import { useState, useEffect } from "react";
import DccOverlay from "./dcc-overlay";
type Props = {};

const DccApp: React.FC<Props> = (props) => {
    let show = true;
    return <>{show && <DccOverlay />}</>;
};

export default DccApp;
