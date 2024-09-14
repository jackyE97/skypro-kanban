import Calendar from "../Calendar/Calendar";
import * as S from "../PopNewCard/PopNewCard.styled";

const PopNewCard = () => {
    return (
        <S.PopNewCard>
            <S.PopNewCardContainer>
                <S.PopNewCardBlock>
                    <S.PopNewCardContent>
                        <S.PopNewCardTitle>Создание задачи</S.PopNewCardTitle>
                        <S.PopNewCardClose>&#10006;</S.PopNewCardClose>
                        <S.PopNewCardWrap>
                            <S.PopNewCardForm>
                                <S.FormNewBlock>
                                    <S.Subttl>Название задачи</S.Subttl>
                                    <S.FormNewInput
                    type="text"
                    name="title"
                    id="formTitle"
                    placeholder="Введите название задачи..."
                  />
                                </S.FormNewBlock>
                                <S.FormNewBlock>
                                <S.Subttl>Описание задачи</S.Subttl>
                                <S.FormNewArea
                    name="description"                    
                    id="textArea"
                    placeholder="Введите описание задачи..."                 
                    />
                                </S.FormNewBlock>
                            </S.PopNewCardForm>
                            <Calendar />
                        </S.PopNewCardWrap>
                        <S.PopNewCardCategories>
                        <S.CategoriesThemes>
              <S.InputRadio
                      type="radio"
                      id="radio1"
                      name="topic"
                      value="Web Design"
                    />
                    <S.RadioToolbarLabel1 htmlFor="radio1" checked={inputValue.topic === 'Web Design'}>Web Design</S.RadioToolbarLabel1>

                    <S.InputRadio
                      type="radio"
                      id="radio2"
                      name="topic"
                      value="Research"
                    />
                    <S.RadioToolbarLabel2 htmlFor="radio2" checked={inputValue.topic === 'Research'}>Research</S.RadioToolbarLabel2>

                    <S.InputRadio
                      type="radio"
                      id="radio3"
                      name="topic"
                      value="Copywriting"
                    />
                    <S.RadioToolbarLabel3 htmlFor="radio3" checked={inputValue.topic === 'Copywriting'}>Copywriting</S.RadioToolbarLabel3>
              </S.CategoriesThemes>
                        </S.PopNewCardCategories>
                        <S.FormNewCreate>
              Создать задачу
            </S.FormNewCreate>
                    </S.PopNewCardContent>
                </S.PopNewCardBlock>
            </S.PopNewCardContainer>
        </S.PopNewCard>
    );
};

export default PopNewCard;