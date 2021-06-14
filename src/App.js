import PropTypes from "prop-types";
import './App.css';
import MiniCard from './components/miniCard/miniCard'
import { ReactComponent as RobbieLogo } from './RobbieGray.svg'
//import { ReactComponent as BackgorundMask } from './BackgorundMask.svg'

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
        <div>Address: {address}</div>
        <div>Postal Code: {postalCode}</div>
        <div>Claim Number: {claimNumber}</div>
      </div>
      <div className="generals">
        <MiniCard cardTitle="Number of Areas" cardValue={totalAreas} />
        <MiniCard cardTitle="Emergency Time" cardValue={emergencyTime} cardUnits="Hours" />
      </div>
      <div>


          <table border="1" align="center" cellPadding="5px">
            <tbody>
            <tr>
              <td align="right">Area</td>
              {areas.map((area, index) => (
                <td key={index}>{area}</td>            
              ))}
            </tr><tr>
              <td align="right">Start date</td>
              {startDate.map((startDateo, index) => (
                <td key={index}>{startDateo}</td>            
              ))}
            </tr><tr>
              <td align="right">End date</td>
              {endDate.map((endDateo, index) => (
                <td key={index}>{endDateo}</td>            
              ))}
            </tr><tr>
              <td align="right">Drying Time</td>
              {dryingTime.map((dryingTimeo, index) => (
                <td key={index}>{dryingTimeo}</td>            
              ))}
            </tr><tr>
              <td align="right">Total Energy</td>
              {totalEnergy.map((totEnergy, index) => (
                <td key={index}>{totEnergy}</td>            
              ))}
            </tr><tr>
              <td align="right">Cost Energy</td>
              {totalEnergy.map((totCost, index) => (
                <td key={index}>{totCost*0.0119}</td>
              ))}
            </tr>
            </tbody>
          </table>
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
  showLogos: PropTypes.string,
  backgroundImage: PropTypes.string,
}

App.defaultProps = {
  headline: 'Drying Certificate',
  showLogos: 'true',
  backgroundImage: '',
  address: '',
  postalCode: '',
  claimNumber: '',
  areas: [],
  startDate: [],
  endDate: [],
  emergencyTime: [],
  dryingTime: [],
  totalEnergy: [],
  totalAreas: '0',
}

export default App;
