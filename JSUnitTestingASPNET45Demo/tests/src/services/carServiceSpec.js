describe("car Service", function() {

   beforeEach(module("autoPerformanceApp"));

   it("should return > 0 cars upon calling getCars", inject(function(carService) {
      expect(carService.getCars().length).not.toBe(0);
   }));

});