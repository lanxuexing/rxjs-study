import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-resource-card',
  templateUrl: './resource-card.component.html',
  styleUrls: ['./resource-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ResourceCardComponent {
  @Input() path: string;
  @Input() name: string;

}
