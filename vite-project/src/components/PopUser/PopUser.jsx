import * as S from "./Header.styled.js";

function PopUser() {
  return (
    <S.HeaderPopUserSet>
      <a href=""></a>
      <S.PopUserSetName>Ivan Ivanov</S.PopUserSetName>
      <S.PopUserSetMail>ivan.ivanov@gmail.com</S.PopUserSetMail>
      <S.PopUserSetTheme>
        <p>Темная тема</p>
        <input type="checkbox" name="checkbox" />
      </S.PopUserSetTheme>
      <S.HeaderBtnExit>
      <a href="#popExit">Выйти</a>
      </S.HeaderBtnExit>
    </S.HeaderPopUserSet>
  );
}

export default PopUser;