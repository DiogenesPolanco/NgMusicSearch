import { MainController } from './main.controller'; 

describe('controllers', () => {
  let mainController: MainController;

  beforeEach(angular.mock.module('ngMusicSearch'));

  beforeEach(inject(($controller: angular.IControllerService, toastr: any) => { 
    spyOn(toastr, 'info').and.callThrough();

    mainController = $controller('MainController');
  }));
 
  it('should show a Toastr info and stop animation when invoke showToastr()', inject((toastr: any) => { 
    expect(toastr.info).toHaveBeenCalled(); 
  }));
 
});
