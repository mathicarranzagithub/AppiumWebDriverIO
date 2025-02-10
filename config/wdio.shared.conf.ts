import { join } from 'path';

export const config: WebdriverIO.Config = {
    runner: 'local',
    logLevel: 'info',
    bail: 0,
    baseUrl: 'http://the-internet.herokuapp.com',
    waitforTimeout: 45000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,
    framework: 'mocha',

    capabilities: [
        {
            platformName: 'Android',
            maxInstances: 1,
            'appium:deviceName': 'emulator-5554',
            'appium:platformVersion': '15',
            'appium:automationName': 'UiAutomator2',
            'appium:app': join(process.cwd(), 'apps/Android-NativeDemoApp-0.4.0.apk'), 
            'appium:appWaitActivity': 'com.wdiodemoapp.MainActivity',
            'appium:noReset': false,
            'appium:newCommandTimeout': 240,
        },
    ],

    reporters: ['spec', ['allure', {
        outputDir: 'allure-results',
        disableWebdriverStepsReporting: true,  
        disableWebdriverScreenshotsReporting: true, 
    }]],
    mochaOpts: { ui: 'bdd', timeout: 60000 }
};
