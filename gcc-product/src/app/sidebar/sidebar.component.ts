import { Component } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { RouterModule, Routes } from '@angular/router';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatCommonModule } from '@angular/material/core';
import { SearchService } from '../services/search.service';
import { trigger, state, style, transition, animate } from '@angular/animations';
@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [
    MatButtonModule, FormsModule,
    MatSidenavModule, RouterModule,
    MatMenuModule, MatToolbarModule,
    MatIconModule, MatListModule,
    MatExpansionModule, MatTooltipModule,
    MatCommonModule,
  ],
  animations: [
    trigger('expandCollapse', [
      state('collapsed', style({
        height: '0',
        overflow: 'hidden'
      })),
      state('expanded', style({
        height: '*'
      })),
      transition('collapsed <=> expanded', [
        animate('300ms ease-in-out')
      ])
    ])
  ],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
  constructor(private searchService: SearchService) { }

  categoryFunc(category: string): void {
    this.searchService.setSearchValue(category);
  }
   
}

