import { createContext } from "react";

export const AppContext = createContext({ loggedIn: false, user: {} });
