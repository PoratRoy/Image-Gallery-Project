export interface Image{
    id?:number;
    caption:string;
    src:string;
    categories?: string;
    location?: [number,number];
    favorite?:boolean;
    private?:boolean;
    timestamp?:number;
}

