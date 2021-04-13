import { Gender } from "./gender";
import { Pet } from "./pet";

export interface Result {
    gender: Gender;
    pets: Pet[];
}