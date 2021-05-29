import './miniCard.css'

function MiniCard({ cardTitle, cardValue, cardUnits }) {
    return (
        <div className="card">
            <div class="cardTitle">
                {cardTitle}
            </div>
            <div className="cardBottom">
                <div class="cardValue">
                    {cardValue}
                </div>
                <div class="cardUnits">
                    {cardUnits}
                </div>
            </div>
        </div>
    );
}

export default MiniCard;
