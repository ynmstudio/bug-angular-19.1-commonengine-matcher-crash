import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RouteCComponent } from './route-c.component';

describe('RouteCComponent', () => {
  let component: RouteCComponent;
  let fixture: ComponentFixture<RouteCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouteCComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RouteCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
