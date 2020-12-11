import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import resources from "./components/resources";
// import translationEN from "./locales/en/translationEN";
// import translationPT from "./locales/pt/translationPT";
// import commonEN from "./locales/en/commonEN.json";
// import commonPT from "./locales/pt/commonPT.json";

// const resources = {
//   en: { translation: translationEN, common: commonEN },
//   pt: { translation: translationPT, common: commonPT },
// };
i18next
  .use(initReactI18next)
  // init i18next
  .init({
    resources,
    // ns: ["commonEN", "commonPT", "translationEN", "translationPT"],
    defaultNS: "translation",
    fallbackLng: false, // use en if detected lng is not available --> set to "en"!! false gor tests
    debug: false,

    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
  });

export default i18next;
