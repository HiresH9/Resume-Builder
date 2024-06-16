import "./styles/General.css";
function General({ form, setForm }) {
  return (
    <div className="General_Information">
      <h1>General Information</h1>
      <label for="firstName">
        <h3>First Name :</h3>
        <input
          type="text"
          placeholder="FirstName"
          id="firstName"
          onChange={(e) => {
            setForm({
              ...form,
              firstName: e.target.value,
            });
          }}
        ></input>
      </label>
      <label for="lastName">
        <h3>Last Name :</h3>
        <input
          type="text"
          placeholder="lastName"
          id="lastName"
          onChange={(e) => {
            setForm({
              ...form,
              lastName: e.target.value,
            });
          }}
        ></input>
      </label>
      <label for="email">
        <h3>Email:</h3>
        <input
          type="email"
          id="email"
          onChange={(e) => {
            setForm({
              ...form,
              email: e.target.value,
            });
          }}
        ></input>
      </label>
      <label for="phno">
        <h3>Phone Number:</h3>
        <input
          type="text"
          id="phno"
          onChange={(e) => {
            setForm({
              ...form,
              phno: e.target.value,
            });
          }}
        ></input>
      </label>
    </div>
  );
}
export default General;
