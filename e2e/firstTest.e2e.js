describe('Example', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should have debug section', async () => {
    await expect(element(by.text('Debug'))).toBeVisible();
  });
});
