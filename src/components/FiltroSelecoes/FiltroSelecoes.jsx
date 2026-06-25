import React from 'react'
import styles from './FiltroSelecoes.module.css'

function FiltroSelecoes({
  busca,
  onBuscaChange,
  grupo,
  onGrupoChange,
  confederacao,
  onConfederacaoChange
}) {
  const grupos = ['A', 'B', 'C', 'D', 'E', 'F', 'H', 'I', 'J', 'K', 'L']
  const confederacoes = ['UEFA', 'CONMEBOL', 'CONCACAF', 'AFC', 'CAF', 'OFC']

  return (
    <div className={styles.filtroContainer}>
      <div className={styles.buscaWrapper}>
        <span className={styles.icon}>🔍</span>
        <input
          type="text"
          className={styles.inputBusca}
          placeholder="Buscar seleção pelo nome..."
          value={busca}
          onChange={(e) => onBuscaChange(e.target.value)}
        />
      </div>

      <div className={styles.selectsWrapper}>
        <div className={styles.selectGroup}>
          <label htmlFor="select-grupo">Grupo</label>
          <select
            id="select-grupo"
            className={styles.select}
            value={grupo}
            onChange={(e) => onGrupoChange(e.target.value)}
          >
            <option value="">Todos os Grupos</option>
            {grupos.map((g) => (
              <option key={g} value={g}>
                Grupo {g}
              </option>
            ))}
          </select>
        </div>

        <div className={styles.selectGroup}>
          <label htmlFor="select-confed">Confederação</label>
          <select
            id="select-confed"
            className={styles.select}
            value={confederacao}
            onChange={(e) => onConfederacaoChange(e.target.value)}
          >
            <option value="">Todas as Confederações</option>
            {confederacoes.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
        </div>

        {(busca || grupo || confederacao) && (
          <button
            className={styles.btnLimpar}
            onClick={() => {
              onBuscaChange('')
              onGrupoChange('')
              onConfederacaoChange('')
            }}
          >
            Limpar Filtros
          </button>
        )}
      </div>
    </div>
  )
}

export default FiltroSelecoes
