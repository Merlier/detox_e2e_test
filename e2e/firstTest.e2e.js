import screenshot from 'detox-take-screenshot';
import jestExpect from 'expect';
import {setupJestScreenshot} from 'jest-screenshot';

const {device, expect, element, by, waitFor} = require('detox'); // eslint-disable-line no-unused-vars

global.device = device;
global.element = element;
global.by = by;
global.waitFor = waitFor;

describe('Example', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  beforeEach(async () => {
    setupJestScreenshot();
    await device.reloadReactNative();
  });

  it('should have debug section', async () => {
    await expect(element(by.text('Debug'))).toBeVisible();
  });

  it('should render app home', async () => {
    jestExpect(await screenshot()).toMatchImageSnapshot();
  });
});
