import { Component } from '@angular/core';

@Component({
	selector: 'app-footer',
	templateUrl: './footer.component.html',
	styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
	challenge: {
		creator: { name: string; link: string };
		coder: { name: string; gitHubLink: string };
	};

	constructor() {
		this.challenge = {
			creator: {
				name: 'Frontend Mentor',
				link: 'https://www.frontendmentor.io?ref=challenge'
			},
			coder: {
				name: 'al3xback',
				gitHubLink: 'https://github.com/al3xback'
			}
		};
	}
}
