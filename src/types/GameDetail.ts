import { Platform } from "./Platform";

export interface GameDetail {
    name:string;
    description:HTMLAllCollection;
    metacritic:number;
    released:string;
    background_image:string;
    parent_platforms:{platform:Platform}[]
}