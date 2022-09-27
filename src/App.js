import PropTypes from "prop-types";
import './App.css';
import { ReactComponent as RobbieLogo } from './Robbie.svg'
import watermark1 from './watermark1.png'
import moment from "moment";

moment().format('MMMM Do YYYY, h:mm:ss a');
function App({
  headline,
  address,
  postalCode,
  claimNumber,
  areas,
  totalAreas,
  totalEnergyJob,
  robbieCertificateNumber,
  totalEnergyCostJob,
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
              <div>{totaldryingtime.toFixed(2)}h Drying Time Net</div>
              {/* <div className="subtitle">Pre-drying: {demolitiontime.toFixed(2)}h - Total: {(totaldryingtime + demolitiontime).toFixed(2)}h</div> */}
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
                    <div className="subtitle">{area.dh} Dehumidifier - {area.blowers} Blower</div>
                  </div>
                </td>

                <td>
                  <div>{(area.drying_time).toFixed(2)}h Drying</div>
                  <div className="subtitle">Pre-drying: {(area.totalElapsedTimeA - area.drying_time).toFixed(2)}h - Total: {area.totalElapsedTimeA.toFixed(2)}h</div>
                </td>

                <td>
                  <div>CAD${(area.totenergy * area.drying_time * 0.17).toFixed(2)}</div>
                  <div className="subtitle">{(area.totenergy * area.drying_time).toFixed(2)}kWh</div>
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
      <img src={watermark1} className='watermark' alt=''></img>
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
  totalEnergyJob: PropTypes.number,
  robbieCertificateNumber: PropTypes.string,
  totalEnergyCostJob: PropTypes.number,
  totalLapsedTime: PropTypes.number,
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
  totalAreas: 0,
  totalEnergyJob: 0.0,
  robbieCertificateNumber: '',
  totalEnergyCostJob: 0,
  totalLapsedTime: 0,
  totalCountBl: 0,
  totalCountDh: 0,
  demolitiontime: 0,
  totaldryingtime: 0,
  showLogos: true,
}

/* 
App.defaultProps = {
  headline: 'DRYING CERTIFICATE FOR:',
  address: '6-110 West Beaver Creek Road, Richmond Hill, ON, Canada',
  postalCode: 'L4B3L6',
  claimNumber: '5304B3981',
  areas: [{ name: "Men's washroom", drying_time: 44.8, totenergy: 0.265, blowers: 2, dh: 1, totalElapsedTimeA: 44.80 },
  { name: "Women's washroom", drying_time: 48.45, totenergy: 0.707, blowers: 2, dh: 1, totalElapsedTimeA: 48.45 },
  { name: "Hot water tank storage ar", drying_time: 118.42, totenergy: 5.035, blowers: 2, dh: 1, totalElapsedTimeA: 118.42 }],
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
