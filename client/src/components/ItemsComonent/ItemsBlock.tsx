import { useState, useEffect } from 'react';
import { getallItemsReq } from '../../api/ItemsApi';
import './ItemsBlock.css';
import { Spinner } from 'react-bootstrap';
import { ReactComponent as LikeIcon } from '../../static/like.svg';
import { useNavigate } from 'react-router-dom';


interface Item {
  id: number;
  name: string;
  price: number;
  brandId?: number;
  typeId?: number;
  rating?: number;
  img: string;
  stock_quantity: number;
  discount_price?: number;
  info?: any;
}

const ItemsList = () => {
  const [items, setItems] = useState<Item[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const navigate = useNavigate();

  const handleItemClick = (id: number) => {
    navigate(`/item/${id}`);
  };
  
  useEffect(() => {
    const fetchItems = async () => {
      try {
        const data = await getallItemsReq();
        setItems(data as Item[]);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Unknown error');
      } finally {
        setLoading(false);
      }
    };

    fetchItems();
  }, []);

  if (loading) return <div><Spinner /></div>;
  if (error) return <div>Error: {error}</div>;
  if (!items.length) return <div>No items found</div>;

  return (
    <div className="items-list">
      <h1 className="items-list__title">Онлайн-гипермаркет для профессионалов и бизнеса</h1>
      <div className="items-list__grid">
        {items.map((item) => {
          const discount = item.discount_price
            ? Math.round(((item.price - item.discount_price) / item.price) * 100)
            : 0;

          return (
            <div 
            key={item.id} 
            className="items-list__card"
            onClick={() => handleItemClick(item.id)}
            style={{ cursor: 'pointer' }}
          >
            <div key={item.id} className="items-list__card">
              <button className="items-list__like-button" aria-label="Add item to favorite" >
                <LikeIcon className='items-list__like-button'/>
              </button>

              <div className="items-list__image-wrapper">
                <img
                  src={`http://localhost:7000/${item.img}`}
                  alt={item.name}
                  className="items-list__image"
                />
              </div>

              <div className="items-list__info">
                <p className="items-list__sku">Код: {item.id}</p>
                <h3 className="items-list__name">{item.name}</h3>
                <p className="items-list__credit">Кредит до 60 мес.</p>

                <p className="items-list__price">
                  от {(item.discount_price ?? item.price).toLocaleString()} р.
                </p>

                <p className={`items-list__old-price ${item.discount_price ? '' : 'items-list__hidden'}`}>
                  <s>{item.price.toLocaleString()} р.</s>
                </p>

                <span className={`items-list__discount ${item.discount_price ? '' : 'items-list__hidden'}`}>
                  -{discount}%
                </span>

                <p className="items-list__variants">
                  Выбрать из {item.info?.length || 1} вариантов
                </p>

                <div className="items-list__bottom">
                  <button className="items-list__button">В корзину</button>
                  <span
                    className={`items-list__stock ${
                      item.stock_quantity > 0 ? 'items-list__stock--in' : 'items-list__stock--out'
                    }`}
                  >
                    {item.stock_quantity > 0 ? 'В наличии' : 'Нет в наличии'}
                  </span>
                </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ItemsList;
