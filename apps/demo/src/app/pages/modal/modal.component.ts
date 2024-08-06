import {
  Component,
  Input,
  Output,
  EventEmitter,
  ComponentFactoryResolver,
  ViewChild,
  ViewContainerRef,
  ComponentRef,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ModalComponent {
  @Input() title: string = 'Default Title';
  @Input() isVisible: boolean = false;
  @Input() contentComponent: any;
  @Output() closeModal: EventEmitter<void> = new EventEmitter<void>();

  @ViewChild('modalContent', { read: ViewContainerRef })
  contentHost!: ViewContainerRef;
  currentView: 'preview' | 'code' | 'doc' = 'preview';

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private cdRef: ChangeDetectorRef,
  ) {}

  ngOnChanges() {
    if (this.isVisible) {
      this.loadComponent();
    }
  }

  switchView(view: 'preview' | 'code' | 'doc'): void {
    this.currentView = view;
    this.loadComponent();
  }

  loadComponent() {
    if (!this.isVisible || !this.contentComponent) {
      return;
    }

    this.contentHost.clear();
    const componentFactory =
      this.componentFactoryResolver.resolveComponentFactory(
        this.contentComponent,
      );
    const componentRef: ComponentRef<any> =
      this.contentHost.createComponent(componentFactory);
    componentRef.instance.currentView = this.currentView;
  }

  onClose(): void {
    this.closeModal.emit();
    this.cdRef.detectChanges();
  }
}
