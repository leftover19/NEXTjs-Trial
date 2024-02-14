export default function ProductDetail({
    params
}:{
    params : {productID : string , category : number},
}){
    return(
        <div>Details of current product {params.productID } </div>
    )
}
// dynamic routing
