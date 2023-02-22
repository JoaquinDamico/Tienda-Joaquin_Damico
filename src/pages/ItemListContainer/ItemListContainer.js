import products from "../../data/products"
import {useEffect, useState} from 'react';
import ItemList from "../../components/ItemList/ItemList";
import { useParams } from "react-router-dom";
    const ItemListContainer = ({greeting}) => {
        const [productList, setProductList] = useState ([]);
        const {categoryId} = useParams();
        console.log(categoryId);
        const getProducts = new Promise((res, rej) => {
            setTimeout(() => {
                res(products)
            }, 2000)
        });

        useEffect (() => {
            getProducts
            .then((response) => {
                /*console.log(response)*/
            setProductList(response)
            })
            .catch((error) => {
                console.log(error)
            })
        }, []);

        return(
            <div>
                <ItemList productList={productList}/>
            </div>
        )
    };

export default ItemListContainer;