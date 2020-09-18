import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolBarComponent } from './components/tool-bar/tool-bar.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { FlexLayoutModule } from '@angular/flex-layout';
@NgModule({
  imports: [CommonModule, MatToolbarModule, MatIconModule, FlexLayoutModule],
  declarations: [ToolBarComponent],
  exports: [ToolBarComponent],
})
export class UiModule {}
