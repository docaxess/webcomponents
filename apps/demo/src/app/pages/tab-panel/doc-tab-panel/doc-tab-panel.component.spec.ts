import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DocTabPanelComponent } from './doc-tab-panel.component';

describe('DocTabPanelComponent', () => {
  let component: DocTabPanelComponent;
  let fixture: ComponentFixture<DocTabPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DocTabPanelComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DocTabPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
