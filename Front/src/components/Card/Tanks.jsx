import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { getAllTanks } from "../../redux/actions";
import TankCard from "../TankCard/TankCard";
import './Tanks.modules.css';
import { tankTypeName, tankNationName } from "../Functions/functions";
import LoadingScreen from "../LoadingScreen/LoadingScreen";

/*--------------------------------------------------------------------*/

const Tanks = () => {

   const dispatch = useDispatch();

   const tanks = useSelector((state) => state.tanks);

   //En este estado se almacenan los filtros que estan activos, este objeto recibe pueden ser: type, nation y tier.
   const [filters, setFilters] = useState({});

   //En este estado se almacena el contenido de la barra de texto, por el cual se filtraran los tanques que coincidan.
   const [searchTerm, setSearchTerm] = useState("");
 
   // En estos 3 estados se almacenan los estados de los botones de Nación, Tipo y Tier.
   // Esto servirá para cambiar el color de estos en funcion de si estan activos o no.
   const [activeNation, setActiveNation] = useState(null);
   const [activeType, setActiveType] = useState(null);
   const [activeTier, setActiveTier] = useState(null);

   //Se obtienen todos los tanques mediante la funcion getAllTanks.
   useEffect(() => {
      dispatch(getAllTanks());
    }, []);  


    //Esta funcion sirve para filtrar los tanques que no cumplan con los filtros de los estados "filters" y "searchTerm".
    const filterTanks = (tank) => {
   
      //Funcionamiento de la funcion Object.entries:

      //const filters = {"type": "medium", "tier": "10", "nation": "germany"} // Tenemos un objeto filters
      //Cosole.log(Object.entries(filters)) = [["type, "medium"], ["tier", "10"], ["nation", "germany"]]
      //La funcion Object.entries devuelve un array, con pequeños arrays en su interior de dos elementos
      //que son los pares clave y valor que existian en el objeto original.

      //Se hace un bucle for evaluando la clave y el valor del array de subarrays que devuelve
      //Object.entries al pasarle filters como arugmento.

      for (let [key, value] of Object.entries(filters)) {
         
        if (value && tank[key] !== value) {
         //Se evalua si la propiedad "key" ("type", "tier", "nation") del tanque
         //NO son iguales al la propiedad "value" del filtro.
         //Si las propiedades del tanque no son iguales a las propiedades almacenadas en el 
         // estado "filters" retorna falso.
          return false;
        }
      }
      if (searchTerm && !tank.short_name.toLowerCase().includes(searchTerm.toLowerCase())) {
         // Si existe un searchTerm, se eliminan los tanques que no cumplan con el filtro de la barra de texto
        return false;
      }
      // Si el tanque con los filtros anteriores no fue eliminado la funcion retorna true
      return true;
    };  

   // Esta funcion permite que los filtros sean como switches, les permite activarse y desactivarse.
   // Recibe dos parametros: type (nation, type, tier) y value (germany, heavy, 10)
    const handleFilterChange = (type, value) => {
      //Se evalua si el filtro esta activo o no
      if (filters[type] === value) {
        // Si el filtro ya está activo, lo eliminamos
        const newFilters = { ...filters };
        delete newFilters[type];
        setFilters(newFilters);
      } else {
        // Si el filtro no está activo, lo agregamos
        setFilters({ ...filters, [type]: value });
      }
    };
  
    const handleSearchTermChange = (event) => {
      setSearchTerm(event.target.value);
    };

    if (tanks.length === 0) {
      return (
        <LoadingScreen />
      );
    }
    

   return (
     <>
      <div className="bodyTanks">
      
      
         <div className="search-filter">
               <h4>Search:</h4>
               <input type="text" value={searchTerm} onChange={handleSearchTermChange} />
         </div>


         <div className="filters">


            <div className="nation-filter">
               <h4>Nation:</h4>
               {["italy", "germany", "usa", "ussr", "france", "uk", "poland", "china", "japan", "czech", "sweden"].map((nation) => (
                  <button
                  key={nation}
                  onClick={() => {
                     setActiveNation(activeNation === nation ? null : nation);
                     handleFilterChange("nation", nation)
                  }}
                  className={`buttonNationFilter ${activeNation === nation ? "active" : ""}`}
               >
                  {tankNationName(nation)}
               </button>
               ))}
            </div>


            <div className="tier-filter">
               <h4>Tier:</h4>
               {[...Array(10).keys()].map((i) => (
                  <button key={i + 1} 
                  onClick={() => {
                     setActiveTier(activeTier === i ? null : i);
                     handleFilterChange("tier", i + 1)
                  }} 
                  className={`buttonTierFilter ${activeTier === i ? "active" : ""}`}
               >
                     Tier {i + 1}
                  </button>
               ))}
            </div>


            <div className="type-filter">
               <h4>Type:</h4>
               {["lightTank", "mediumTank", "heavyTank", "SPG", "AT-SPG"].map((type) => (
                  <button key={type} onClick={() => {
                     setActiveType(activeType === type ? null : type)
                     handleFilterChange("type", type)
                  }} 
                  className={`buttonTypeFilter ${activeType === type ? "active" : ""}`}
               >
                     {tankTypeName(type)}
                  </button>
               ))}
            </div>


         </div>


         <div className="carrousel">
            {tanks.filter(filterTanks).map((tank) => (
               <TankCard
                  key={tank.tank_id}
                  image={tank.images.big_icon}
                  short_name={tank.short_name}
                  tank_id={tank.tank_id}
                  nation={tank.nation}
                  tier={tank.tier}
                  type={tank.type}
                  tag={tank.tag}
               />
            ))}
         </div>
      </div>
      </>
   );
 };

export default Tanks;
