import Card from '../Card/Card.jsx'
import './Cards.modules.css'

export default function Cards(props) {
   const { tanks } = props;
   return (
      <div className='carrousel' >
         {tanks.map(tank => {
            return <Card 
            key = {tank.id}
            name = {tank.name} 
            type = {tank.type} 
            weight = {tank.weight} 
            image = {tank.image}
            backgroundImg = {tank.backgroundImg}
            nation = {tank.nation}
            crew = {tank.crew}
            tier = {tank.tier}
            />;
            }
         )}
      </div>
   );
}
