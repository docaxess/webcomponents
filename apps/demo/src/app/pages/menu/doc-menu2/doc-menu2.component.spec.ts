import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DocMenu2Component } from './doc-menu2.component';

describe('DocMenu2Component', () => {
  let component: DocMenu2Component;
  let fixture: ComponentFixture<DocMenu2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DocMenu2Component],
    }).compileComponents();

    fixture = TestBed.createComponent(DocMenu2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
