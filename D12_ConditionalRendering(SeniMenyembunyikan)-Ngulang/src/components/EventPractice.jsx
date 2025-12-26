const EventPractice = () => {
  const greet = () => alert("Halo kirik");
  const greetMe = (name) => alert(`Hello ${name}`)
  const userType = (e) => console.log(`Type: ${e.target.name}\nTarget: ${e.target.value}`);
  const submit = (e) => {
    e.preventDefault();
    alert("Gacor data telah di simpan");
    console.log(`Event aman coy ${e.target.value}`)
  }
  return (
    <>
      <form action="/" method="get">
        <label htmlFor="firstName">First Name</label>
        <input type="text" id="firstName" name="firstName" placeholder="Baji" required autoFocus onChange={userType}/>

        <br/>

        <label htmlFor="lastName">Last Name</label>
        <input type="text" id="lastName" name="lastName" placeholder="Infokan" required onChange={userType}/>

        <button type="submit" onClick={submit}>Submit</button>
      </form>
      <button onClick={greet}>Greet</button>
      <button onClick={() => greetMe("Baji Kirim")}>Greet baji</button>
    </>
  );
};

export default EventPractice;