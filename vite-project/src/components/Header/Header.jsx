import * as S from "./Header.styled.js";
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
                          <S.HeaderPopUserSet className="pop-user-set" id="user-set-target">
                          <S.PopUserSetName>Ivan Ivanov</S.PopUserSetName>
                          <S.PopUserSetMail>ivan.ivanov@gmail.com</S.PopUserSetMail>
                          <S.PopUserSetTheme>
                            <p>Темная тема</p>
                            <input checked={isDarkTheme === "dark"} onClick={onChangeTheme} type="checkbox" className="checkbox" name="checkbox" />
                          </S.PopUserSetTheme>
                          <S.HeaderBtnExit onClick={clickOnExit}>
                            <a>Выйти</a>
                          </S.HeaderBtnExit>
                        </S.HeaderPopUserSet>}
                    </S.HeaderNav>
                </S.HeaderBlock>
            </S.Container>
        </S.Header>
    );
}

export default Header;