import { NgDisplayPage } from './app.po';

describe('ng-display App', () => {
  let page: NgDisplayPage;

  beforeEach(() => {
    page = new NgDisplayPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
