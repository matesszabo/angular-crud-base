import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RuhaListComponent } from './ruha-list.component';

describe('RuhaListComponent', () => {
  let component: RuhaListComponent;
  let fixture: ComponentFixture<RuhaListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RuhaListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RuhaListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
