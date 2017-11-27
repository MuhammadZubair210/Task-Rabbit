import { TaskrabbitPage } from './app.po';

describe('taskrabbit App', () => {
  let page: TaskrabbitPage;

  beforeEach(() => {
    page = new TaskrabbitPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
