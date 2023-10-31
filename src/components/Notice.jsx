import { HiLightBulb } from 'react-icons/hi';
export default function Notice({ oneItem, clear }) {


    if (!oneItem) {
        return (
            <div
                className="notice" data-color="light-purple">
                <p className="notice-text">
                    Для того, чтобы просмотреть информацию о{" "}
                    <span className="text-bold">выгрузке</span>, а также ее скачать,
                    нажмите на требуюмую выгрузку в столбце слева.
                </p>
            </div>
        );
    }
    return (
        <div className="notice-block">
            <div className="notice-block__content">
                <div className="notice-block__header">
                    <div className="notice-block__header-text">
                        <p className="notice-block__header-id text-bold">{oneItem.id.replace('21', '')}</p>
                        <p className="notice-block__header-text-event">   {oneItem.event.replace(/Задача выполнена:|<\/?span[^>]*>/g, "")}</p>
                    </div>
                    <p className="notice-block__header-text-clear text-bold" onClick={clear}>X</p>
                </div>
                <div className="notice-block__text-content">
                    <div className="notice-block__hint">
                        <p className="notice-block__hint-text">
                            <HiLightBulb className="notice-block__hint-icon" />  Если после клика на ссылку загрузка не пошла, проверьте не блокирует ли браузер скачивание архива.
                        </p>
                    </div>
                    <div className="notice-block__text">
                        <p className="notice__text-description text-bold">Ссылка для скачивания архива выгрузки (.zip)</p>
                        <div className="notice-block__link">
                            <a href={`${oneItem.download_link}`}>{oneItem.download_link}</a>
                            <p className='notice-block__link-copy' onClick={() => {
                                navigator.clipboard.writeText(oneItem.download_link);
                            }}>Скопировать ссылку.</p>
                        </div>
                    </div>
                    <div className="notice-block__button-container">
                        <p className="notice-block__header-text-clear text-bold __mobile-button" onClick={clear}>Закрыть</p>
                    </div>
                </div>

            </div>
        </div>
    )
}
