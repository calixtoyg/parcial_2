import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WelcomeProfesorComponent } from './welcome-profesor.component';

describe('WelcomeProfesorComponent', () => {
  let component: WelcomeProfesorComponent;
  let fixture: ComponentFixture<WelcomeProfesorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WelcomeProfesorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WelcomeProfesorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
