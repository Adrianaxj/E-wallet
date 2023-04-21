import Header from "../Components/Header/Header";
import Card from '../Components/Card/Card'
import CardStack from '../Components/CardStack/CardStack'
import { useNavigate } from "react-router-dom";
import { useSelector } from 'react-redux';

function Home({store}) {
    const navigate = useNavigate();

    const activeCardId = useSelector((state) => state.activeCardId);
    const activeCard = useSelector((state) => state.myCards.find(card => (card.id === activeCardId)));

    function handleClick() {
        navigate('/AddCard');
    }

    return(
        <section className="home">
            <Header title='E-WALLET' />
            <h4>ACTIVE CARD</h4>
            <Card vendorId={activeCard.vendorId} name={activeCard.name} number={activeCard.number} validDate={activeCard.validDate} />
            <br />
            <CardStack store={store} />
            <button className="home-card btn__white" onClick={ handleClick }>ADD A NEW CARD</button>
        </section>
    )
}

export default Home;
