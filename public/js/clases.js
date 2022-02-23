"use strict";
var _Video_instances, _Video_Private;
class Video {
    constructor(title, data) {
        _Video_instances.add(this);
        this.title = title;
        this.data = data;
    }
    set setData(data) {
        this._name = data[0];
        this.duration = data[2];
    }
    get getData() {
        return [this.title, this._name, this.duration];
    }
    MensajeDuration() {
        return ` ${this.duration}`;
    }
}
_Video_instances = new WeakSet(), _Video_Private = function _Video_Private() {
    return 'hola';
};
Video.NameReporductor = 'Reproductor 1';
class YoutubeVideo extends Video {
    constructor(title, data, url) {
        super(title, data);
        this.url = url;
    }
    //sobre escribir metodo
    MensajeDuration() {
        super.MensajeDuration(); // ejecucion metodo padre
        return `metodo sobre escrito`;
    }
}
//definif una variable de tipo video
let miVideo = new Video('video 1', ['dead', 'pool', 35]);
let videoYoutube = new YoutubeVideo('video 1', ['dead', 'pool', 35], 'htpps://dofjisd');
