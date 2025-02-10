import { config as baseConfig } from '../config/wdio.shared.conf';

export const config: WebdriverIO.Config = {
    ...baseConfig,

    services: [
        ...(baseConfig.services || []),
        [
            'appium',
            {
                command: 'appium',
                args: {
                    relaxedSecurity: true,
                },
            },
        ],
    ],

    port: 4723,

    capabilities: baseConfig.capabilities, 
};
