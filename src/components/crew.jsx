import React from "react";

// Component :
import SecHeader from './secHeader'
import Cre from './cre'

function Crew(){


    return(
        <div className="crew flex justify-center pt-20 pb-20">
            <div className="container">
                <SecHeader sec='OUR CREW' header='Talented Artist' />
                <div className="flex justify-between">
                    <Cre name='Amr Dabbas'
                        position='Full-Stack Developer'
                        about='Lorem ipsum dolor sit amet,
                            consectetur adipiscing elit. enim in
                            eros elementum'
                    />

                    <Cre name='Amr Dabbas'
                        position='Full-Stack Developer'
                        about='Lorem ipsum dolor sit amet,
                            consectetur adipiscing elit. enim in
                            eros elementum'
                    />

                    <Cre name='Amr Dabbas'
                        position='Full-Stack Developer'
                        about='Lorem ipsum dolor sit amet,
                            consectetur adipiscing elit. enim in
                            eros elementum'
                    />
                    
                </div>
            </div>
        </div>
    )
}

export default Crew;