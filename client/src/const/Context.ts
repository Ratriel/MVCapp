import React from "react";
import IApi from "../api/IApi";

const Context = React.createContext<IApi>({} as any);
export default Context;
