import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectsProjectComponent } from './projects-project.component';

describe('ProjectsProjectComponent', () => {
  let component: ProjectsProjectComponent;
  let fixture: ComponentFixture<ProjectsProjectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectsProjectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectsProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
