
export class MainController {
  public toastr: any;

  /* @ngInject */
  constructor ($timeout: angular.ITimeoutService, toastr: any) {

    this.toastr = toastr;
  }

}
