describe("UI Router Tests", function() {

   var scope = null;
   var state = null;
   var httpBackend = null;

   beforeEach(module("autoPerformanceApp"));

   beforeEach(inject(function ($rootScope, $state, $httpBackend) {
      scope = $rootScope.$new();
      state = $state;
      httpBackend = $httpBackend;      
   }));

   it("should transition to main.tab1", inject(function () {
      state.transitionTo("main.tab1");
      httpBackend.when("GET", "app/partials/main.html").respond(200);
      httpBackend.when("GET", "app/partials/engineHorsepower.html").respond(200);
      scope.$apply();
      httpBackend.flush();
      expect(state.current.name).toBe("main.tab1");

   }));

});

