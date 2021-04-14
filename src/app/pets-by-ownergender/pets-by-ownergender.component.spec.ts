import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of, throwError } from 'rxjs';
import { PetDetailComponent } from '../pet-detail/pet-detail.component';
import { PetsListComponent } from '../pets-list/pets-list.component';
import { Owner } from '../shared/models/owner';
import { PeopleService } from '../shared/services/people.service';

import { PetsByOwnergenderComponent } from './pets-by-ownergender.component';

describe('PetsByOwnergenderComponent', () => {
  let component: PetsByOwnergenderComponent;
  let fixture: ComponentFixture<PetsByOwnergenderComponent>;
  let service: jasmine.SpyObj<PeopleService>;

  beforeEach(async () => {
    const spy = jasmine.createSpyObj('PeopleService', ['getPeople']);
    await TestBed.configureTestingModule({
      declarations: [PetsByOwnergenderComponent, PetDetailComponent, PetsListComponent],
      providers: [
        { provide: PeopleService, useValue: spy }
      ]
    })
      .compileComponents();

    service = TestBed.inject(PeopleService) as jasmine.SpyObj<PeopleService>;

  });

  let createTestComponent = function (input: Owner[]) {
    service.getPeople.and.returnValues(of(input));
    fixture = TestBed.createComponent(PetsByOwnergenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  };

  it('should create', () => {
    createTestComponent([]);
    expect(component).toBeTruthy();
  });

  it('should have called getPeople', () => {
    createTestComponent([]);
    expect(service.getPeople.calls.count()).toBe(1, 'getPeople() invoked once');
  });

  it('should filter owners without pets', () => {
    const sample = [
      {
        "name": "Bob", "gender": "Male", "age": 23,
        "pets": [{ "name": "Garfield", "type": "Cat" }, { "name": "Fido", "type": "Dog" }]
      },
      { "name": "Samantha", "gender": "Female", "age": 45, "pets": null }
    ];


    createTestComponent(sample as Owner[]);
    expect(component.owners.length).toBe(1);
  });

  it('should filter owners without cats', () => {
    const sample = [
      {
        "name": "Bob", "gender": "Male", "age": 23,
        "pets": [{ "name": "Garfield", "type": "Cat" }, { "name": "Fido", "type": "Dog" }]
      },
      { "name": "Samantha", "gender": "Female", "age": 45, "pets": [{ "name": "Fido", "type": "Dog" }] }
    ];


    createTestComponent(sample as Owner[]);
    expect(component.owners.length).toBe(1);
  });

  it('should group pets by owners gender', () => {
    const sample = [
      {
        "name": "Bob", "gender": "Male", "age": 23,
        "pets": [{ "name": "Garfield", "type": "Cat" }, { "name": "Fido", "type": "Dog" }]
      },
      { "name": "Samantha", "gender": "Female", "age": 45, "pets": [{ "name": "Fido", "type": "Cat" }] }
    ];


    createTestComponent(sample as Owner[]);
    expect(component.owners.length).toBe(2);
  });

  it('should group pets by owners gender and have valid pets', () => {
    const sample = [
      {
        "name": "Bob", "gender": "Male", "age": 23,
        "pets": [{ "name": "Garfield", "type": "Cat" }, { "name": "Fido", "type": "Dog" }]
      },
      { "name": "Steve", "gender": "Male", "age": 45, "pets": null },
      {
        "name": "Jennifer", "gender": "Female", "age": 18, "pets": [
          { "name": "Garfield", "type": "Cat" },
          { "name": "Simba", "type": "Cat" }]
      },
      { "name": "Samantha", "gender": "Female", "age": 40, "pets": [{ "name": "Tabby", "type": "Cat" }] }
    ];


    createTestComponent(sample as Owner[]);
    expect(component.owners[0].pets.length).toBe(1);
    expect(component.owners[1].pets.length).toBe(3);
  });

  it('should display No Owners when there are no owners with cats', () => {
    const sample = [
      { "name": "Steve", "gender": "Male", "age": 45, "pets": [{ "name": "Fido", "type": "Dog" }] }
    ];
    createTestComponent(sample as Owner[]);
    const el: HTMLElement = fixture.nativeElement;
    const d = el.querySelector('h5');
    expect(d?.textContent).toEqual('No Owners');
  });

  it('should show error message when an exception occur while fetching data', () => {
    service.getPeople.and.returnValue(throwError({status: 500}));
    fixture = TestBed.createComponent(PetsByOwnergenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    expect(component.message).toEqual('Error while fetching the data...');
  });
});
