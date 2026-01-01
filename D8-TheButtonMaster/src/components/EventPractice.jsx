const EventPractice = () => {
  const greet = () => alert("Halo kirik");
  const greetMe = (name) => alert(`Hello ${name}`)
  const userType = (e) => console.log(`Type: ${e.target.name}\nTarget: ${e.target.value}`);
  const submit = (e) => {
    e.preventDefault();
    alert("Gacor data telah di simpan");
    console.log(`Event aman coy ${e.target.value}`)
  }
  const formClass =`flex flex-col max-w-xl rounded bg-sky-500 mx-auto p-4 gap-5 mt-10`
  const labelClass = `text-white`
  const inputClass = `border rounded p-2`
  const submitClass = `bg-green-400 rounded`
  const greetClass = `bg-red-400 rounded`
  const greetBajiClass = `bg-yellow-400 rounded`
  

  return (
      <form className={formClass} action="/" method="get" >
        <label className={labelClass} htmlFor="firstName">First Name</label>
        <input className={inputClass} type="text" id="firstName" name="firstName" placeholder="Baji" required autoFocus onChange={userType}/>

        <br/>

        <label className={labelClass} htmlFor="lastName">Last Name</label>
        <input className={inputClass} type="text" id="lastName" name="lastName" placeholder="Infokan" required onChange={userType}/>

        <button className={submitClass} onClick={submit}>Submit</button>
        <button className={greetClass} onClick={greet}>Greet</button>
        <button className={greetBajiClass} onClick={() => greetMe("Baji Kirim")}>Greet baji</button>
      </form>
  );
};

export default EventPractice;