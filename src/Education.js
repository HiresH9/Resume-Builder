import "./styles/General.css";

function Education({ form, setForm }) {
  return (
    <div className="Education_Information">
      <h1>Education Information</h1>
      <label for="degree">
        <h3>Degree :</h3>
        <input
          type="text"
          placeholder="degree"
          id="degree"
          onChange={(e) => {
            setForm({
              ...form,
              degree: e.target.value,
            });
          }}
        ></input>
      </label>
      <label for="school">
        <h3>School Name :</h3>
        <input
          type="text"
          placeholder="school"
          id="school"
          onChange={(e) => {
            setForm({
              ...form,
              school: e.target.value,
            });
          }}
        ></input>
      </label>
      <label for="city">
        <h3>City:</h3>
        <input
          type="city"
          id="city"
          onChange={(e) => {
            setForm({
              ...form,
              city: e.target.value,
            });
          }}
        ></input>
      </label>
      <label for="gpa">
        <h3>GPA:</h3>
        <input
          type="text"
          id="gpa"
          onChange={(e) => {
            setForm({
              ...form,
              gpa: e.target.value,
            });
          }}
        ></input>
      </label>
    </div>
  );
}
export default Education;
