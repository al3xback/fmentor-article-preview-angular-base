import { Component } from '@angular/core';

@Component({
	selector: 'app-card',
	templateUrl: './card.component.html',
	styleUrls: ['./card.component.scss']
})
export class CardComponent {
	title =
		'Shift the overall look and feel by adding these wonderful touches to furniture in your home';
	description =
		"Ever been in a room and felt like something was missing? Perhaps it felt slightly bare and uninviting. I've got some simple tips to help you make any room feel complete.";
	imageSrc = '/assets/images/drawers.jpg';
	author = {
		name: 'Michelle Appleton',
		imageSrc: '/assets/images/avatar.jpg',
		postDate: new Date(2020, 5, 28)
	};

	getAuthorPostDate() {
		const day = this.author.postDate.getDate();
		const month = this.author.postDate.toLocaleString('en-US', {
			month: 'short'
		});
		const year = this.author.postDate.getFullYear();
		return `${day} ${month} ${year}`;
	}
}
