import { useState } from 'react'
import estadios from '../../data/estadios'
import CardEstadio from '../../components/CardEstadio/CardEstadio'
import styles from './Estadios.module.css'

function Estadios() {
  const [paisFiltro, setPaisFiltro] = useState('Todos')

  // Filtra estádios com base no país selecionado
  const estadiosFiltrados = estadios.filter((estadio) => {
    if (paisFiltro === 'Todos') return true
    return estadio.pais === paisFiltro
  })

  const paises = [
    { nome: 'Todos', emoji: '🌎' },
    { nome: 'Estados Unidos', emoji: '🇺🇸' },
    { nome: 'México', emoji: '🇲🇽' },
    { nome: 'Canadá', emoji: '🇨🇦' }
  ]

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <span className={styles.subtitle}>Sedes oficiais</span>
        <h1 className={styles.title}>Os 16 Estádios da Copa</h1>
        <p className={styles.description}>
          Conheça os palcos que receberão as melhores seleções do mundo na maior Copa da história, espalhados por três nações gigantes.
        </p>
      </header>

      {/* Abas de filtro por país */}
      <div className={styles.filtroTabs}>
        {paises.map((p) => (
          <button
            key={p.nome}
            className={`${styles.tabButton} ${
              paisFiltro === p.nome ? styles.activeTab : ''
            }`}
            onClick={() => setPaisFiltro(p.nome)}
          >
            <span className={styles.tabEmoji}>{p.emoji}</span>
            <span className={styles.tabName}>{p.nome}</span>
          </button>
        ))}
      </div>

      <div className={styles.infoMeta}>
        Exibindo <span className={styles.highlight}>{estadiosFiltrados.length}</span> estádios em{' '}
        <span className={styles.highlight}>{paisFiltro === 'Todos' ? 'todos os países' : paisFiltro}</span>
      </div>

      {/* Grid de estádios */}
      <div className={styles.grid}>
        {estadiosFiltrados.map((estadio) => (
          <CardEstadio
            key={estadio.id}
            nome={estadio.nome}
            cidade={estadio.cidade}
            pais={estadio.pais}
            paisBandeira={estadio.paisBandeira}
            capacidade={estadio.capacidade}
            descricao={estadio.descricao}
            destaque={estadio.destaque}
            imagem={estadio.imagem}
          />
        ))}
      </div>
    </div>
  )
}

export default Estadios
