import { PlaywrightTestConfig } from "@playwright/test";

const config: PlaywrightTestConfig = {
    use: {
        headless: false,
        browserName: "chromium"
    },
    testMatch: ["checkTotalPrice.ts"],
    retries: 1
}
export default config;
