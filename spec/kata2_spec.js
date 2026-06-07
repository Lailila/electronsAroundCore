//Testvorlage
describe('electronsAroundCore', function() {
	beforeEach(function() {
		electrons = new electronsAroundCore();
	});
	
	it("should return 0 for an empty array", function(){
		expect(electrons.add([])).toEqual(0);
	});

});