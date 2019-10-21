import React, { useState, useEffect } from "react";
import EmojiCard from "../emojiCard/EmojiCard";
import emojiItems from "../../Data/Data.js";

function Game() {
	const ranQuestionIndex = Math.floor(Math.random() * emojiItems.length);
	const ranQuestion = emojiItems[ranQuestionIndex];
	console.log(ranQuestion);

	return (
		<div>
			<EmojiCard ranQuestion={ranQuestion} />
		</div>
	);
}

export default Game;
