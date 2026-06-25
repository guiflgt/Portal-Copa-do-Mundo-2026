import React from 'react'
import Flag from '../Flag/Flag'
import styles from './CardSelecao.module.css'

function CardSelecao({
  nome,
  bandeira,
  grupo,
  confederacao,
  estrelas,
  treinador,
  destaque,
  descricao
}) {
  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <div className={styles.paisInfo}>
          <Flag emoji={bandeira} className={styles.bandeira} alt={nome} />
          <h3 className={styles.nome}>{nome}</h3>
        </div>
        {estrelas && <span className={styles.estrelas} title={`${estrelas.length} Título(s)`}>{estrelas}</span>}
      </div>

      <div className={styles.badges}>
        <span className={`${styles.badge} ${styles.grupoBadge}`}>
          Grupo {grupo}
        </span>
        <span className={`${styles.badge} ${styles.confedBadge}`}>
          {confederacao}
        </span>
      </div>

      <p className={styles.descricao}>{descricao}</p>

      <div className={styles.footer}>
        <div className={styles.infoMeta}>
          <span className={styles.label}>Treinador</span>
          <span className={styles.valor}>{treinador}</span>
        </div>
        <div className={styles.infoMeta}>
          <span className={styles.label}>Destaque</span>
          <span className={styles.valorHighlight}>⭐ {destaque}</span>
        </div>
      </div>
    </div>
  )
}

export default CardSelecao
