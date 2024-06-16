import "./styles/General.css";

function Practical({ form, setForm }) {
  const addExperience = () => {
    setForm({
      ...form,
      experiences: [
        ...form.experiences,
        {
          company: "",
          role: "",
          description: "",
          experience: "",
          startDate: "",
          endDate: "",
        },
      ],
    });
    return (
      <div>
        <hr />
      </div>
    );
  };

  const handleChange = (e, index, field) => {
    const newExperiences = form.experiences.map((experience, i) => {
      if (i === index) {
        return { ...experience, [field]: e.target.value };
      }
      return experience;
    });
    setForm({ ...form, experiences: newExperiences });
  };

  return (
    <div className="Practical_Information">
      <h1>Practical Information</h1>
      {form.experiences.map((experience, index) => (
        <div key={index} className="experience">
          <label htmlFor={`Company-${index}`}>
            <h3>Company:</h3>
            <input
              type="text"
              placeholder="Company"
              id={`Company-${index}`}
              value={experience.company}
              onChange={(e) => handleChange(e, index, "company")}
            />
          </label>
          <label htmlFor={`Role-${index}`}>
            <h3>Role:</h3>
            <input
              type="text"
              placeholder="Role"
              id={`Role-${index}`}
              value={experience.role}
              onChange={(e) => handleChange(e, index, "role")}
            />
          </label>
          <label htmlFor={`Description-${index}`}>
            <h3>Description:</h3>
            <input
              type="text"
              id={`Description-${index}`}
              value={experience.description}
              onChange={(e) => handleChange(e, index, "description")}
            />
          </label>
          <label htmlFor={`Experience-${index}`}>
            <h3>Experience:</h3>
            <input
              type="text"
              id={`Experience-${index}`}
              value={experience.experience}
              onChange={(e) => handleChange(e, index, "experience")}
            />
          </label>
          <label htmlFor={`StartDate-${index}`}>
            <h3>Start Date:</h3>
            <input
              type="date"
              id={`StartDate-${index}`}
              value={experience.startDate}
              onChange={(e) => handleChange(e, index, "startDate")}
            />
          </label>
          <label htmlFor={`EndDate-${index}`}>
            <h3>End Date:</h3>
            <input
              type="date"
              id={`EndDate-${index}`}
              value={experience.endDate}
              onChange={(e) => handleChange(e, index, "endDate")}
            />
          </label>
        </div>
      ))}
      <button type="button" onClick={addExperience}>
        Add Experience
      </button>
    </div>
  );
}

export default Practical;
