import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { ShareModule } from '../share/share.module';

@NgModule({
    declarations: [
        HomeComponent
    ],
    imports: [
        ShareModule
    ],
    exports: [],
    providers: [],
})
export class ModulesModule {}
