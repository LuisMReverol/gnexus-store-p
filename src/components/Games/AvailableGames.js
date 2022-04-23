import Card from "../UI/Card";
import GameItem from "./GameItem/GameItem";
import classes from "./AvaliableGames.module.css";

const DUMMY_GAMES = [
	{
		id: "m1",
		title: "Megaman X",
		description: "Action Platform",
		price: 22.99,
	},
	{
		id: "m2",
		title: "Metal Gear Solid 2",
		description: "Stealth Action",
		price: 16.5,
	},
	{
		id: "m3",
		title: "Kingdom Hearts 2 Final Mix",
		description: "RPG",
		price: 12.99,
	},
	{
		id: "m4",
		title: "Destiny 2 Witch Queen",
		description: "First Person Shooter MMO",
		price: 18.99,
	},
];

const AvailableGames = () => {
	const gamesList = DUMMY_GAMES.map((game) => (
		<GameItem
			id={game.id}
			key={game.id}
			title={game.title}
			description={game.description}
			price={game.price}
		/>
	));

	return (
		<section className={classes.games}>
			<Card>
				<ul>{gamesList}</ul>
			</Card>
		</section>
	);
};

export default AvailableGames;
