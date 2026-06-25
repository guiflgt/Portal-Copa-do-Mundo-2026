import { useState } from 'react'
import jogos from '../../data/jogos'
import CardJogo from '../../components/CardJogo/CardJogo'
import styles from './Jogos.module.css'

function Jogos() {
  const [statusFiltro, setStatusFiltro] = useState('todos')

  // Filtra os jogos com base no status selecionado
  const jogosFiltrados = jogos.filter((jogo) => {
    if (statusFiltro === 'todos') return true
    return jogo.status === statusFiltro
  })

  const abas = [
    { id: 'todos', nome: 'Todos os Jogos', emoji: '📅' },
    { id: 'hoje', nome: 'Ao Vivo', emoji: '🔴' },
    { id: 'agendado', nome: 'Próximos', emoji: '⏱️' },
    { id: 'encerrado', nome: 'Resultados', emoji: '🏁' }
  ]

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <span className={styles.subtitle}>Tabela & Resultados</span>
        <h1 className={styles.title}>Jogos da Copa 2026</h1>
        <p className={styles.description}>
          Acompanhe o calendário de jogos, resultados em tempo real e datas dos confrontos das fases eliminatórias da Copa do Mundo.
        </p>
      </header>

      {/* Abas de filtro */}
      <div className={styles.filtroTabs}>
        {abas.map((aba) => (
          <button
            key={aba.id}
            className={`${styles.tabButton} ${
              statusFiltro === aba.id ? styles.activeTab : ''
            }`}
            onClick={() => setStatusFiltro(aba.id)}
          >
            <span className={styles.tabEmoji}>{aba.emoji}</span>
            <span className={styles.tabName}>{aba.nome}</span>
          </button>
        ))}
      </div>

      <div className={styles.infoMeta}>
        Encontrados <span className={styles.highlight}>{jogosFiltrados.length}</span> confrontos
      </div>

      {/* Renderização Condicional da tabela de jogos */}
      {jogosFiltrados.length > 0 ? (
        <div className={styles.grid}>
          {jogosFiltrados.map((jogo) => (
            <CardJogo
              key={jogo.id}
              fase={jogo.fase}
              grupo={jogo.grupo}
              mandante={jogo.mandante}
              mandanteBandeira={jogo.mandanteBandeira}
              visitante={jogo.visitante}
              visitanteBandeira={jogo.visitanteBandeira}
              data={jogo.data}
              horario={jogo.horario}
              estadio={jogo.estadio}
              cidade={jogo.cidade}
              placar={jogo.placar}
              status={jogo.status}
            />
          ))}
        </div>
      ) : (
        <div className={styles.semJogos}>
          <span className={styles.semJogosIcon}>📭</span>
          <h3>Nenhuma partida nesta categoria</h3>
          <p>Não há partidas ativas no momento para o filtro selecionado.</p>
        </div>
      )}
    </div>
  )
}

export default Jogos
