class Video {

    //primero debo definir los datos y sus tipos 
    public title:string;
    public data: any[];
    private _name: string;
    protected duration:number;

    static NameReporductor: string = 'Reproductor 1';


    constructor(title:string,data:[string,string,number]){

        this.title = title;
        this.data = data;

    }

    set setData(data:[string,string,number]){

        this._name = data[0];
        this.duration = data[2];
    }

    get getData():any[]{

        return [this.title,this._name,this.duration];
    }

    #Private():string{

        return 'hola';
    }

    MensajeDuration():string{

        return ` ${this.duration}`;
    }
}


class YoutubeVideo extends Video{

    protected url:string;

    constructor(title:string,data:[string,string,number],url:string){

        super(title,data);
        this.url = url;

    }

    //sobre escribir metodo
    MensajeDuration(): string {


        super.MensajeDuration(); // ejecucion metodo padre

        return `metodo sobre escrito`;
    }
}

//definif una variable de tipo video
let miVideo :Video = new Video('video 1',['dead','pool',35]);
let videoYoutube : YoutubeVideo =  new YoutubeVideo('video 1',['dead','pool',35],'htpps://dofjisd');

