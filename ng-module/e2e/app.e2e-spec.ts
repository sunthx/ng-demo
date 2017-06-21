import { NgModulePage } from './app.po';

describe('ng-module App', () => {
  let page: NgModulePage;

  beforeEach(() => {
    page = new NgModulePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
