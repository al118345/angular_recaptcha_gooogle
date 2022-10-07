import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsincronoComponent } from './asincrono.component';

describe('AsincronoComponent', () => {
  let component: AsincronoComponent;
  let fixture: ComponentFixture<AsincronoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AsincronoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AsincronoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
