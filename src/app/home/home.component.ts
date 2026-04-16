import {Component, inject} from '@angular/core';
import { MenuTileComponent } from './menu-tile/menu-tile.component';
import {AuthenticationService} from "../shared/user/authentication.service";
import {SignInComponent} from "../sign-in/sign-in.component";

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.css'],
	imports: [
		MenuTileComponent,
		SignInComponent
	],
	standalone: true
})
export class HomeComponent {
	authenticationService = inject(AuthenticationService);

	readonly menus = [
		{
			title: "Questionnaires",
			description: "Révisez les bases du langage et sa syntaxe grâce à de petits questionnaires.",
			url: "/questionnaires",
		},
		{
			title: "Résolution de problèmes",
			description: "Codez un algorithme pour déterminer la solution à un problème, en utilisant votre éditeur de code préféré, puis entrez votre réponse à l'écran et vérifiez si c'est bien la solution.",
			url: "/exercices",
		},
		{
			title: "Aventure interactive de programmation",
			description:
				"Participez à une aventure palpitante, dans laquelle seules vos connaissances en Javascript vous permettront de franchir les niveaux et d'atteindre l'objectif final de votre quête !\n" +
				"Mais attention, la moindre erreur de compilation ou un bug dans votre code pourraient vous coûter très cher...",
			url: "/aventure",
		}
	];

	isAuthenticated = this.authenticationService.isAuthenticated;

}
