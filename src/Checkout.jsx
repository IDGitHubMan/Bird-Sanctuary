import { useState } from "react";

export default function Checkout({ cart, setCart }) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [zipCode, setZipCode] = useState("");

  function handleFirstName(e) {
    setFirstName(e.target.value);
  }

  function handleLastName(e) {
    setLastName(e.target.value);
  }

  function handleEmail(e) {
    setEmail(e.target.value);
  }

  function handleZipCode(e) {
    setZipCode(e.target.value);
  }
  function handleSubmit(e) {
      e.preventDefault();
      if (firstName && lastName && email && zipCode && cart.length > 0) {
          setFirstName("");
          setLastName("");
          setEmail("");
          setZipCode("");
          setCart([]);
          alert("You have adopted successfully");
        } else {
      alert("You're missing one of more fields");
    }
  }


  return (
    <form>
      <label htmlFor="firstName">First Name</label>
      <input value={firstName}type="text" id="firstName" onChange={handleFirstName}></input>

      <label htmlFor="lastName">Last Name</label>
      <input value={lastName}type="text" id="lastName" onChange={handleLastName}></input>

      <label htmlFor="email">Email</label>
      <input value={email}type="email" id="email" onChange={handleEmail}></input>

      <label htmlFor="zipCode">Zip Code</label>
      <input value={zipCode}type="number" id="zipCode" onChange={handleZipCode}></input>

      <button onClick={handleSubmit}>Submit</button>
    </form>
  );
}
