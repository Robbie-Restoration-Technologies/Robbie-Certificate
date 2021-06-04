import PropTypes from "prop-types";
import './App.css';
import MiniCard from './components/miniCard/miniCard'
import { ReactComponent as RobbieLogo } from './RobbieGray.svg'
// import { ReactComponent as BackgorundMask } from './BackgorundMask.svg'
//import moment from "moment";

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
        {/* <MiniCard cardTitle="Total Energy Consumption" cardValue={totalEnergy} cardUnits="Kwh" /> */}
      </div>
      <div>
          <table border="1" align="center" cellPadding="5px">
            <tbody>
            <tr>
              <td align="right">Area</td>
              {console.log(areas)}
              {areas.map((area, index) => (
                <td key={index}>{area}</td>            
              ))}
            </tr><tr>
              <td align="right">Start date</td>
              {console.log(startDate)}
              {startDate.map((startDateo, index) => (
                <td key={index}>{startDateo}</td>            
              ))}
            </tr><tr>
              <td align="right">End date</td>
              {console.log(endDate)}
              {endDate.map((endDateo, index) => (
                <td key={index}>{endDateo}</td>            
              ))}
            </tr><tr>
              <td align="right">Drying Time</td>
              {console.log(dryingTime)}
              {dryingTime.map((dryingTimeo, index) => (
                <td key={index}>{dryingTimeo}</td>            
              ))}
            </tr><tr>
              <td align="right">Total Energy</td>
              {console.log(totalEnergy)}
              {totalEnergy.map((totEnergy, index) => (
                <td key={index}>{totEnergy}</td>            
              ))}
            </tr><tr>
              <td align="right">Cost Energy</td>
              {console.log(parseInt(totalEnergy[0])*0.0119)}
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
  address: 'Calle luna 23',
  postalCode: 'M2M4Y3',
  claimNumber: '1029384756G',
  areas: ['Bed Room','Waiting Room'],
  startDate: ['2021-05-13 08:10:01','2021-05-13 08:10:01'],
  endDate: ['2021-05-13 08:10:01','2021-05-13 08:10:01'],
  emergencyTime: [],
  dryingTime: ["29.5","12.8"],
  totalEnergy: ['121.135','124.65'],
  totalAreas: '5',
}

export default App;
