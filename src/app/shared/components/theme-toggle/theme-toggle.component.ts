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
  readonly isDark = signal<boolean>(typeof localStorage !== 'undefined' && localStorage.getItem('theme') !== 'light');
  constructor() {
    effect(() => {
      const dark = this.isDark();
      if (typeof document !== 'undefined' && typeof localStorage !== 'undefined') {
        document.documentElement.setAttribute('data-theme', dark ? 'dark' : 'light');
        localStorage.setItem('theme', dark ? 'dark' : 'light');
      }
    });
  } toggle(): void { this.isDark.update((value: boolean) => !value); }
}