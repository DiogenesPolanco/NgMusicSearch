import { SpotifyMusicService } from '../spotifyService/spotifyMusic.service';

/** @ngInject */
export function MusicSearch(): angular.IDirective {

  return {
    restrict: 'E',
    scope: {
      // videos: '='
    },
    templateUrl: 'app/components/musicSearch/musicSearch.html',
    controller: MusicSearchController,
    controllerAs: 'vm',
    bindToController: true
  };
}

/** @ngInject */
export class MusicSearchController {
  public resources: any;
  public qstring: string;
  public type: string = 'album';
  public defaultaudio: any;
  public total: number ;
  public currentPage: number = 0;
  public current: number = 1;

  public spotifyMusicService: SpotifyMusicService;

  constructor(spotifyMusicService: SpotifyMusicService) {
    this.resources = new Array();
    this.spotifyMusicService = spotifyMusicService;
    this.activate();
  }

  activate() {
    this.getResources();
  }

  getResources(offset: number = this.current,  limit: number= 6) {
    this.spotifyMusicService.getAlbums(this.type, this.qstring, offset, limit).then((response: any): any => {
      switch (this.type) {
        case 'album':
          this.resources = response.albums.items;
          this.total = response.albums.total / limit;

          break;
        case 'artist':
          this.resources = response.artists.items;
          this.total = response.artists.total / limit;

          break;
      }
    });
  }

  playSound(item: any) {
    if (this.defaultaudio) {
      this.defaultaudio.pause();
    }
    this.spotifyMusicService.getSounds(item.id).then((response: any): any => {
      this.defaultaudio = new Audio(response.tracks.items[0].preview_url);
      this.defaultaudio.play();
    });
  }

  onPageChanged() {
    this.currentPage = this.current;
    this.getResources();
  }

}
