import { NgModule } from '@angular/core';
import { EventListPipe } from './event-list/event-list';
@NgModule({
	declarations: [EventListPipe],
	imports: [],
	exports: [EventListPipe]
})
export class PipesModule {}
