const products = [ // simulamos una respuesta de una API
    {id: 1, name: 'Guiso', category: 'remeras', price: 1000, stock: 500, description: 'Guiso de lentejas y fideos', imageUrl: 'https://assets.unileversolutions.com/recipes-v2/209883.jpg'}, 
    {id: 2, name: 'Asado', category: 'gorras', price: 2000, stock: 52, description: 'Asado con guarnición', imageUrl: 'https://www.infobae.com/new-resizer/WU5rIcVWzsRSYVPdDD7s-GvPggM=/filters:format(webp):quality(85)/s3.amazonaws.com/arc-wordpress-client-uploads/infobae-wp/wp-content/uploads/2018/08/09173312/asado.jpg'}, 
    {id: 3, name: 'Canelones', category: 'gorras', price: 3000, stock: 15, description: 'Canelones de carne con salsa blanca', imageUrl: 'https://www.paulinacocina.net/wp-content/uploads/2023/08/receta-de-canelones-de-carne-e1692042543650.jpg'}, 
    {id: 4, name: 'Milanesa con papas fritas', category: 'gorras', price: 4000, stock: 51, description: 'Milanesa con guarnición', imageUrl: 'https://media-cdn.tripadvisor.com/media/photo-s/12/39/45/55/milanesa-con-papas-fritas.jpg'}, 
    {id: 5, name: 'Empanadas', category: 'gorras', price: 5000, stock: 35, description: 'Empanadas de verdura, pollo o jamón y queso', imageUrl: 'https://assets.elgourmet.com/wp-content/uploads/2023/03/cover_fpa6sn8vqc_empanadas.jpg'}, 
]

export const mFetch  = (pid) =>  new Promise((res,rej) => { // simular fetch
    //acciones.
    // const condition = true
    
        setTimeout(()=>{
            res(pid  ? products.find(product => product.id === pid) : products)
        }, 1000)

})

