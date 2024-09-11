import style from './Card.module.css'

export const Card = ({ items }) => {
    return (
        <>
            {items.map((item) => (
                <div className={style.cardItem} key={item.id}>
                    <img
                        className={style.cardItemImage}
                        src={`/src/assets/${item.img}`}
                        alt="Картинка карточки"
                    />
                    <div className={style.cardContainer}>
                        <p className={style.cardItemCategory}>{item.category}</p>
                        <h3 className={style.cardItemTitle}>{item.title}</h3>
                    </div>
                    <p className={style.cardItemDescription}>{item.description}</p>
                    <a href="#" className={style.btn}>
                        {item.link} &rarr;
                    </a>
                </div>
            ))}
        </>
    )
}
