import ToggleSwitch from "./ToggleSwitch";

function Header({topic}) {
    return ( 
        <>
        
        <div className="flex justify-between bg-white pt-3 dark:text-white dark:bg-gray-900 text-gray-700 transition-colors duration-300">
           <div className="text-xl md:ms-6 ms-6 font-semibold">{topic}</div>
          <div className="me-5"><ToggleSwitch/></div>
           
        </div>
    
        </>
     );
}

export default Header;