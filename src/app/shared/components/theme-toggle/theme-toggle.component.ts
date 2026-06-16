import { Component, signal, effect } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-theme-toggle',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './theme-toggle.component.html',
  styleUrls: ['./theme-toggle.component.scss'],
})
export class ThemeToggleComponent {
  readonly isDark = signal(false);
  constructor() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      this.isDark.set(true);
    }
    effect(() => {
      document.documentElement.classList.toggle( 'dark', this.isDark() );
      localStorage.setItem( 'theme', this.isDark() ? 'dark' : 'light' );
    });
  }
  toggle() { this.isDark.update(value => !value); }
}