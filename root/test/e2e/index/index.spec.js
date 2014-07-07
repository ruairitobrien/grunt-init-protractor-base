var IndexPage = require('./IndexPage');

describe("simple index page test", function () {

  var page = new IndexPage();

  beforeEach(function() {
      page.get();
  });

  describe("index", function () {
    it("should display the correct title", function () {
      expect(page.getTitle()).toBe('Protractor');
    });

    it("should display the message when button clicked", function () {
      page.clickButton();

      expect(page.getMessageText()).toBe('button 1 clicked');
    });
  });
});
