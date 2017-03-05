import { NavbarController } from './navbar.directive';

/**
 * @todo Complete the test
 * This example is not perfect.
 * Test should check if MomentJS have been called
 */
describe('directive navbar', function() {
  let element: angular.IAugmentedJQuery;
  let navbarController: NavbarController;
  let timeInMs: number;

  beforeEach(angular.mock.module('ngMusicSearch'));

  beforeEach(inject(($compile: angular.ICompileService, $rootScope: angular.IRootScopeService) => {
    const currentDate: Date = new Date();
    timeInMs = currentDate.setHours(currentDate.getHours() - 24);

    element = angular.element(`
      <navbar creation-date="${timeInMs}"></navbar>
    `);

    $compile(element)($rootScope.$new());
    $rootScope.$digest();
    navbarController = (<any> element.isolateScope()).vm;
  }));

  it('should be compiled', function() {
    expect(element.html()).not.toEqual(null);
  });

  it('should have isolate scope object with instanciate members', function() {
    expect(navbarController).not.toBeNull(); 
  });
});
