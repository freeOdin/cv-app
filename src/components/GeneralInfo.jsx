import PropTypes from 'prop-types'; // Add this import
import '../styles/GeneralInfo.css';

function GeneralInfo({ data, onDataChange }) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    onDataChange({
      ...data,
      [name]: value
    });
  };

  return (
    <div className="general-info">
      <h2>Personal Information</h2>
      <div className="form-group">
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={data.name}
          onChange={handleChange}
          placeholder="Enter your name"
        />
      </div>

      <div className="form-group">
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={data.email}
          onChange={handleChange}
          placeholder="Enter your email"
        />
      </div>

      <div className="form-group">
        <label htmlFor="phone">Phone:</label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={data.phone}
          onChange={handleChange}
          placeholder="Enter your phone number"
        />
      </div>
    </div>
  );
}

// Add PropTypes validation
GeneralInfo.propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string,
    email: PropTypes.string,
    phone: PropTypes.string
  }).isRequired,
  onDataChange: PropTypes.func.isRequired
};

export default GeneralInfo;
