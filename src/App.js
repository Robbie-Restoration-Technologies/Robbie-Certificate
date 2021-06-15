import PropTypes from "prop-types";
import './App.css';
import MiniCard from './components/miniCard/miniCard'
import { ReactComponent as RobbieLogo } from './RobbieGray.svg'
import moment from "moment"
//import { ReactComponent as BackgorundMask } from './BackgorundMask.svg'

moment().format('MMMM Do YYYY, h:mm:ss a');
function App({
  headline,
  address,
  postalCode,
  claimNumber,
  areas,
  startDate,
  endDate,
  emergencyTime,
  dryingTime,
  totalEnergy,
  totalAreas,
  robbieCertificateNumber,
}) {

  return (
    <div className="App">
      <div className="logo">
        <RobbieLogo></RobbieLogo>
      </div>
      <div className="headline">
        {headline}
      </div>
      <div className="generalDataGrid">
        <div className="generalData">Address: <br/> <span className="genDato">{address}</span></div>
        <div className="generalData">Postal Code: <br/><span className="genDato">{postalCode}</span></div>
        <div className="generalData">Claim Number: <br/> <span className="genDato">{claimNumber}</span></div>
      </div>
      <div className="generals">
        <MiniCard cardTitle="Number of Areas" cardValue={totalAreas} />
        <MiniCard cardTitle="Emergency Time" cardValue={emergencyTime} cardUnits="Hours" />
      </div>
      <div>
        <div className="gridContainer">

          <div className="column">
            <div className="headerArea">Areas</div>
            <div className="colContentArea">
              {areas.map((area, index) => (
                <div className="area" key={index}>{area}</div>
              ))}
            </div>
          </div>

          <div className="column">
            <div className="header">Start Date</div>
            <div className="colContent">
              {startDate.map((startDateo, index) => (
                <div className="dato" key={index}>{moment(startDateo).format('MMM Do YY, h:mm a')}</div>
              ))}
            </div>
          </div>

          <div className="column">
            <div className="header">End Date</div>
            <div className="colContent">
              {endDate.map((endDateo, index) => (
                <div className="dato" key={index}>{moment(endDateo).format('MMM Do YY, h:mm a')}</div>
              ))}
            </div>
          </div>

          <div className="column">
            <div className="header">Drying Time</div>
            <div className="colContent">
              {dryingTime.map((dryingTimeo, index) => (
                <div className="dato" key={index}>{dryingTimeo}</div>
              ))}
            </div>
          </div>

          <div className="column">
            <div className="header">Energy</div>
            <div className="colContent">
              {totalEnergy.map((totEnergy, index) => (
                <div className="dato" key={index}>{totEnergy.toFixed(2)}</div>
              ))}
            </div>
          </div>

          <div className="column">
            <div className="header">Cost</div>
            <div className="colContent">
            {totalEnergy.map((totCost, index) => (
                <div className="dato" key={index}>{(totCost * 0.0119).toFixed(2)}</div>
              ))}
            </div>
          </div>

        </div>


        
      </div>

      <div className="footer">
        <div className="rcn">RCN: {robbieCertificateNumber}</div>
        <div className="incDetails">
          <div>Robbie Restoration Technologies Inc.</div>
          <div>1040 Martin Grove Rd Etobicoke, Ontario, Cananda.</div>
        </div>
      </div>
    </div>
  );
}

App.propTypes = {
  headline: PropTypes.string,
  address: PropTypes.string,
  postalCode: PropTypes.string,
  claimNumber: PropTypes.string,
  areas: PropTypes.array,
  startDate: PropTypes.array,
  endDate: PropTypes.array,
  dryingTime: PropTypes.array,
  totalEnergy: PropTypes.array,
  totalAreas: PropTypes.string,
}

App.defaultProps = {
  headline: 'Drying Certificate',
  address: '',
  postalCode: '',
  claimNumber: '',
  areas: [],
  startDate: [],
  endDate: [],
  emergencyTime: [],
  dryingTime: [],
  totalEnergy: [],
  totalAreas: '',
}

/*
App.defaultProps = {
  headline: 'Drying Certificate',
  address: '1040 Martin Grove Rd',
  postalCode: 'm4m2y3',
  claimNumber: '12341234',
  areas: ["Area1", "Area2"],
  startDate: [moment(Date.now()).format('MMM Do YY, h:mm a'), moment(Date.now()).format('MMM Do YY, h:mm a')],
  endDate: [moment(Date.now()).format('MMM Do YY, h:mm a'), moment(Date.now()).format('MMM Do YY, h:mm a')],
  emergencyTime: [5.2, 5],
  dryingTime: [5, 5.4],
  totalEnergy: [12, 12],
  totalAreas: '0',
}
*/

export default App;
