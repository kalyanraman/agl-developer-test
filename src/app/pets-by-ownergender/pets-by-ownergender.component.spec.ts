import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PetsByOwnergenderComponent } from './pets-by-ownergender.component';

describe('PetsByOwnergenderComponent', () => {
  let component: PetsByOwnergenderComponent;
  let fixture: ComponentFixture<PetsByOwnergenderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PetsByOwnergenderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PetsByOwnergenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
