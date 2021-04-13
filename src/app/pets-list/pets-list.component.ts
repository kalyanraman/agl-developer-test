import { Component, Input, OnInit } from '@angular/core';
import { Pet } from '../shared/models/pet';

@Component({
  selector: 'app-pets-list',
  templateUrl: './pets-list.component.html',
  styleUrls: ['./pets-list.component.css']
})
export class PetsListComponent implements OnInit {

  @Input() pets: Pet[] = [];
  sortedPets: Pet[] = [];


  constructor() { }

  ngOnInit(): void {
    this.sortedPets = this.pets.sort((a, b) => a.name < b.name ? -1 : 1);
  }

}
