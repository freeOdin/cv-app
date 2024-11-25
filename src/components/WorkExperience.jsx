import PropTypes from 'prop-types';
import '../styles/WorkExperience.css';

function WorkExperience({ data, onDataChange }) {
  const handleChange = (id, e) => {
    const { name, value, type, checked } = e.target;
    const updatedList = data.map(job =>
      job.id === id ? { ...job, [name]: type === 'checkbox' ? checked : value } : job
    );
    onDataChange(updatedList);
  };

  const addWorkExperience = () => {
    onDataChange([
      ...data,
      {
        id: Date.now(),
        companyName: '',
        positionTitle: '',
        responsibilities: '',
        startDate: '',
        endDate: '',
        isCurrentJob: false
      }
    ]);
  };

  const removeWorkExperience = (id) => {
    onDataChange(data.filter(job => job.id !== id));
  };

  return (
    <div className="work-experience-section">
      <h2>Work Experience</h2>
      {data.map((job, index) => (
        <div key={job.id} className="work-entry">
          <div className="form-group">
            <label htmlFor={`companyName-${job.id}`}>Company Name:</label>
            <input
              type="text"
              id={`companyName-${job.id}`}
              name="companyName"
              value={job.companyName}
              onChange={(e) => handleChange(job.id, e)}
              placeholder="Enter company name"
            />
          </div>

          <div className="form-group">
            <label htmlFor={`positionTitle-${job.id}`}>Position Title:</label>
            <input
              type="text"
              id={`positionTitle-${job.id}`}
              name="positionTitle"
              value={job.positionTitle}
              onChange={(e) => handleChange(job.id, e)}
              placeholder="Enter position title"
            />
          </div>

          <div className="form-group">
            <label htmlFor={`responsibilities-${job.id}`}>Main Responsibilities:</label>
            <textarea
              id={`responsibilities-${job.id}`}
              name="responsibilities"
              value={job.responsibilities}
              onChange={(e) => handleChange(job.id, e)}
              placeholder="Enter main responsibilities"
              rows="4"
            />
          </div>

          <div className="form-group date-inputs">
            <div>
              <label htmlFor={`startDate-${job.id}`}>Start Date:</label>
              <input
                type="date"
                id={`startDate-${job.id}`}
                name="startDate"
                value={job.startDate}
                onChange={(e) => handleChange(job.id, e)}
              />
            </div>

            <div className="end-date-group">
              <div className="checkbox-group">
                <input
                  type="checkbox"
                  id={`isCurrentJob-${job.id}`}
                  name="isCurrentJob"
                  checked={job.isCurrentJob}
                  onChange={(e) => handleChange(job.id, e)}
                />
                <label htmlFor={`isCurrentJob-${job.id}`}>Current Job</label>
              </div>

              {!job.isCurrentJob && (
                <div>
                  <label htmlFor={`endDate-${job.id}`}>End Date:</label>
                  <input
                    type="date"
                    id={`endDate-${job.id}`}
                    name="endDate"
                    value={job.endDate}
                    onChange={(e) => handleChange(job.id, e)}
                  />
                </div>
              )}
            </div>
          </div>

          {index !== data.length - 1 && (
            <button 
              type="button" 
              className="remove-btn"
              onClick={() => removeWorkExperience(job.id)}
            >
              Remove
            </button>
          )}
        </div>
      ))}

      <button 
        type="button" 
        className="add-btn"
        onClick={addWorkExperience}
      >
        Add Work Experience
      </button>
    </div>
  );
}

WorkExperience.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      companyName: PropTypes.string.isRequired,
      positionTitle: PropTypes.string.isRequired,
      responsibilities: PropTypes.string.isRequired,
      startDate: PropTypes.string.isRequired,
      endDate: PropTypes.string,
      isCurrentJob: PropTypes.bool.isRequired
    })
  ).isRequired,
  onDataChange: PropTypes.func.isRequired
};

export default WorkExperience;
