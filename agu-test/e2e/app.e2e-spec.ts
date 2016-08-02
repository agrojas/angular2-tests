import { AguTestPage } from './app.po';

describe('agu-test App', function() {
  let page: AguTestPage;

  beforeEach(() => {
    page = new AguTestPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
