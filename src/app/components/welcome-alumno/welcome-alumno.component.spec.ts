import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WelcomeAlumnoComponent } from './welcome-alumno.component';

describe('WelcomeAlumnoComponent', () => {
  let component: WelcomeAlumnoComponent;
  let fixture: ComponentFixture<WelcomeAlumnoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WelcomeAlumnoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WelcomeAlumnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
