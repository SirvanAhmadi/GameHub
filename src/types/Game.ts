import { Genre } from "./Genre";
import { Platform } from "./Platform";
import { Tag } from "./Tag";

export interface Game {
    id:number;
    name:string;
    slug:string;
    background_image:string;
    playtime: number;
    released:string;
    genres: Genre[];
    tags: Tag[];
    parent_platforms:{platform:Platform}[]
}
