import { UserUiCliPage } from './app.po';

describe('user-ui-cli App', function() {
  let page: UserUiCliPage;

  beforeEach(() => {
    page = new UserUiCliPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
