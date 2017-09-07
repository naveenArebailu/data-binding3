import { DataBinding3Page } from './app.po';

describe('data-binding3 App', function() {
  let page: DataBinding3Page;

  beforeEach(() => {
    page = new DataBinding3Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
