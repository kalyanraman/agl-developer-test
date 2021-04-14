import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PetDetailComponent } from '../pet-detail/pet-detail.component';
import { Pet } from '../shared/models/pet';
import { PetsListComponent } from './pets-list.component';

describe('PetsListComponent', () => {
  let component: PetsListComponent;
  let fixture: ComponentFixture<PetsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PetsListComponent, PetDetailComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PetsListComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should sort pets by name', () => {
    const pets: Pet[] = [
      { name: 'Ben', type: 'Cat' },
      { name: 'Adam', type: 'Cat' },
      { name: 'bake', type: 'Cat' }
    ];

    component.pets = pets;
    fixture.detectChanges();
    expect(component.sortedPets[0].name).toEqual('Adam');
    expect(component.sortedPets[1].name).toEqual('Ben');
  });
});
