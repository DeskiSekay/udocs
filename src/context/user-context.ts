import { Dispatch, SetStateAction, createContext } from "react";

export const ContextShowJoinContributer = createContext<Dispatch<SetStateAction<boolean>>>(()=>{});
export const ContextUser = createContext<{userType: string}>({userType: 'passenger'})
