import { AkdfireauthprojectPage } from './app.po';

describe('akdfireauthproject App', function() {
  let page: AkdfireauthprojectPage;

  beforeEach(() => {
    page = new AkdfireauthprojectPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
