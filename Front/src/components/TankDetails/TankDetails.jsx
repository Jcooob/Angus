import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getAllTanks, getTankDetails, cleanTankDetails } from "../../redux/actions";
import React from "react";
import { convertToRoman, tankTypeName, tankNationName } from "../Functions/functions";
import "./TankDetails.modules.css"
import LoadingScreen from "../LoadingScreen/LoadingScreen";

const TankDetail = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const tank = useSelector(state => state.tankDetails)

    React.useEffect(() => {
        dispatch(getTankDetails(id));
        return () => dispatch(cleanTankDetails());
      }, [])

      if (!tank) {
        return (
          <LoadingScreen />
        ); // Manejar el caso donde no hay detalles del tanque
      }
      
      const tankImg = `https://na-wotp.wgcdn.co/dcont/tankopedia_images/${tank.tag.toLowerCase()}/${tank.tag.toLowerCase()}_image.png`
      const backGroundImg = "https://na-wotp.wgcdn.co/static/5.117.1_a28195/wotp_static/img/tankopedia_new/frontend/scss/tankopedia-detail/img/hangar-bg.webp"
      const bigFlag = `https://na-wotp.wgcdn.co/static/5.117.1_a28195/wotp_static/img/tankopedia_new/frontend/scss/tankopedia-detail/img//flags/${tank.nation.toLowerCase()}.jpg`
      

      return(
        <>
        <div className="bodyDetail">

          <div className="intro" style={{ 
            backgroundImage: `url(${bigFlag})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover'
          }}>
            <h1 className="nameTank">{tank.name}</h1>
            <h4>{tankNationName(tank.nation)}</h4>
            <h5>{tankTypeName(tank.type)}</h5>
            <h5>Tier {convertToRoman(tank.tier)}</h5>
            <h6>{tank.description}</h6>
          </div>

          <div className="gradient"></div>

          <div className="garage" style={{ 
            backgroundImage: `url(${backGroundImg})`,
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}>
            <img src = {tankImg} className="tank"/>
          </div>


        </div>
        </>
      );
    }

export default TankDetail;