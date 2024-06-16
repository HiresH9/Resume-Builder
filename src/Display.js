import "./styles/General.css";

function Display({ form }) {
  if (!form) {
    return <p>Loading...</p>;
  }
  return (
    <div className="Display">
      <div className="section personal-info">
        <p>
          <strong>
            {form.firstName} {form.lastName}
          </strong>
        </p>
        <p>
          {form.email} | {form.phno}
        </p>
      </div>
      <div className="section education">
        <h3>Education</h3>
        <p>
          <strong>Degree:</strong> {form.degree}
        </p>
        <p>
          <strong>School:</strong> {form.school}
        </p>
        <p>
          <strong>City:</strong> {form.city}
        </p>
        <p>
          <strong>GPA:</strong> {form.gpa}
        </p>
      </div>
      <div className="section experience">
        <h3>Experience</h3>
        {form.experiences && form.experiences.length > 0 ? (
          form.experiences.map((exp, index) => (
            <div key={index} className="experience-item">
              <p>
                <strong>Company:</strong> {exp.company}
              </p>
              <p>
                <strong>Role:</strong> {exp.role}
              </p>
              <p>
                <strong>Description:</strong> {exp.description}
              </p>
              <p>
                <strong>Experience:</strong> {exp.experience}
              </p>
              <div className="date">
                <p>
                  <strong>Start Date:</strong> {exp.startDate}
                </p>
                <p>
                  <strong>End Date:</strong> {exp.endDate}
                </p>
              </div>
              <hr />
            </div>
          ))
        ) : (
          <p>No experiences added yet.</p>
        )}
      </div>
    </div>
  );
}

export default Display;
