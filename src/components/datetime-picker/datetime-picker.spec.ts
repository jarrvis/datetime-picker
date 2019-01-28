import { TestWindow } from '@stencil/core/testing';
import { DatetimePicker } from './datetime-picker';

describe('datetime-picker', () => {
  it('should build', () => {
    expect(new DatetimePicker()).toBeTruthy();
  });

  describe('rendering', () => {
    let element: HTMLDatetimePickerElement;
    let testWindow: TestWindow;
    beforeEach(async () => {
      testWindow = new TestWindow();
      element = await testWindow.load({
        components: [DatetimePicker],
        html: '<datetime-picker></datetime-picker>'
      });
    });

    // See https://stenciljs.com/docs/unit-testing
    {cursor}

  });
});
