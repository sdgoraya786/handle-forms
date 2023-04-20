import React, { useState } from "react";

// Thapa Technical #8,9 Basic form and validations
const C3 = () => {
  const [email, setEmail] = useState("");
  const [passeord, setPasseord] = useState("");
  const [allUsers, setAllUsers] = useState([]);

  const login = (e) => {
    e.preventDefault();
    // const newUser = {id: new Date().getTime().toString(),email: email,passeord: passeord};
    const newUser = {
      id: new Date().getTime().toString(),
      email,
      passeord,
    };
    if (email && passeord) {
      setAllUsers([...allUsers, newUser]);
      setEmail("");
      setPasseord("");
    } else {
      alert("Plz Fill the data");
    }
  };
  return (
    <>
      <form action="" onSubmit={login}>
        <div>
          <label htmlFor="email"></label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <br />
        <div>
          <label htmlFor="password"></label>
          <input
            type="password"
            name="password"
            value={passeord}
            onChange={(e) => setPasseord(e.target.value)}
          />
        </div>
        <br />
        <button type="submit">Login</button>
      </form>
      {/* <br />
      <div>
        {(true && (
          <div className="col-md-3">
            <h1>True</h1>
          </div>
        )) || <h1>False</h1>}
      </div> */}
      <br />
      {allUsers.map((curElem) => {
        const { id, email, passeord } = curElem; /** object Desctructing */
        return (
          <div key={id}>
            <p>Email: {email}</p>
            <p>Password: {passeord}</p>
            <hr />
          </div>
        );
      })}
    </>
  );
};

export default C3;
