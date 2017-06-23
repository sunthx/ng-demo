import { NgInjectablePage } from './app.po';

describe('ng-injectable App', () => {
  let page: NgInjectablePage;

  beforeEach(() => {
    page = new NgInjectablePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
