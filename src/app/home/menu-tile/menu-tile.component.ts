import { Component, Input, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Menu } from '../menu.model';

@Component({
  selector: 'app-menu-tile',
  imports: [RouterLink],
  templateUrl: './menu-tile.component.html',
  styleUrl: './menu-tile.component.css',
  standalone: true,
})
export class MenuTileComponent {
  @Input() menu!: Menu;
}
