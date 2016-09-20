import { InstantSearchPage } from './app.po';

describe('instant-search App', function() {
  let page: InstantSearchPage;

  beforeEach(() => {
    page = new InstantSearchPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
