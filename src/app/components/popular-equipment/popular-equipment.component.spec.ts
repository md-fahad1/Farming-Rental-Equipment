import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopularEquipmentComponent } from './popular-equipment.component';

describe('PopularEquipmentComponent', () => {
  let component: PopularEquipmentComponent;
  let fixture: ComponentFixture<PopularEquipmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PopularEquipmentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PopularEquipmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
