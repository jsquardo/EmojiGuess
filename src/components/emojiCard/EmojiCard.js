import React, { useState } from "react";
import "./EmojiCard.css";

function EmojiCard({ ranQuestion }) {
	const [toggle, setToggle] = useState(false);

	const clueToggle = () => {
		setToggle(!toggle);
	};

	return (
		<div className='EmojiCard'>
			<div className='container'>
				<div className='columns'>
					<div className='column is-full-mobile'>
						<div className='box'>
							<div className='is-size-3-desktop is-size-4-mobile has-text-weight-medium pb1'>
								Category: {ranQuestion.type}
							</div>
							<div className='is-size-2-desktop is-size-4-mobile'>
								{ranQuestion.emojiImgs}
							</div>
							<div className='EmojiCard-ButtonContainer'>
								<button className='button is-info mr1' onClick={clueToggle}>
									Clue?
								</button>
								<button className='button is-success ml1'>Answer</button>
							</div>
							<div className='clueBox' />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default EmojiCard;
