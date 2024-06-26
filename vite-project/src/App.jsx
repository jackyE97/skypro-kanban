import PopExit from "./components/PopExit/PopExit";
import PopNewCard from "./components/PopNewCard/PopNewCard";
import PopBrowse from "./components/PopBrowse/PopBrowse";
import Header from "./components/Header/Header/";
import Main from "./components/Main/Main";
import './App.css';
import { useState } from "react";
import { cardList } from "./components/Data/data.js";
import { GlobalStyle } from "./global.styled";

function App() {
	const [cards, setCards] = useState(cardList);
	
	return (
		<>
		<GlobalStyle/>
		<div>
			<div className="wrapper">
				<PopExit />
				<PopNewCard />
				<PopBrowse />

				<Header setCards={setCards} cards={cards} />
				<Main cardList={cards}/>
			</div>
		</div>
		</>
	)
	
}

export default App
