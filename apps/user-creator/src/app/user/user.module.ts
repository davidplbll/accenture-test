import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserformComponent } from './components/userform/userform.component';
import { UserCreateComponent } from './page/user-create/user-create.component';
import { EffectsModule } from '@ngrx/effects';
import { UserEffects } from './effects/user.effects';
import { reducer, userFeatureKey } from './reducers/user.reducer';
import { StoreModule } from '@ngrx/store';

import { ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import {MatDatepickerModule} from "@angular/material/datepicker"
import { MatNativeDateModule } from '@angular/material/core';
@NgModule({
  declarations: [UserformComponent, UserCreateComponent],
  imports: [
    CommonModule,
    UserRoutingModule,
    MatNativeDateModule,
    EffectsModule.forFeature([UserEffects]),
    StoreModule.forFeature(userFeatureKey, reducer),
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    FlexLayoutModule,
    MatButtonModule,
    MatDatepickerModule,
  ],
})
export class UserModule {}
