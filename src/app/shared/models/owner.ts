import { Gender } from "./gender";
import { Pet } from "./pet";

export interface Owner {
    Name: string;
    Gender: Gender;
    Age: Number;
    Pets: Array<Pet>;
}