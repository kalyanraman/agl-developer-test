import { Component, OnInit } from '@angular/core';
import { Gender } from '../shared/models/gender';
import { PeopleService } from '../shared/services/people.service';
import * as _ from "lodash"
import { Result } from '../shared/models/result';

@Component({
  selector: 'app-pets-by-ownergender',
  templateUrl: './pets-by-ownergender.component.html',
  styleUrls: ['./pets-by-ownergender.component.css']
})
export class PetsByOwnergenderComponent implements OnInit {

  constructor(private service: PeopleService) { }

  owners: Result[] = [];
  message: string = 'Loading...';

  ngOnInit(): void {
    this.getPets();
  }


  getPets() {
    return this.service.getPeople()

      .subscribe(response => {
        this.owners = _(response)
          .groupBy(x => x.gender)
          .map((g, gender) => ({
            gender: gender === Gender.Male ? Gender.Male : Gender.Female, pets: _(g)
              .flatMap(x => x.pets)
              .filter(x => x?.type.toUpperCase() === "CAT")
              .value()
          }))
          .filter(x => x.pets?.length > 0)
          .value();

        if (this.owners.length === 0) {
          this.message = "No Owners";
        }
      }, err => this.message = 'Error while fetching the data...');
  }
}