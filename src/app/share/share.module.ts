import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ResourceCardComponent } from './resource-card/resource-card.component';
import { RouterModule } from '@angular/router';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
    declarations: [
        ResourceCardComponent,
        ToolbarComponent,
        FooterComponent
    ],
    imports: [
        CommonModule,
        RouterModule
    ],
    exports: [
        CommonModule,
        ResourceCardComponent,
        ToolbarComponent,
        FooterComponent
    ],
    providers: [],
})
export class ShareModule {}
