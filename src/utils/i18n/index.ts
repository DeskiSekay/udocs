import { SystemLangContext } from "@/contexts/system-context";
import { useContext } from "react";
import { globalLocales } from "./global-locale";

interface json {
  [key: string]: string | json;
}

export const useI18n = (locale: json) => {
  const lang = useContext(SystemLangContext);
  const localeData: json | string = locale[lang];
  const localeDataMap = new Map([...Object.entries(localeData), ...Object.entries((globalLocales as json)[lang])]);

  const t = (key: string): string => {
    if (!localeData) return key;
    const jsonPath = key.split(".");
    const getText = (layer: number, src: json): string | null => {
      const data = src[jsonPath[layer]];
      if (layer === jsonPath.length - 1) {
        if (typeof data === "string") return data;
        return null;
      } else {
        return getText(layer + 1, src[jsonPath[layer]] as json);
      }
    };
    if (jsonPath.length > 1) {
      const data = localeDataMap.get(jsonPath[0]) as json;
      return getText(1, data) || key;
    } else {
      return (localeDataMap.get(key) as string) || key;
    }
  };
  return t;
};
