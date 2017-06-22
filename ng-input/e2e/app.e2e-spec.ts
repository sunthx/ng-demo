import { NgInputPage } from './app.po';

describe('ng-input App', () => {
  let page: NgInputPage;

  beforeEach(() => {
    page = new NgInputPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
