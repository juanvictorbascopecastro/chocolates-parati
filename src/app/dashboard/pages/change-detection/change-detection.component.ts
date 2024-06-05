import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  computed,
  signal,
} from '@angular/core';
import { TitleComponent } from '@shared/title/title.component';

@Component({
  standalone: true,
  imports: [CommonModule, TitleComponent],
  changeDetection: ChangeDetectionStrategy.OnPush, // esta pendiente en menos punto de la aplicacion
  templateUrl: './change-detection.component.html',
  styles: ``,
})
export default class ChangeDetectionComponent {
  public currenFrameword = computed(
    () => `Change detection - ${this.framewordAsSignal().name}`
  );
  public framewordAsSignal = signal({
    name: 'Angular',
    realeaseDate: 2016,
  });

  public frameworkAsProperty = {
    name: 'Angular',
    realeaseDate: 2016,
  };
  constructor() {
    setTimeout(() => {
      //  this.frameworkAsProperty.name = 'React';
      this.framewordAsSignal.update((value) => ({ ...value, name: 'Vue.js' }));
      console.log('aqui');
    }, 3000);
  }
}
