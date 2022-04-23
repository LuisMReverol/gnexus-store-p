import { useContext } from "react";

import GameItemForm from "./GameItemForm";
import classes from "./GameItem.module.css";
import CartContext from "../../../store/cart-contex";

const GameItem = (props) => {
	const cartCtx = useContext(CartContext);
	const price = `$${props.price.toFixed(2)}`;

	const onAddToCartHandler = (amount) => {
		cartCtx.addItem({
			id: props.id,
			title: props.title,
			amount: amount,
			price: props.price,
		});
	};

	return (
		<li className={classes.game}>
			<div>
				<h3>{props.title}</h3>
				<div className={classes.description}>{props.description}</div>
				<div className={classes.price}>{price}</div>
			</div>
			<div>
				<GameItemForm onAddToCart={onAddToCartHandler} />
			</div>
		</li>
	);
};

export default GameItem;
