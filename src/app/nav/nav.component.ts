import { ArrowFunctionExpr } from '@angular/compiler';
import { Component, HostListener, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
	selector: 'app-nav',
	templateUrl: './nav.component.html',
	styleUrls: ['./nav.component.css'],
	imports: [
		RouterLink,
		RouterLinkActive,
	],
	standalone: true
})
export class NavComponent {
	readonly KONAMI_SEQUENCE = ["ArrowUp", "ArrowUp", "ArrowDown", "ArrowDown", "ArrowLeft", "ArrowRight", "ArrowLeft", "ArrowRight", "b", "a"];

	currentSequence = signal<string[]>([]);
	typingTimeout?: any;
	showConnectionButton = signal(false);

	@HostListener('document:keyup', ['$event'])
	onKeyUp(event: KeyboardEvent): void {
		clearTimeout(this.typingTimeout);

		const updatedSequence = [...this.currentSequence(), event.key];
		this.currentSequence.set(updatedSequence);

		const isKonamiSequenceDetected = this.currentSequence().join("")
			.includes(this.KONAMI_SEQUENCE.join(""));

		if (isKonamiSequenceDetected) {
			this.showConnectionButton.set(true);
			this.currentSequence.set([]);

		}

		this.typingTimeout = setTimeout(() => {
			this.currentSequence.set([]);
		}, 2000);
	}
}
