import './SerCard.css'
export default function SerCard({imglink,name,dis}){
    return (
        <div className="SerCard">
            <div className="img-con">
            <img src={imglink} alt={name} />
            </div>
            <div className='ser-cont'>
            <p className="service-head">{name}</p>
            <p className="service-dis">{dis}</p>
            </div>
            
        </div>
    )
}