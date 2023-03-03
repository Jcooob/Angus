import { Link } from "react-router-dom";
import { tankTypeName, tankNationName, convertToRoman } from "../Functions/functions";
const backGroundImg = "https://na-wotp.wgcdn.co/static/5.117.1_a28195/wotp_static/img/tankopedia_new/frontend/scss/tankopedia-detail/img/hangar-bg.webp"

const TankCard = ({ tank_id, type, short_name, nation, tier, image }) => {

    const bigFlag = `https://na-wotp.wgcdn.co/static/5.117.1_a28195/wotp_static/img/tankopedia_new/frontend/scss/tankopedia-detail/img//flags/${nation.toLowerCase()}.jpg`
    
    return (
        <Link to = {`/detail/${tank_id}`}>
            <div className='container'>

                <div className="garage">
                    <img src={backGroundImg} className='garageBackground'/>
                    <img src={image} alt={short_name} className='tankSmall' />
                </div>
                
                <div className="info">
                    <img src={bigFlag} className="flagBackground"/>
                    <div className="panel">
                        <div className="dataCard">
                            <h2> {short_name} </h2>
                            <h3> {tankNationName(nation)} </h3>
                            <h3> {tankTypeName(type)} </h3>
                            <h3> Tier {convertToRoman(tier)} </h3>
                        </div>
                    </div>
                </div>

            </div>
        </Link>
    )
}

export default TankCard;