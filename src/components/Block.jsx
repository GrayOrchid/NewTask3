export default function Block(params) {
    return (
        <div className="block">
            <div className="block__text">
                <h1 className="block__title text-bold">Выгрузка</h1>
                <p className="block__subtitle text-bold">Выполняет работу:</p>
            </div>
            <div className="block__list-items">
                <p className="block__list-item">
                    Собирает фотографии из заказов пользователей.
                </p>
                <p className="block__list-item">Выгружает по папкам.</p>
            </div>
        </div>
    );
}
