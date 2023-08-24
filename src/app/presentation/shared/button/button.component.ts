import {
  Input,
  OnInit,
  Component,
} from "@angular/core";

@Component({
  standalone: true,
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export default class ButtonComponent implements OnInit {

  @Input({ required: false }) icon: string;

  @Input({ required: false }) label: string;

  @Input({ required: true }) type: 'button' | 'submit' | 'reset';

  @Input({ required: false }) disabled: boolean;

  ngOnInit(): void {}
}
