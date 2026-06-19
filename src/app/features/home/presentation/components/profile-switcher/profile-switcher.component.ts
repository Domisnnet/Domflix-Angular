import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface ProfileItem {
  name: string;
  imgSrc: string;
}

@Component({
  selector: 'app-profile-switcher',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './profile-switcher.component.html',
  styleUrls: ['./profile-switcher.component.scss'],
})
export class ProfileSwitcherComponent {
  @Output() profileSelected = new EventEmitter<ProfileItem>();

  profiles: ProfileItem[] = [
    { name: 'Fernanda', imgSrc: 'assets/images/1.webp' },
    { name: 'Fabiana', imgSrc: 'assets/images/2.webp' },
    { name: 'Alexander', imgSrc: 'assets/images/3.webp' },
    { name: 'Dom', imgSrc: 'assets/images/4.png' },
  ];

  selectProfile(profile: ProfileItem): void {
    this.profileSelected.emit(profile);
  }
}