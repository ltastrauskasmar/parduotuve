import { ParduotuvePage } from './app.po';

describe('parduotuve App', function() {
  let page: ParduotuvePage;

  beforeEach(() => {
    page = new ParduotuvePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
