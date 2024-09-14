import Calendar from "../Calendar/Calendar";

const PopBrowse = () => {
    return (
        <S.PopBrowse>
        <S.PopBrowseContainer>
          <S.PopBrowseBlock>
            <S.PopBrowseContent>
              <S.PopBrowseTopBlock>
              <S.PopBrowseTtl>Название задачи</S.PopBrowseTtl>
              <S.BrowseCategoriesTheme>
                <S.PopBrowseColor $themeColor={themeColor[editCard.topic]} />
              </S.BrowseCategoriesTheme>
                        </S.PopBrowseTopBlock>
                        <S.PopBrowseStatus>
                        <S.BrowseStatusP>Статус</S.BrowseStatusP>
                        <S.BrowseStatusThemes>
                                <div className="status__theme _hide">
                                    <p>Без статуса</p>
                                </div>
                                <div className="status__theme _gray">
                                    <p className="_gray">Нужно сделать</p>
                                </div>
                                <div className="status__theme _hide">
                                    <p>В работе</p>
                                </div>
                                <div className="status__theme _hide">
                                    <p>Тестирование</p>
                                </div>
                                <div className="status__theme _hide">
                                    <p>Готово</p>
                                </div>
                            </S.BrowseStatusThemes>
                        </S.PopBrowseStatus>
                        <S.PopBrowseWrap>
                        <S.PopBrowseForm id="formBrowseCard">
                        <S.FormBrowseBlock>
                        <Subttl>Описание задачи</Subttl>
                        <S.FormBrowseArea
                    name="description"
                    placeholder="Введите описание задачи..."
                  />
                                </S.FormBrowseBlock>
                            </S.PopBrowseForm>
                            <Calendar />
                        </S.PopBrowseWrap>
                        <div className="theme-down__categories theme-down">
                            <p className="categories__p subttl">Категория</p>
                            <div className="categories__theme _orange _active-category">
                                <p className="_orange">Web Design</p>
                            </div>
                        </div>
                        <div className="pop-browse__btn-browse ">
                            <div className="btn-group">
                            <S.ButtonChangeDelete>Редактировать задачу</S.ButtonChangeDelete>
                    <S.ButtonChangeDelete>Удалить задачу</S.ButtonChangeDelete>
                            </div>
                            <button className="btn-browse__close _btn-bg _hover01"><a href="#">Закрыть</a></button>
                        </div>
                        <div className="pop-browse__btn-edit _hide">
                            <div className="btn-group">
                            <S.ButtonChangeDelete>Сохранить</S.ButtonChangeDelete>
                    <S.ButtonChangeDelete>Отменить</S.ButtonChangeDelete>
                                <button className="btn-edit__delete _btn-bor _hover03" id="btnDelete"><a href="#">Удалить задачу</a></button>
                            </div>
                            <S.ButtonClose>Закрыть</S.ButtonClose>
                        </div>

                    </S.PopBrowseContent>
                </S.PopBrowseBlock>
            </S.PopBrowseContainer>
        </S.PopBrowse>
    );
};

export default PopBrowse;