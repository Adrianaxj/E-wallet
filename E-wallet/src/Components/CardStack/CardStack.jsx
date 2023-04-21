import { setActiveCard } from '../../Reducer/CardAction';
import Card from "../Card/Card";

function CardStack({store}) {
    
    function handleClick(id) {
        store.dispatch(setActiveCard(id));
    }

    const cards = store.getState().myCards.map(function(item) {
        if (item.id === store.getState().activeCardId || item.id === -1) {
            return '';
        }

        return (
            <div key={item.id} onClick={() => handleClick(item.id)}>
                <Card vendorId={item.vendorId} name={item.name} number={item.number} validDate={item.validDate} />
            </div> 
        )
    });

    return (
        <section>
            {cards}
        </section>
    )
}

export default CardStack