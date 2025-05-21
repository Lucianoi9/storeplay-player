function App() {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>🎧 StorePlay AI Player</h1>
      <p>Ouça agora a rádio da sua loja!</p>
      <audio controls autoPlay style={{ width: '80%' }}>
        <source src="http://3.90.14.131/station/4" type="audio/mpeg" />
        Seu navegador não suporta áudio embutido.
      </audio>
    </div>
  )
}

export default App

