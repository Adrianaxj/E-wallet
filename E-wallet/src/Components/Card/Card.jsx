import './Card.scss'

function Card(props) {
    const vendors = [ 
        {id: -1, name: 'BITCOIN INC', logoPath: 'src/assets/assets/vendor-bitcoin.svg', cardColor: '#ccc', chipPath: 'src/assets/assets/chip-dark.svg', fontColor: '#000'},
        {id: 1, name: 'BITCOIN INC', logoPath: 'src/assets/assets/vendor-bitcoin.svg', cardColor: '#FFAE34', chipPath: 'src/assets/assets/chip-dark.svg', fontColor: '#000'},
        {id: 2, name: 'NINJA BANK', logoPath: 'src/assets/assets/vendor-ninja.svg', cardColor: '#222222', chipPath: 'src/assets/assets/chip-light.svg', fontColor: '#fff' },
        {id: 3, name: 'BLOCK CHAIN INC', logoPath: 'src/assets/assets/vendor-blockchain.svg', cardColor: '#8B58F9', chipPath: 'src/assets/assets/chip-dark.svg', fontColor: '#000' },
        {id: 4, name: 'EVIL CORP', logoPath: 'src/assets/assets/vendor-evil.svg', cardColor: '#F33355', chipPath: 'src/assets/assets/chip-light.svg', fontColor: '#fff' },
    ];
    
    let vendor = vendors.find(v => (v.id === props.vendorId));
    console.log(props.vendorId);
    console.log(vendor);
    console.log(vendors);
    return(
        <section className='card' style={{background: `${vendor.cardColor }` }}>
            
            <section className='card__top'>
                <img className='card__chip' src={ vendor.chipPath} />
                <img className='card__logo' src={ vendor.logoPath} />
            </section>


            <section className="card__number" style={{color:  `${vendor.fontColor } `}}>
                { props.number }
            </section>
            
            <section className='card__column' style={{color:  `${vendor.fontColor } `}}>
                <span className='card__left'>CARDHOLDER NAME</span>
                <span className='card__right'>VALID THRU</span>
            </section>

            <section className='card__name' style={{color:  `${vendor.fontColor } `}}>
                <span className='card__left'>{props.name}</span>
                <span className='card__right'>{props.validDate}</span>
            </section>

        </section>
    )
}

export default Card