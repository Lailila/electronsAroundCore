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
	
	it("should return 6 for an array with elements '2, 2, 3, 3'", function(){
		expect(electrons.add([2,2,3,3])).toEqual(4);
	});

	it("should return 6 for an array with elements '6, 6, 4, 4, 1, 3'", function(){
		expect(electrons.add([6,6,4,4,1,3])).toEqual(2);
	});

	it("should return 6 for an array with elements '6, 6, 4, 4, 1, 3'", function(){
		expect(electrons.add([2,2,2,2,4,6])).toEqual(0);
	});

	it("should return 6 for an array with elements '3, 5, 3, 5, 4, 2'", function(){
		expect(electrons.add([3,5,3,5,4,2])).toEqual(12);
	}); 
});