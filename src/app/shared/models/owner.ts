import { Gender } from "./gender";
import { Pet } from "./pet";

export interface Owner {
    name: string;
    gender: Gender;
    age: Number;
    pets: Array<Pet>;
}