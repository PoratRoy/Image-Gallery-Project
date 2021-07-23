export interface Image{
    id?:number;
    caption:string;
    photo:string;
    categories?: string;
    location?: [number,number];
    favorite?:boolean;
    private?:boolean;
}

