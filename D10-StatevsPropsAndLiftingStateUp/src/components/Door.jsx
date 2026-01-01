function Door({isOpen, doorToggle}) {
  return (
    <div>
      <p>Pintu: {isOpen ? "Terbuka" : "Tertutup"}</p>
      <button className={`px-4 bg-blue-400`} onClick={doorToggle}>{isOpen ? "Tutup pintu" : "Buka pintu"}</button>
    </div>
  )
}

export default Door