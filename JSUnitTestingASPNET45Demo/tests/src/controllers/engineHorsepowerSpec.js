
describe("engineHorsepower Controller", function () {

   var scope, ctrl, vm, carService;

   //Get the Angular module that contains the controller
   beforeEach(module("autoPerformanceApp"));

   //Inject the controller (to use inject, must have reference to angular-mocks.js)
   //call inject to resolve instance of the controller service as well as additional dependencies needed
   beforeEach(inject(function ($controller, $rootScope, _carService_) {
      scope = $rootScope.$new();  //create a new instance of the rootscope used for testing
      carService = _carService_;
      //use the controller service to get an instance of the EngineHorsepowerController
      ctrl = $controller(EngineHorsepowerController, { $scope: scope });
      vm = ctrl;
   }));

   it("sets the title", function() {          
      expect(vm.title).toBe("Engine Horsepower Calculation");
   });


   describe("calculateCarData method", function () {

      var getCarsMock = [
         { year: 2016, make: "Test", model: "Car", rearWheelHorsepower: 0, flywheelHorsepower: 0, weight: 1000, et: 10 }
      ];

      it("should call getCars when calculateCarData is run", function () {
         var spy = spyOn(carService, "getCars");

         vm.calculateCarData();

         expect(spy).toHaveBeenCalled();
      });

      it("should return mock data when using Jasmine Spies", function() {
         spyOn(carService, "getCars").and.returnValue(getCarsMock);

         var result = vm.calculateCarData();

         expect(result[0].year).toEqual(2016);
      });

   });

});