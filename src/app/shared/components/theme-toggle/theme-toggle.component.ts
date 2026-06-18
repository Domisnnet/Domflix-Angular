import { Component, effect, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-theme-toggle',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './theme-toggle.component.html',
  styleUrls: ['./theme-toggle.component.scss'],
})
export class ThemeToggleComponent {
  readonly isDark = signal( localStorage.getItem('theme') === 'dark' );
  constructor() {
    effect(() => {
      const dark = this.isDark();
      document.documentElement.classList.toggle( 'dark', dark );
      localStorage.setItem( 'theme', dark ? 'dark' : 'light' );
    });
  }
  toggle(): void { this.isDark.update(value => !value); }
}