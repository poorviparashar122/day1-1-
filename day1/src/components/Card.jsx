function Card(data){

    return <div style={{textAlign:"left",padding:"20px"}}>
    <h1>{data.heading}</h1>
    <ul className="Details">
    <li>{data.items1}</li>
    <li>{data.items2}</li>
    <li>{data.items3}</li>
    <li>{data.items4}</li>
    </ul>
    </div>
}
export default Card;