import PropTypes from "prop-types";
import './App.css';
import MiniCard from './components/miniCard/miniCard'
import { ReactComponent as RobbieLogo } from './RobbieGray.svg'

const emergencyTime = 20

function App({ headline, backgroundImage, address, postalCode, claimNumber, startDate, endDate, emergencyTime, dryingTime, totalEnergy, totalAreas, totalEnergyCost }) {
  return (
    <div className="App" style={{ backgroundImage: `url('${backgroundImage}')` }}>
      <div className="logo">
        <RobbieLogo></RobbieLogo>
      </div>
      <h4>{headline}</h4>
      <div>Address: {address}</div>
      <div>Postal Code: {postalCode}</div>
      <div>Claim Number: {claimNumber}</div>
      <div>Start Date: {startDate}</div>
      <div>End Date: {endDate}</div>

      <div className="generals">
        <MiniCard cardTitle="Number of Areas" cardValue={totalAreas} />
        <MiniCard cardTitle="Emergency Time" cardValue={emergencyTime} cardUnits="Hours" />
        <MiniCard cardTitle="Total Drying Time" cardValue={dryingTime} cardUnits="Hours" />
        <MiniCard cardTitle="Total Energy Consumption" cardValue={totalEnergy} cardUnits="Kwh" />
        <MiniCard cardTitle="Total Energy Cost" cardValue={totalEnergyCost} cardUnits="CAD" />
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
  showLogos: true,
  backgroundImage: '',
  address: 'Calle luna 23',
  postalCode: '000000',
  claimNumber: '0000000000',
  startDate: '00-00-00',
  endDate: '00-00-00',
  emergencyTime: '0',
  dryingTime: '0',
  totalEnergy: '0.0',
  totalAreas: '0',
  totalEnergyCost: '0.00',

}

export default App;
