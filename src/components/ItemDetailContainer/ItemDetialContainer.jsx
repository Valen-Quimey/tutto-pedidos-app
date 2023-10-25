import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { doc, getDoc, getFirestore } from "firebase/firestore";
import ItemDetail from "./ItemDetail/ItemDetail";

const ItemDetialContainer = () => {
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);
  const { pid } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const db = getFirestore();
        const queryDoc = doc(db, "productos", pid);
        const resp = await getDoc(queryDoc);
        const productData = { id: resp.id, ...resp.data() };

        // Aquí establecemos loading en false después de cargar los datos
        setProduct(productData);
        setLoading(false);
      } catch (error) {
        console.error("Error al cargar los datos:", error);
      }
    };

    // Llamamos a la función fetchData para cargar los datos
    fetchData();
  }, [pid]); // pid es una dependencia para recargar los datos cuando cambia

  return (
    <div>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <ItemDetail product={product} />
      )}
    </div>
  );
};

export default ItemDetialContainer;
