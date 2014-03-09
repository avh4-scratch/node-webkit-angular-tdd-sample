describe('Hello World', function() {

    describe('when the app starts', function() {
        it('says "Hello World"', function() {
            browser.get('#');
            expect(element(by.css("h1")).getText()).toBe("Hello World!");
        });
    });

    describe('typing a name', function() {
        it('says "Hello <name>"', function() {
            browser.get('#');
            element(by.css("input#name")).clear();
            element(by.css("input#name")).sendKeys("Arthur");
            expect(element(by.css("h1")).getText()).toBe("Hello Arthur!");
        });
    });
});
