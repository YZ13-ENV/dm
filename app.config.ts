import { AppConfig } from "./types/config";

export const config: AppConfig = {
    name: "dm",
    version: "0.0.0",
    status: "development",
    app: {
        hasAuthPage: false,
        hasDashboardPage: false,
        hasProfilePageByNickname: false,
        hasHomePage: false,
        hasSearchPage: false
    },
    features: {
        enableLightMode: false,
        enableAppsGrid: false,
        enableNotifications: false
    },
    remote: {
        domain: "https://darkmaterial.space",
        logo: {
            dark: "dm/dm-dark.svg",
            light: "dm/dm-light.svg"
        }
    }
}