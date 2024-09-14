import * as S from "../PopExit/PopExit.styled.js";

const PopExit = () => {
    return (
        <S.PopExit>
            <S.PopExitContainer>
                <S.PopExitBlock>
                        <S.PopExitTitle>Выйти из аккаунта?</S.PopExitTitle>
                    <S.PopExitForm action="#">
                        <S.PopExitFormGroup>
                            <S.PopExitYes>Да, выйти</S.PopExitYes>
                            <S.PopExitNo>Нет, остаться</S.PopExitNo>
                        </S.PopExitFormGroup>
                    </S.PopExitForm>
                </S.PopExitBlock>
            </S.PopExitContainer>
        </S.PopExit>
    );
};

export default PopExit;