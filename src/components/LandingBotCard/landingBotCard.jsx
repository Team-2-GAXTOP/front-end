import './landingBotCard.css'
import rocket from '../img/rocket.svg'
import handout from '../img/handout.svg'
import binocular from '../img/binocular.svg'

const LandingBotCard = () => {

return (

    <div className='bot-card-wrapper'>
        <div className='bot-card' id='mission'>
        <h2 className='card-h2'>
            Mission
        </h2>
        <img
        src={rocket}
        alt=''
        className='card-svg'/>
        To offer under served organizations accessible information and guidance of complex grant application process.
        </div>
        <div className='bot-card' id='vision'>
        <h2 className='card-h2'>
            Vision
        </h2>
        <img
        src={binocular}
        alt=''
        className='card-svg'/>
        We want to make applying and receiving grants a realistic goal.
        </div>
        <div className='bot-card' id='value'>
        <h2 className='card-h2'>
            Value
        </h2>
        <img
        src={handout}
        alt=''
        className='card-svg'/>
        To provide authentic support to ensure that all the requirements of grant application are met.
        </div>
    </div>
)

}

export default LandingBotCard