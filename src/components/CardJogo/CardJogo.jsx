import React from 'react'
import Flag from '../Flag/Flag'
import styles from './CardJogo.module.css'

function CardJogo({
  fase,
  grupo,
  mandante,
  mandanteBandeira,
  visitante,
  visitanteBandeira,
  data,
  horario,
  estadio,
  cidade,
  placar,
  status
}) {
  const isHoje = status === 'hoje'
  const isEncerrado = status === 'encerrado'

  return (
    <div className={`${styles.card} ${isHoje ? styles.hoje : ''}`}>
      <div className={styles.topInfo}>
        <span className={styles.fase}>🏆 {fase}</span>
        {grupo && <span className={styles.grupo}>Grupo {grupo}</span>}
        {isHoje && <span className={styles.aoVivoBadge}>🔴 Hoje</span>}
      </div>

      <div className={styles.confronto}>
        <div className={styles.time}>
          <Flag emoji={mandanteBandeira} className={styles.bandeira} alt={mandante} />
          <span className={styles.timeNome}>{mandante}</span>
        </div>

        <div className={styles.placarWrapper}>
          {isEncerrado && placar ? (
            <span className={styles.placar}>{placar}</span>
          ) : isHoje && placar ? (
            <div className={styles.placarAoVivo}>
              <span className={styles.placar}>{placar}</span>
              <span className={styles.tempoJogo}>Ao Vivo</span>
            </div>
          ) : (
            <div className={styles.horarioWrapper}>
              <span className={styles.horario}>{horario}</span>
              <span className={styles.dataJogo}>{data.substring(0, 5)}</span>
            </div>
          )}
        </div>

        <div className={styles.time}>
          <span className={styles.timeNome}>{visitante}</span>
          <Flag emoji={visitanteBandeira} className={styles.bandeira} alt={visitante} />
        </div>
      </div>

      <div className={styles.footer}>
        <span className={styles.localInfo}>
          📍 {estadio} • {cidade}
        </span>
      </div>
    </div>
  )
}

export default CardJogo
