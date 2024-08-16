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
  HostListener,
  SimpleChanges,
  OnChanges,
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
export class ModalComponent implements OnChanges {
  @Input() title: string = 'Default Title';
  @Input() isVisible: boolean = false;
  @Input() contentComponent: any;
  @Output() closeModal: EventEmitter<void> = new EventEmitter<void>();
  @ViewChild('modalContent', { read: ViewContainerRef })
  contentHost!: ViewContainerRef;
  currentView: 'preview' | 'code' | 'doc' = 'preview';

  constructor(private componentFactoryResolver: ComponentFactoryResolver) {}

  ngOnChanges(changes: SimpleChanges) {
    if (changes['isVisible']) {
      if (this.isVisible) {
        this.currentView = 'preview';
        this.loadComponent();
      } else {
        this.currentView = 'preview';
      }
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
    if (!this.contentHost) {
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
  @HostListener('document:keydown.escape', ['$event'])
  handleEscapeKey(event: KeyboardEvent) {
    if (this.isVisible) {
      this.onClose();
    }
  }
  onClose(): void {
    this.isVisible = false;
    this.closeModal.emit();
  }
}
