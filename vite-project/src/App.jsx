import './App.css';
import PopNewCard from "./components/PopNewCard/PopNewCard";
import PopBrowse from "./components/PopBrowse/PopBrowse";
import Header from "./components/Header/Header/";
import Main from "./components/Main/Main";
import { useState } from "react";
import { cardList } from "./data/data.js";
import { GlobalStyle } from "./global.styled";
import { ThemeProvider } from "styled-components";
import { dark, light } from "././theme.js";

function App() {
	const [cards, setCards] = useState(cardList);
	const [isDarkTheme, setIsDarkTheme] = useState("light");

	const onAddCard = () => {
		console.log("add card");

		const newCard = {
		  id: Date.now(),
		  title: "Новая задача",
		  topic: "Без темы",
		  date: "10.05.2024",
		  status: "Без статуса",
		}
		setCards([...cards, newCard]);
	  };
	
	return (
		<ThemeProvider theme={isDarkTheme === "light" ? light : dark}>
		<GlobalStyle/>
			<Header onAddCard={onAddCard} setIsDarkTheme={setIsDarkTheme} isDarkTheme={isDarkTheme}/>
			<Main cards={cards}/>
			{/* <PopBrowse/> */}
        {/* <PopUser /> */}
    </ThemeProvider>
	);
	
}

export default App;
