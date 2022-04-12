import i18n from "i18next";
import XHR from 'i18next-xhr-backend';
import detector from 'i18next-browser-languagedetector';
import { initReactI18next } from "react-i18next";

i18n
    .use(detector)
    .use(XHR)
    .use(initReactI18next) // passes i18n down to react-i18next
    .init({
        fallbackLng: "en",
        interpolation: {
            escapeValue: false // react already safes from xss
        },
        backend: {
            loadPath: '/assets/locales/{{lng}}.json'
        }
    });

export default i18n;