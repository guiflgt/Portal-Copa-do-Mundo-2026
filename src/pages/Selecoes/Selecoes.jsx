import { useState } from 'react'
import selecoes from '../../data/selecoes'
import FiltroSelecoes from '../../components/FiltroSelecoes/FiltroSelecoes'
import CardSelecao from '../../components/CardSelecao/CardSelecao'
import PainelTatico from '../../components/PainelTatico/PainelTatico'
import styles from './Selecoes.module.css'

function Selecoes() {
  const [busca, setBusca] = useState('')
  const [grupo, setGrupo] = useState('')
  const [confederacao, setConfederacao] = useState('')

  // Filtra as seleções com base nos estados
  const selecoesFiltradas = selecoes.filter((selecao) => {
    const atendeBusca = selecao.nome
      .toLowerCase()
      .includes(busca.toLowerCase())
    const atendeGrupo = grupo ? selecao.grupo === grupo : true
    const atendeConfed = confederacao
      ? selecao.confederacao === confederacao
      : true

    return atendeBusca && atendeGrupo && atendeConfed
  })

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <span className={styles.subtitle}>Copa do Mundo FIFA 2026</span>
        <h1 className={styles.title}>Seleções Participantes</h1>
        <p className={styles.description}>
          Explore os países classificados, seus grupos, confederações, principais destaques e histórico de títulos.
        </p>
      </header>

      {/* Elevação de Estado (Lift State Up) acontecendo aqui */}
      <FiltroSelecoes
        busca={busca}
        onBuscaChange={setBusca}
        grupo={grupo}
        onGrupoChange={setGrupo}
        confederacao={confederacao}
        onConfederacaoChange={setConfederacao}
      />

      <div className={styles.infoMeta}>
        Visualizando <span className={styles.highlight}>{selecoesFiltradas.length}</span> de{' '}
        <span className={styles.highlight}>{selecoes.length}</span> seleções cadastradas
      </div>

      {/* Renderização Condicional: Lista de seleções ou aviso de lista vazia */}
      {selecoesFiltradas.length > 0 ? (
        <div className={styles.grid}>
          {selecoesFiltradas.map((selecao) => (
            <CardSelecao
              key={selecao.id}
              nome={selecao.nome}
              bandeira={selecao.bandeira}
              grupo={selecao.grupo}
              confederacao={selecao.confederacao}
              estrelas={selecao.estrelas}
              treinador={selecao.treinador}
              destaque={selecao.destaque}
              descricao={selecao.descricao}
            />
          ))}
        </div>
      ) : (
        <div className={styles.semResultados}>
          <span className={styles.semResultadosIcon}>⚠️</span>
          <h3>Nenhuma seleção encontrada</h3>
          <p>
            Não encontramos nenhuma seleção correspondente aos filtros aplicados. Tente alterar os termos da busca ou limpar os filtros.
          </p>
          <button
            className={styles.btnReset}
            onClick={() => {
              setBusca('')
              setGrupo('')
              setConfederacao('')
            }}
          >
            Limpar filtros
          </button>
        </div>
      )}

      {/* Seção do Painel Tático Interativo (Componente Criativo Obrigatório) */}
      <PainelTatico />
    </div>
  )
}

export default Selecoes
