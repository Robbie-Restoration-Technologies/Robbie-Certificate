import './miniCard.css'

function MiniCard({ cardTitle, cardValue, cardUnits }) {
    return (
        <div className="card">
            <div className="cardTitle">
                {cardTitle}
            </div>
            <div className="cardBottom">
                <div className="cardValue">
                    {cardValue}
                </div>
                <div className="cardUnits">
                    {cardUnits}
                </div>
            </div>
        </div>
    );
}

export default MiniCard;
