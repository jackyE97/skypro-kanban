import PopExit from "./components/PopExit/PopExit";
import PopNewCard from "./components/PopNewCard/PopNewCard";
import PopBrowse from "./components/PopBrowse/PopBrowse";
import Header from "./components/Header/Header/";
import Main from "./components/Main/Main";
import './App.css';
import { useState } from "react";
import { cardList } from "./data";

function App() {
	const [cards, setCards] = useState(cardList);
	return (
		<div>
			<div className="wrapper">
				<PopExit />
				<PopNewCard />
				<PopBrowse />

				<Header setCards={setCards} cards={cards} />
				<Main cardList={cards}/>
			</div>
		</div>
	)
}

export default App
