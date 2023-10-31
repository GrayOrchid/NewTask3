export default function Card({ data, getOneItem }) {
    return (
        <div className="cards">
            {data.map((item, index) => (
                <div className="card" key={index} onClick={() => getOneItem(item.id)}>
                    <p className="card__item-text">
                        Задача выполнена:
                        <span className="card__item-span text-bold">
                            {item.task_date.replace(/Задача выполнена:|<\/?span[^>]*>/g, "")}
                        </span>
                    </p>
                    <p className="card__item-text">
                        Статус задачи:
                        <span className="card__item-span text-bold">
                            {item.status_text}
                        </span>
                    </p>

                    <p className="card__item-text">
                        ID выгрузки:
                        <span className="card__item-span text-bold"> {item.id}</span>
                    </p>
                    <p className="card__item-text">
                        Выгрузка фотосессии:
                        <span className="card__item-span text-bold">
                            {item.event.replace(/Задача выполнена:|<\/?span[^>]*>/g, "")}
                        </span>
                    </p>
                    <p className="card__item-text">
                        Размер выгрузки:
                        <span className="card__item-span text-bold"> {item.size}</span>
                    </p>
                </div>
            ))}
        </div>
    );
}
