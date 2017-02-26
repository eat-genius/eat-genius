import { EatGeniusPage } from './app.po';

describe('eat-genius App', () => {
  let page: EatGeniusPage;

  beforeEach(() => {
    page = new EatGeniusPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
