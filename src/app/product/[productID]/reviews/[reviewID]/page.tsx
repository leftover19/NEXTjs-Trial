export default function ReviewID({
    params,
}: {params: {reviewID  : number , productID : number}
}){
    return(
        <div>
            This is review number {params.reviewID} for product number {params.productID}
        </div>
    )
}