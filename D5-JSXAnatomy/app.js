function UserProfile() {
  const username = "Budi Doremi";
  const avatar = "https://i.pravatar.cc/150";

  return (
    <div class="card">
      <img src={avatar} class="photo"/>

      <div class="info">
        <h2 style="color: red;">
          Profile: {username}
        </h2>
        <br/>

        <p>Status: <b>Active</b></p>

        <label for="input-bio">Bio:</label>
        <input id="input-bio" type="text" placeholder="Tulis bio..."/>
      </div>

      <button onclick={() => alert('Saved!')}>Simpan</button>
    </div>
  )
}