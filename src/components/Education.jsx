import PropTypes from 'prop-types';
import '../styles/Education.css';

function Education({ data, onDataChange }) {
  const handleChange = (id, e) => {
    const { name, value } = e.target;
    const updatedList = data.map(edu =>
      edu.id === id ? { ...edu, [name]: value } : edu
    );
    onDataChange(updatedList);
  };

  const addEducation = () => {
    onDataChange([
      ...data,
      {
        id: Date.now(),
        schoolName: '',
        titleOfStudy: '',
        startDate: '',
        endDate: ''
      }
    ]);
  };

  const removeEducation = (id) => {
    onDataChange(data.filter(edu => edu.id !== id));
  };

  return (
    <div className="education-section">
      <h2>Educational Experience</h2>
      {data.map((edu, index) => (
        <div key={edu.id} className="education-entry">
          <div className="form-group">
            <label htmlFor={`schoolName-${edu.id}`}>School Name:</label>
            <input
              type="text"
              id={`schoolName-${edu.id}`}
              name="schoolName"
              value={edu.schoolName}
              onChange={(e) => handleChange(edu.id, e)}
              placeholder="Enter school name"
            />
          </div>

          <div className="form-group">
            <label htmlFor={`titleOfStudy-${edu.id}`}>Title of Study:</label>
            <input
              type="text"
              id={`titleOfStudy-${edu.id}`}
              name="titleOfStudy"
              value={edu.titleOfStudy}
              onChange={(e) => handleChange(edu.id, e)}
              placeholder="Enter title of study"
            />
          </div>

          <div className="form-group date-inputs">
            <div>
              <label htmlFor={`startDate-${edu.id}`}>Start Date:</label>
              <input
                type="date"
                id={`startDate-${edu.id}`}
                name="startDate"
                value={edu.startDate}
                onChange={(e) => handleChange(edu.id, e)}
              />
            </div>

            <div>
              <label htmlFor={`endDate-${edu.id}`}>End Date:</label>
              <input
                type="date"
                id={`endDate-${edu.id}`}
                name="endDate"
                value={edu.endDate}
                onChange={(e) => handleChange(edu.id, e)}
              />
            </div>
          </div>

          {index !== data.length - 1 && (
            <button 
              type="button" 
              className="remove-btn"
              onClick={() => removeEducation(edu.id)}
            >
              Remove
            </button>
          )}
        </div>
      ))}
      
      <button 
        type="button" 
        className="add-btn"
        onClick={addEducation}
      >
        Add Education
      </button>
    </div>
  );
}

Education.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      schoolName: PropTypes.string.isRequired,
      titleOfStudy: PropTypes.string.isRequired,
      startDate: PropTypes.string.isRequired,
      endDate: PropTypes.string.isRequired
    })
  ).isRequired,
  onDataChange: PropTypes.func.isRequired
};

export default Education;
