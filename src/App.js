import PropTypes from "prop-types";
import './App.css';
//import MiniCard from './components/miniCard/miniCard'
import { ReactComponent as RobbieLogo } from './Robbie.svg'
import moment from "moment"
//import { ReactComponent as BackgorundMask } from './BackgorundMask.svg'

moment().format('MMMM Do YYYY, h:mm:ss a');
function App({
  headline,
  address,
  postalCode,
  claimNumber,
  areas,
  emergencyTime,
  totalAreas,
  totalEnergyJob,
  robbieCertificateNumber,
  totalEnergyCostJob,
  totalLapsedTime,
  totalCountDh,
  totalCountBl,
  demolitiontime,
  totaldryingtime
}) {

  return (
    <div className="App">
      <div className="logo">
        <RobbieLogo></RobbieLogo>
      </div>
      <div>
        <div className="generalData">{headline}</div>
        <div className="generalData">Claim #: <span className="genDato">{claimNumber}</span></div>
        <div className="generalData"><span className="genDato">{address}</span></div>
        <div className="generalData"><span className="genDato">{postalCode}</span></div>
      </div>
      <div className="generalData">SUMMARY</div>
      <table width="100%">
        <thead align="left"><tr><th>CLAIM SETUP</th><th>TIME ESTIMATION</th><th>ENERGY USED</th></tr></thead>
        <tbody align="left">
          <tr><td>{totalAreas} Areas</td><td>{totaldryingtime - demolitiontime} Drying Time</td><td>CAD$ {totalEnergyCostJob}</td></tr>
          <tr><td>{totalCountDh} Dehumidifier - {totalCountBl} Blower</td><td>Pre-drying: {demolitiontime} - Total: {totaldryingtime}</td><td>{totalEnergyJob} Kwh</td></tr>
        </tbody>
      </table>
      <div className="generalData">BREAKDOWN</div>
      <table width="100%">
        <thead align="left"><tr><th>AREA SETUP</th><th>TIME BREAKDOWN</th><th>ENERGY USED</th></tr></thead>
        <tbody align="left">
          {areas.map((area, index) => (
            <>
              <tr>
                <td>{area.name}</td><td>{(area.emergencyTime - area.dryingTime).toFixed(2)} Drying Time</td><td>CAD$ {(area.totalEnergy * 0.17).toFixed(2)}</td>
              </tr>
              <tr>
                <td>{area.dh} Dehumidifier - {area.bl} Blower</td><td>Pre-drying: {area.dryingTime} - Total: {area.emergencyTime}</td><td>{area.totalEnergy} Kwh</td>
              </tr>
            </>
          ))}
        </tbody>
      </table>

      <div className="footer">
        <div className="rcn">Robbie Certificate Number: {robbieCertificateNumber}</div>
        <div>www.robbiert.com</div>
        <div className="incDetails">
          <div>Robbie Restoration Technologies Inc.</div>
          <div>1040 Martin Grove Rd Etobicoke, ON, Cananda.</div>
        </div>
      </div>
    </div>
  );
}

/*
App.propTypes = {
  headline: PropTypes.string,
  address: PropTypes.string,
  postalCode: PropTypes.string,
  claimNumber: PropTypes.string,
  areas: PropTypes.array,
  emergencyTime: PropTypes.array,
  totalAreas: PropTypes.string,
  totalEnergyJob: PropTypes.string,
  robbieCertificateNumber: PropTypes.string,
  totalEnergyCostJob: PropTypes.string,
  totalLapsedTime: PropTypes.string,
  totalCountBl: PropTypes.number,
  totalCountDh: PropTypes.number,
  demolitiontime: PropTypes.number,
  totaldryingtime: PropTypes.number
}
*/  
  App.defaultProps = {
  headline: 'DRYING CERTIFICATE FOR:',
  address: '',
  postalCode: '',
  claimNumber: '',
  areas: [],
  emergencyTime: [],
  totalAreas: '0',
  totalEnergyJob: '0',
  robbieCertificateNumber: '',
  totalEnergyCostJob: '0',
  totalLapsedTime: '0',
  totalCountBl: 0,
  totalCountDh: 0,
  demolitiontime: 0,
  totaldryingtime: 0
}

App.defaultProps = {
  headline: 'DRYING CERTIFICATE FOR:',
  address: '1040 Martin Grove Rd',
  postalCode: 'm4m2y3',
  claimNumber: '12341234',
  areas: [{name: "Kitchen", dryingTime: 5, totalEnergy: 8, totalBlArea: 3, totalDhArea: 1},
          {name: "Room Waiting", dryingTime: 5.4, totalEnergy: 4, totalBlArea: 4, totalDhArea: 1}],
  emergencyTime: [5.2, 5],
  totalAreas: '2',
  totalEnergyJob: '2',
  robbieCertificateNumber: '125980',
  totalEnergyCostJob: '12.345',
  totalCountBl: 7,
  totalCountDh: 2,
  demolitiontime: 23.40,
  totaldryingtime: 23.90, 
}

export default App;
