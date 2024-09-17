import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <header>
        <h1>MY TUNES - Kaytranada</h1>
        <p>By: Nea Pieroelie</p>
      </header>
      <main>
        <div className="image">
          <img alt="React Logo" src="kaytranada.webp" width={400}/>
        </div>
        <div className="top-3-album">
          <h2>Kaytranada's Top 3 Albums</h2>
          <div className="album-list">
            <div className="details">
              <details name="reqs">
                <summary>99.9% (2016)</summary>
                <p>This debut album by Kaytranada blends electronic, hip-hop, funk, and R&B elements, featuring collaborations with a range of artists.</p>
                <div className="list">
                  <li>Track Uno</li>
                  <li>Bus Ride (feat. Karriem Riggins & River Tiber)</li>
                  <li>Got It Good (feat. Craig David)</li>
                  <li>Together (feat. AlunaGeorge & GoldLink)</li>
                  <li>Drive Me Crazy (feat. Vic Mensa)</li>
                  <li>Weight Off (feat. BADBADNOTGOOD)</li>
                  <li>One Too Many (feat. Phonte)</li>
                  <li>Despite the Weather</li>
                  <li>Glowed Up (feat. Anderson .Paak)</li>
                  <li>Breakdance Lesson N.1</li>
                  <li>You're the One (feat. Syd)</li>
                  <li>Vivid Dreams (feat. River Tiber)</li>
                  <li>Lite Spots</li>
                  <li>Leave Me Alone (feat. Shay Lia)</li>
                  <li>Bullets (feat. Little Dragon)</li>
                  <li>Nobody Beats the Kay</li>
                </div>
              </details>
            </div>
            <div className="details">
              <details name="reqs">
                <summary>BUBBA (2019)</summary>
                <p>Kaytranada's Grammy-winning sophomore album blends house, funk, and R&B, featuring collaborations with artists like Kali Uchis and Pharrell Williams.</p>
                <div className="list">
                  <li>DO IT</li>
                  <li>2 The Music (feat. Iman Omari)</li>
                  <li>Go DJ (feat. SiR)</li>
                  <li>Gray Area (feat. Mick Jenkins)</li>
                  <li>Puff Lah</li>
                  <li>10% (feat. Kali Uchis)</li>
                  <li>Need It (feat. Masego)</li>
                  <li>Taste (feat. VanJess)</li>
                  <li>Oh No (feat. Estelle)</li>
                  <li>What You Need (feat. Charlotte Day Wilson)</li>
                  <li>Vex Oh (feat. GoldLink, Eight9fly & Ari PenSmith)</li>
                  <li>Scared to Death 14. Freefall (feat. Durand Bernarr)</li>
                  <li>Culture (feat. Teedra Moses)</li>
                  <li>The Worst in Me (feat. Tinashe)</li>
                  <li>September 21</li>
                  <li>Midsection (feat. Pharrell Williams)</li>
                </div>
              </details>
            </div>
            <div className="details">
              <details name="reqs">
                <summary>Kaytra Todo (2013)</summary>
                <p>This EP, released before Kaytranada's debut album, showcases his early blend of electronic beats, hip-hop, and experimental production.</p>
                <div className="list">
                  <li>What We Do (feat. JMSN)</li>
                  <li>Hilarity Duff</li>
                  <li>All We Do (feat. JMSN)</li>
                  <li>At All</li>
                  <li>Seeu Enni Way</li>
                  <li>Hot Jazzybelle</li>
                  <li>Callin’ Out</li>
                  <li>The Worst</li>
                  <li>Tonight</li>
                  <li>Up & Down</li>
                </div>
              </details>
            </div>
          </div>
        </div>
      </main>
      <footer>

      </footer>
    </>
  )
}

export default App
