//Testvorlage
describe('electronsAroundCore', function() {
	beforeEach(function() {
		electrons = new electronsAroundCore();
	});
	
	it("should return 0 for an empty array", function(){
		expect(electrons.add([])).toEqual(0);
	});

	it("should return 6 for an array with elements '1, 2, 3, 4, 5'", function(){
		expect(electrons.add([1,2,3,4,5])).toEqual(6);
	});

});