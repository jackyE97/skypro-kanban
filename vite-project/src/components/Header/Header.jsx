import * as S from "./Header.styled.js";
import { useState } from "react";
import PopUser from "../PopUser/PopUser";



const Header = ({ setCards, cards }) => {
    const [isOpen, setOpen] = useState(false);

    const handleOpen = () => { setOpen((prev) => !prev) };

    const onAddCard = () => {
        console.log("add card");

        const newCard = {
            id: Date.now(),
            title: "Новая задача",
            topic: "Без темы",
            date: "10.05.2024",
            status: "Без статуса",
        }
        const newCardList = [...cards, newCard]
        setCards(newCardList);
    };

    return (
        <S.Header>
            <S.Container>
                <S.HeaderBlock>
                    <S.HeaderLogo>
                        {/* <a href="" target="_self">
                        <img src="images/logo.png" alt="logo" />
                    </a> */}
                    </S.HeaderLogo>
                    {/* <div className="header__logo _dark">
                    <a href="" target="_self"><img src="images/logo_dark.png" alt="logo" /></a>
                </div> */}
                    <S.HeaderNav>
                        <S.HeaderBtnMainNew onClick={onAddCard}>
                            Создать новую задачу
                        </S.HeaderBtnMainNew>
                        <S.HeaderUser onClick={handleOpen}>
                            Ivan Ivanov</S.HeaderUser>
                        {isOpen && <PopUser />
                            // (
                            //              <div className="header__pop-user-set pop-user-set">
                            //              <p className="pop-user-set__name">Ivan Ivanov</p>
                            //              <p className="pop-user-set__mail">ivan.ivanov@gmail.com</p>
                            //              <div className="pop-user-set__theme">
                            //                  <p>Темная тема</p>
                            //                  <input type="checkbox" className="checkbox" name="checkbox" />
                            //              </div>
                            //              <button type="button" className="_hover03"><a href="#popExit">Выйти</a></button>
                            //          </div>
                            // )
                        }
                    </S.HeaderNav>
                </S.HeaderBlock>
            </S.Container>
        </S.Header>
    );
}

export default Header;