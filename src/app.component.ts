import {Component, ɵComponentType as ComponentType, ɵrenderComponent as renderComponent,} from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
      <h3>{{ title }}</h3>
  `
})
export class AppComponent {

  title = 'ng9';

}

renderComponent(AppComponent as ComponentType<AppComponent>);
