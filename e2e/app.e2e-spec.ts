import { AngularCilFrontEndPage } from './app.po';

describe('angular-cil-front-end App', () => {
  let page: AngularCilFrontEndPage;

  beforeEach(() => {
    page = new AngularCilFrontEndPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
