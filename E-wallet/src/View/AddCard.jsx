import './AddCard.scss'

import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { addCard } from '../Reducer/CardAction';
import Header from '../Components/Header/Header';
import Card from "../Components/Card/Card";

function AddCard({store}){
    let [ccv, setCCV ] = useState();
    let [cardHolderName, setCardHolderName ] = useState();
    let [cardNumber, setCardNumber ] = useState();
    let [cardValidTo, setCardValidTo ] = useState();
    let [cardVendorId, setCardVendorId ] = useState(1);

    const navigate = useNavigate();

    let vendors = [ 
        {id: 1, name: 'BITCOIN INC' },
        {id: 2, name: 'NINJA BANK' },
        {id: 3, name: 'BLOCK CHAIN INC' },
        {id: 4, name: 'EVIL CORP' },
    ];

    const vendorsToHtml = vendors.map(item => {
        return <option value={item.id} key={item.id} >{item.name}</option>
    });

    function submitCard(e) {
        e.preventDefault();

        let newCard = {id: store.getState().myCards.length + 1, vendorId: parseInt(cardVendorId), name: cardHolderName, number: cardNumber, validDate: cardValidTo, ccv: ccv};
        store.dispatch(addCard(newCard));
        navigate('/');
    }

    return(
        <section className='addCard'>
            <Header title='ADD A NEW BANK CARD' />
            <h4>NEW CARD</h4>
            
            <div className='addCard__card'>
                <Card vendorId={-1} name="FIRSTNAME LASTNAME" number="XXXX XXXX XXXX XXXX" validDate="MM/YY" />
            </div>
            <form onSubmit={submitCard}>
                <div className='addCard__form'>
                    <div className='addCard__input__label'>CARD NUMBER</div>
                    <input className='addCard__input' type="text" name="cardNumber" onChange={e => setCardNumber(e.target.value)} required />

                    <div className='addCard__input__label'>CARDHOLDER NAME</div>
                    <input className='addCard__input' type="text" name="cardHolderName" placeholder='FIRSTNAME LASTNAME' onChange={e => setCardHolderName(e.target.value)} required />
                    
                    <div className='addCard__group'>
                        <div className='addCard__input__label '>VALID THRU</div>
                        <div className='addCard__input__label '>CCV</div>
                    </div>

                    <div className='addCard__group'>
                        <input type="text" className='addCard__input__small' name="validThru" onChange={e => setCardValidTo(e.target.value)} required />
                        <input type="text" className='addCard__input__small' name="ccv" onChange={e => setCCV(e.target.value)} required />
                    </div>

                    <div className='addCard__input__label'>VENDOR</div>
                    <select onChange={e => setCardVendorId(e.target.value)} defaultValue={1} >
                        {vendorsToHtml}
                    </select>

                    <br />
                    <button className='btn__black' >ADD CARD</button>
                </div>
            </form>
            

        </section>
    )
}

export default AddCard