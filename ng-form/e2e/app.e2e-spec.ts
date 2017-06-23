import { NgFormPage } from './app.po';

describe('ng-form App', () => {
  let page: NgFormPage;

  beforeEach(() => {
    page = new NgFormPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
