import { NgModule } from "@angular/core";

import {MatInputModule} from '@angular/material/input'
import {MatSelectModule} from '@angular/material/select'
import {MatCardModule} from '@angular/material/card'
import {MatRadioModule} from '@angular/material/radio'
import {MatCheckboxModule} from '@angular/material/checkbox'
import {MatDialogModule} from '@angular/material/dialog'
import {MatButtonModule} from '@angular/material/button'
import { MatTableModule} from '@angular/material/table'
import {MatPaginatorModule} from '@angular/material/paginator'
import { MatSortModule} from '@angular/material/sort'
import { MatIconModule } from "@angular/material/icon";
import { MatProgressBarModule} from "@angular/material/progress-bar";
import { MatSnackBarModule } from '@angular/material/snack-bar'

@NgModule({

    exports : [
        MatInputModule, MatCardModule, MatCheckboxModule, MatDialogModule, MatRadioModule, MatSelectModule,
        MatButtonModule, MatTableModule, MatSortModule, MatPaginatorModule, MatIconModule, MatProgressBarModule, MatSnackBarModule
    ]
})
export class MaterialModule{}