export class SpotifyMusicService {

    /** @ngInject */
    constructor(private $log: angular.ILogService, private $http: angular.IHttpService) {
        // 
    }
    getAlbums(type: string, qstring: string = 'juan luis guerra', offset: number= 0, limit: number): angular.IPromise<any[]> {

        return this.$http.get('https://api.spotify.com/v1/search', {
            cache: true,
            params: {
                type: type,
                q: qstring,
                offset: offset,
                limit: limit
            }
        })
        .then((response: any): any => {
                return response.data;
            })
            .catch((error: any): any => {
                this.$log.error('XHR Failed for getAlbums.\n', error.data);
            });
    }
    getSounds(albumId: string) {
        return this.$http.get('https://api.spotify.com/v1/albums/' + albumId, { cache: true })
            .then((response: any): any => {
                return response.data;
            })
            .catch((error: any): any => {
                this.$log.error('XHR Failed for getAlbums.\n', error.data);
            });
    }
}
