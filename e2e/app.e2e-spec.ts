import { ChartTestPage } from './app.po';

describe('chart-test App', function() {
  let page: ChartTestPage;

  beforeEach(() => {
    page = new ChartTestPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
