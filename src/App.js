import PropTypes from "prop-types";
import './App.css';
import { ReactComponent as RobbieLogo } from './Robbie.svg'
import moment from "moment";

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
      <div className="letter-head">
        <div className="logo">
          <RobbieLogo></RobbieLogo>
        </div>
        <div className="claim-info">
          <div className="blue-header">{headline}</div>
          <div className="claim-header">Claim #: {claimNumber}</div>
          <div className="subtitle"><span className="genDato">{address.split(',')[0]}</span></div>
          <div className="subtitle"><span className="genDato">{postalCode}</span></div>
        </div>
      </div>


      <div className="generalData"></div>
      <div className="table-title blue-header">SUMMARY</div>
      <table width="100%">

        <thead align="left"><tr>
          <th className="setup">CLAIM SETUP</th>
          <th className="time">TIME ESTIMATION</th>
          <th className="energy">ENERGY USED</th></tr>
        </thead>

        <tbody align="left">

          <tr>
            <td>
              <div>
                <div>{totalAreas} Areas</div>
                <div className="subtitle">{totalCountDh} Dehumidifier - {totalCountBl} Blower </div>
              </div>
            </td>

            <td>
              <div>{totaldryingtime - demolitiontime}h Drying</div>
              <div className="subtitle">Pre-drying: {demolitiontime}h - Total: {totaldryingtime}h</div>
            </td>

            <td>
              <div>CAD${totalEnergyCostJob}</div>
              <div className="subtitle">{totalEnergyJob}kWh</div>
            </td>
          </tr>
        </tbody>
      </table>

      <div className="generalData"></div>
      <div className="table-title blue-header">BREAKDOWN</div>
      <table width="100%">

        <thead align="left"><tr>
          <th className="setup">AREA SETUP</th>
          <th className="time">TIME BREAKDOWN</th>
          <th className="energy">ENERGY USED</th></tr>
        </thead>

        <tbody align="left">
          {areas.map((area, index) => (
            <>
              <tr>
                <td>
                  <div>
                    <div>{area.name}</div>
                    <div className="subtitle">{area.dh} Dehumidifier - {area.bl} Blower</div>
                  </div>
                </td>

                <td>
                  <div>{(totalLapsedTime - area.dryingTime).toFixed(2)}h Drying</div>
                  <div className="subtitle">Pre-drying: {area.dryingTime}h - Total: {totalLapsedTime}h</div>
                </td>

                <td>
                  <div>CAD${(area.totalEnergy * 0.17).toFixed(2)}</div>
                  <div className="subtitle">{area.totalEnergy}kWh</div>
                </td>
              </tr>
            </>
          ))}
        </tbody>
      </table>

      <div className="footer">
        <div className="rcn">Robbie Certificate Number: {robbieCertificateNumber}<br></br>
        <a href="https://robbier.com"> www.robbiert.com </a>
        </div>
        <div className="incDetails"> Robbie Restoration Technologies Inc. <br></br>
        <span className="small">1040 Martin Grove Rd Etobicoke, ON, Cananda. </span>
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

  App.defaultProps = {
  headline: 'DRYING CERTIFICATE FOR:',
  address: '',
  postalCode: '',
  claimNumber: '',
  areas: [],
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

/* 
App.defaultProps = {
  headline: 'DRYING CERTIFICATE FOR:',
  address: '6-110 West Beaver Creek Road, Richmond Hill, ON, Canada',
  postalCode: 'L4B3L6',
  claimNumber: '5304B3981',
  areas: [{ name: "Men's washroom", dryingTime: 44.8, totalEnergy: 0.265, totalBlArea: 2, totalDhArea: 1 },
  { name: "Women's washroom", dryingTime: 48.45, totalEnergy: 0.707, totalBlArea: 2, totalDhArea: 1 },
  { name: "Hot water tank storage ar", dryingTime: 118.42, totalEnergy: 5.035, totalBlArea: 2, totalDhArea: 1 }],
  totalAreas: '3',
  totalEnergyJob: '6.006',
  robbieCertificateNumber: '157368',
  totalEnergyCostJob: '1.021',
  totalLapsedTime: 118.6,
  totalCountBl: 6,
  totalCountDh: 3,
  demolitiontime: 0.0,
  totaldryingtime: 118.60,
}
*/

export default App;
