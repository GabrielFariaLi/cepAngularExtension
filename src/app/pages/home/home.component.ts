import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { MatTabsModule } from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HeaderComponent, MatTabsModule, MatIconModule],
  template: ` <div class="main">
    <div class="wrapper">
      <app-header></app-header>

      <mat-tab-group class="matTabGroup" fitInkBarToContent>
        <mat-tab class="w-100 h-100" label="First">
          <ng-template mat-tab-label>
            <div class="d-flex flex-column align-items-center gap-7">
              <mat-icon class=" matTabIcon">search</mat-icon> Buscar
            </div>
          </ng-template>
          <div class="mainSearchContainer">
            <input class="inputCep" placeholder="Digite um CEP..." /></div
        ></mat-tab>
        <mat-tab label="Second">
          <ng-template mat-tab-label>
            <div class="d-flex flex-column align-items-center gap-7">
              <mat-icon class=" matTabIcon">bookmarks</mat-icon>
              Salvos
            </div> </ng-template
          >Content 2</mat-tab
        >
        <mat-tab label="Third">
          <ng-template mat-tab-label>
            <div class="d-flex flex-column align-items-center gap-7">
              <mat-icon class=" matTabIcon">history</mat-icon>
              Histórico
            </div> </ng-template
          >Content 3</mat-tab
        >
      </mat-tab-group>
    </div>
  </div>`,
  styleUrl: './home.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {}
