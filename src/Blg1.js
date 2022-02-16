//Import CSS files
import './Blg1.css'


//Import JS files
import Para from './para1.js'

//Import Images
import Photo from './Photo(3)(4).jpg'
import TimePhoto from './TimeTr.jpg'
import LightPhoto from './LightPhoto.jpg'
import SunPhoto from './SunPhoto.jpg'
import StructuredPhoto from './Structure.jpg'
import Gravity from './Gravity.jpg'


//Blog of Space Facts              <<<<<<<<<<<<1>>>>>>>>>>>>>
function Blog() {
    return (
        <div className="blog">
            <img src={Photo}  className="imageSpFacts" alt="not avaiable" width="100%" height="80%"/>
            
            <div className="Topics">
                <div className="topic">
                    
                </div>
            </div>
            <Para title="Time travel" content="We can see the past but we can't travel to it. We can't see the future but we can travel to it." imageSrc={TimePhoto} clas={'TimeTravel'} />
            <Para title="Light doesn't experience time" content="According to Special Relativity, the closer you get to light speed the less time you experience and the shorter a distance you experience. At light speed, time dilation its maximum. So, if photons has an internal clock, it wouldn't move at all!" imageSrc={LightPhoto} clas={'LightSpeed'} />
            <Para title="Sun speed" content="Our sun orbits the center of the milky way galaxy, travelling at about average of 450,000 miles per hour. Even at the speed, it takes about million years to complete one orbit." imageSrc={SunPhoto} clas={'Sun'} />
            <Para title="Largest Known Structure" content="The largest known structure in the Universe is a 18 billion light-years across." imageSrc={StructuredPhoto} clas={'Structure'} />
            <Para title="Gravity vs Magnetism" content="Gravity and magnetism are not the same thing. Infact, they are completely separate forces. Gravity is a force that acts between any two objects with mass. Magnetism can either pull two objects together or puch them apart depending on which way the magnets point." imageSrc={Gravity} clas={'Gravity'} />
        </div>
    )
}

export default Blog;