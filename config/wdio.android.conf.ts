import { join } from 'path';
import { config as baseConfig } from '../config/wdio.shared.local.conf';

export const config: WebdriverIO.Config = {
    ...baseConfig,

    specs: ['../tests/specs/*.ts'],

    capabilities: baseConfig.capabilities, // ✅ Keeps all capabilities
};
