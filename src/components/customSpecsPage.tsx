import { useAppSelector } from '../features/hooks'
import '../css/customSpecsPage.css';
import unknownPhone from '../icons/unknownPhone.svg';
export default function CustomSpecsPage() {

    const phone = useAppSelector(state => state.specsReducer)


    return (
        <>
            <div className='specific-device-container'>
                <div id='smartphone-and-its-name' style={{ display: 'flex', fontFamily: `Oxygen, sans-serif`, textAlign: 'center', justifyContent: 'space-around', alignItems: 'center' }}>
                   {phone.imageAddress === '' ? <img src={unknownPhone} id='spec-phone-image' alt='Phone frame with question mark'></img> :  <img src={phone.imageAddress} alt={phone.name + "Picture"} draggable={false}></img>}
                    <h2>{phone.name===''?"No Phone Selected":phone.name}</h2>
                </div>

                <div className='specifications'>
                    <div><h4>Announced:</h4> {phone.specs.announced}</div>
                    <div><h4>Network:</h4> {phone.specs.network}</div>
                    <div><h4>Dimensions:</h4> {phone.specs.dimensions}</div>
                    <div><h4>Weight:</h4> {phone.specs.weight}</div>
                    <div><h4>Build:</h4> {phone.specs.build}</div>
                    <div><h4>Sim:</h4> {phone.specs.sim}</div>
                    <div><h4>Display Size:</h4> {phone.specs.displaySize}</div>
                    <div><h4>Chipset:</h4> {phone.specs.chipset}</div>
                    <div><h4>CPU:</h4> {phone.specs.cpu}</div>
                    <div><h4>GPU:</h4> {phone.specs.gpu}</div>
                    <div><h4>Memory:</h4> {phone.specs.memory}</div>
                    <div><h4>Camera:</h4> {phone.specs.camera}</div>
                    <div><h4>Video:</h4> {phone.specs.video}</div>
                    <div>
                        <h4>Selfie Camera:</h4> {phone.specs.selfieCamera}</div>
                    <div><h4>Battery:</h4> {phone.specs.battery}</div>
                    <div><h4>Colors:</h4> {phone.specs.colors}</div>


                </div>
            </div>
        </>
    )
}
