import ToggleSwitch from "./ToggleSwitch";

function Header({topic}) {
    return ( 
        <>
        
        <div className="flex justify-between bg-white dark:text-purple-400 dark:bg-gray-900 text-purple-400 transition-colors duration-300">
           <div>{topic} Accesibility</div>
           <ToggleSwitch/>
        </div>
    
        </>
     );
}

export default Header;