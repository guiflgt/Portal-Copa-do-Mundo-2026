import React, { useState } from 'react'
import Flag from '../Flag/Flag'
import styles from './CardEstadio.module.css'

function CardEstadio({
  nome,
  cidade,
  pais,
  paisBandeira,
  capacidade,
  descricao,
  destaque,
  imagem
}) {
  const [imgError, setImgError] = useState(false)

  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        {imgError || !imagem ? (
          <div className={styles.imageFallback}>
            <span className={styles.stadiumIcon}>🏟️</span>
            <div className={styles.pitchLines}></div>
          </div>
        ) : (
          <img
            src={imagem}
            alt={nome}
            className={styles.image}
            onError={() => setImgError(true)}
            loading="lazy"
          />
        )}
        {destaque && <span className={styles.destaqueTag}>{destaque}</span>}
      </div>

      <div className={styles.content}>
        <div className={styles.location}>
          <Flag emoji={paisBandeira} className={styles.bandeira} alt={pais} />
          <span className={styles.cidadePais}>
            {cidade}, {pais}
          </span>
        </div>

        <h3 className={styles.nome}>{nome}</h3>

        <div className={styles.capacidadeWrapper}>
          <span className={styles.capacidadeIcon}>👥</span>
          <span className={styles.capacidadeValor}>
            {capacidade ? capacidade.toLocaleString('pt-BR') : 'N/A'} lugares
          </span>
        </div>

        <p className={styles.descricao}>{descricao}</p>
      </div>
    </div>
  )
}

export default CardEstadio
