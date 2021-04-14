import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PetDetailComponent } from './pet-detail.component';

describe('PetDetailComponent', () => {
  let component: PetDetailComponent;
  let fixture: ComponentFixture<PetDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PetDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PetDetailComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display pet name', () => {
    component.pet = { name: 'Rob', type:'Cat'};
    fixture.detectChanges();
    const el: HTMLElement = fixture.nativeElement;
    const name = el.textContent;
    expect(name).toEqual('Rob');
  });
});
