/// <reference path="../../typings/index.d.ts" />

import { config } from './index.config';
import { routerConfig } from './index.route';
import { runBlock } from './index.run';
import { MainController } from './main/main.controller';

import { Navbar } from '../app/components/navbar/navbar.directive';
import { MusicSearch } from '../app/components/musicSearch/musicSearch.directive';

import { SpotifyMusicService } from '../app/components/spotifyService/spotifyMusic.service';

declare var moment: moment.MomentStatic;

module ngMusicSearch {
  'use strict';

  angular.module('ngMusicSearch', ['ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'ngMessages', 'ngAria', 'ngResource', 'ngRoute', 'ngMaterial', 'toastr', 'cl.paging'])
    .constant('moment', moment)
    .config(config)
    .config(routerConfig)
    .run(runBlock)
    .service('spotifyMusicService', SpotifyMusicService)
    .controller('MainController', MainController)
    .directive('navbar', Navbar)
    .directive('musicSearch', MusicSearch);
}
