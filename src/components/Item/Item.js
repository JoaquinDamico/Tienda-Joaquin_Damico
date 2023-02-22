import './styles.css';
const Item = ({product}) => {
    return (
    <div className='item'>
        <img alt={product.id} src={product.imagen} />
        <h2>{product.marca}</h2>
        <h2>{product.nombre}</h2>
        <h2>{product.modelo}</h2>
        <h2>{product.motor}</h2>
        <h2>{product.precio}</h2>
    </div>)
}

export default Item;