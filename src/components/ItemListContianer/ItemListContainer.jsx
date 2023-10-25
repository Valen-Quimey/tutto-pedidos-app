import React, { useEffect, useState } from "react";
import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore';
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";

const Loading = () => {
    return (
        <h2>Loading ...</h2>
    );
}

const ItemListContainer = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    const { cid } = useParams();

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const db = getFirestore();
                const productsCollection = collection(db, 'productos');
                let queryFilter;

                if (cid) {
                    queryFilter = query(productsCollection, where('category', '==', cid));
                } else {
                    queryFilter = productsCollection;
                }

                const querySnapshot = await getDocs(queryFilter);

                const productsData = querySnapshot.docs.map(prod => ({ id: prod.id, ...prod.data() }));
                setProducts(productsData);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchProducts();
    }, [cid]);

    return (
        <center>
            <div className="row">
                {loading ? (
                    <Loading />
                ) : (
                    <ItemList products={products} />
                )}
            </div>
        </center>
    );
}

export default ItemListContainer;
