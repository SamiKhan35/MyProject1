import React from 'react'
import { RiMailFill } from "react-icons/ri";
import { FaWhatsapp } from "react-icons/fa";

const Navbar = () => {
    return (
        <div>
            
    // upper Navbar
            <div>
                <div>
                    <div>
                        <a href='mailto:info@grandeurchauffeurs.com' alt ='mail'>
                            <RiMailFill />
                        </a>
                           {/* whatsapp and phone number bar */}
                    
                        <div>
                            <FaWhatsapp />
                        </div>
                    </div>
                 
                    
                </div>
            </div>
    //   lower Navbar
      <div> </div> 
      </div>
)
}

export default Navbar