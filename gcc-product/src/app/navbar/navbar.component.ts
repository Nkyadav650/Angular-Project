import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule, MatIconButton } from '@angular/material/button';
import { MatCommonModule } from '@angular/material/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { RouterLink, RouterModule } from '@angular/router';
import { SearchService } from '../services/search.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink,MatToolbarModule,
    FormsModule,MatIconButton,MatExpansionModule,
  MatButtonModule
    ,MatMenuModule,
  MatIconModule,MatListModule,RouterModule,
  MatExpansionModule,MatTooltipModule,MatCommonModule
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  constructor(private searchService: SearchService) { }
  categoryFunc(category: string): void {
    this.searchService.setSearchValue(category);
  }
}
