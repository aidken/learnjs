describe('LearnJS', function() {
    it('Can show the problem view.', function() {
	learnjs.showView('#problem-1');
	expect($('.view-container .problem-view').length).toEqual(1);
    });
});

