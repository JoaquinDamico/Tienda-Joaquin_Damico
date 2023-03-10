import './style.css';
import Item from "../Item/Item";
const ItemList = ({productList}) => {
    console.log(productList);
    return (
    <div className='itemList'>
        {
            productList.map((product) => (
                <div key = {product.id}>
                    <Item product ={product} />
                </div>
            ))
        }
    </div>
    )
}
export default ItemList