import {
  CUSTOM_ELEMENTS_SCHEMA,
  NgModule,
  NO_ERRORS_SCHEMA,
} from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { TableComponent } from './components/table/table.component';
import { ButtonComponent } from './components/button/button.component';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    TableComponent,
    ButtonComponent,
  ],
  imports: [CommonModule, SharedRoutingModule, TranslateModule],
  exports: [
    NavbarComponent,
    FooterComponent,
    TableComponent,
    ButtonComponent,
    TranslateModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
})
export class SharedModule {}
