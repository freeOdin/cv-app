import { useState } from 'react'
import GeneralInfo from './components/GeneralInfo'
import Education from './components/Education'
import WorkExperience from './components/WorkExperience'
import './styles/App.css'

function App() {
  const [isEditing, setIsEditing] = useState(true);
  const [formData, setFormData] = useState({
    generalInfo: {
      name: '',
      email: '',
      phone: ''
    },
    education: [],
    workExperience: []
  });

  const handleGeneralInfoChange = (data) => {
    setFormData(prev => ({
      ...prev,
      generalInfo: data
    }));
  };

  const handleEducationChange = (data) => {
    setFormData(prev => ({
      ...prev,
      education: data
    }));
  };

  const handleWorkExperienceChange = (data) => {
    setFormData(prev => ({
      ...prev,
      workExperience: data
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsEditing(false);
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  return (
    <div className="cv-app">
      <h1>CV Generator</h1>
      
      {isEditing ? (
        <form onSubmit={handleSubmit}>
          <GeneralInfo 
            data={formData.generalInfo} 
            onDataChange={handleGeneralInfoChange} 
          />
          <Education 
            data={formData.education} 
            onDataChange={handleEducationChange} 
          />
          <WorkExperience 
            data={formData.workExperience} 
            onDataChange={handleWorkExperienceChange} 
          />
          <button type="submit" className="submit-btn">Submit</button>
        </form>
      ) : (
        <div className="cv-preview">
          <div className="preview-section">
            <h2>Personal Information</h2>
            <p><strong>Name:</strong> {formData.generalInfo.name}</p>
            <p><strong>Email:</strong> {formData.generalInfo.email}</p>
            <p><strong>Phone:</strong> {formData.generalInfo.phone}</p>
          </div>

          <div className="preview-section">
            <h2>Education</h2>
            {formData.education
              .filter(edu => edu.schoolName || edu.titleOfStudy)          .map((edu) => (
              <div key={edu.id} className="preview-item">
                <h3>{edu.schoolName}</h3>
                <p><strong>Title of Study:</strong> {edu.titleOfStudy}</p>
                <p><strong>Date:</strong> {edu.startDate} - {edu.endDate}</p>
              </div>
            ))}
          </div>

          <div className="preview-section">
            <h2>Work Experience</h2>
            {formData.workExperience
              .filter(work => work.companyName || work.positionTitle)
              .map((work) => (
              <div key={work.id} className="preview-item">
                <h3>{work.companyName}</h3>
                <p><strong>Position:</strong> {work.positionTitle}</p>
                <p><strong>Date:</strong> {work.startDate} - {work.isCurrentJob ? 'Present' : work.endDate}</p>
                <p><strong>Responsibilities:</strong></p>
                <p>{work.responsibilities}</p>
              </div>
            ))}
          </div>

          <button type="button" onClick={handleEdit} className="edit-btn">
            Edit
          </button>
        </div>
      )}
    </div>
  );
}

export default App;
