import { TDeviceType } from "@/types/system";
import { createContext } from "react";

export const DeviceTypeContext = createContext<TDeviceType>("unknown");
export const SystemLangContext = createContext<string>("zh");
