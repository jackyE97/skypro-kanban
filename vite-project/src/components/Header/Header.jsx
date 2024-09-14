import * as S from "./Header.styled.js";
import * as L from "../PopUser/PopUser.styled.js";
import { useState } from "react";



export const Header = ({ onAddCard, isDarkTheme, setIsDarkTheme }) => {
    const [isOpen, setOpen] = useState(false);

    //Закрываем выпадающее окно
    const handleOpen = () => {
        setOpen(!isOpen)
       };
    
    const onChangeTheme = () => {
        setIsDarkTheme(isDarkTheme === "light" ? "dark" : "light");  
       };

       const clickOnExit = () => {
        setOpen(!isOpen)
       };
       

    return (
        <S.Header>
            <S.Container>
                <S.HeaderBlock>
                    <S.HeaderLogo className="_show _light">
                        <a href="" target="_self">
                        <img src="images/logo.png" alt="logo" />
                    </a>
                    </S.HeaderLogo>
                    <S.HeaderLogo  className="_dark">
            <a href="" target="_self">
              <img src="images/logo_dark.png" alt="logo" />
            </a>
          </S.HeaderLogo >
                    <S.HeaderNav>
                        <S.HeaderBtnMainNew onClick={onAddCard}>
                        <a>Создать новую задачу</a>
                        </S.HeaderBtnMainNew>
                        <S.HeaderUser onClick={handleOpen}>
                            Ivan Ivanov</S.HeaderUser>
                        { isOpen && 
                          <L.HeaderPopUserSet>
                          <L.PopUserSetName>Ivan Ivanov</L.PopUserSetName>
                          <L.PopUserSetMail>ivan.ivanov@gmail.com</L.PopUserSetMail>
                          <L.PopUserSetTheme>
                            <p>Темная тема</p>
                            <input checked={isDarkTheme === "dark"} onClick={onChangeTheme} type="checkbox" className="checkbox" name="checkbox" />
                          </L.PopUserSetTheme>
                          <L.HeaderBtnExit onClick={clickOnExit}>
                            <a>Выйти</a>
                          </L.HeaderBtnExit>
                        </L.HeaderPopUserSet>}
                    </S.HeaderNav>
                </S.HeaderBlock>
            </S.Container>
        </S.Header>
    );
}

export default Header;