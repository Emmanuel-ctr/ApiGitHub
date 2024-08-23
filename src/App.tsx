import axios from "axios"
import {useState} from 'react'
import './App.css'

type GitHubData = {
    name: string;
    bio: string;
    avatar_url: string
}


function App() {
  const [username, SetUsername] = useState("")
  const [name, SetName] = useState("Loading...")
  const [bio, SetBio] = useState("Loading...")
  const [avatar_url, SetAvatarURL] = useState("Loading...")
  const handlePesquisa = () => {
    axios.get<GitHubData>(`https://api.github.com/users/${username}`).then((response) => {SetName(response.data.name)
      SetName(response.data.name)
      SetBio(response.data.bio)
      SetAvatarURL(response.data.avatar_url)
    })
  }

  return (
    <div className="container-geral">
      <div className="container">
        <header className="header-top">PROCURAÇÃO FEDERAL</header>

        <main>
          <div className="form">
            <h1>Procure Dados</h1>
            <input type="text" placeholder="Digite o usuário" onChange={(e) => SetUsername(e.target.value)} />
            <button onClick={handlePesquisa}>Consultar</button>
          </div>
          <div className="conteudo">
            <div>
              <img src={avatar_url} alt="" />
              <h1>{name}</h1>
              <p>{bio}</p>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

export default App
