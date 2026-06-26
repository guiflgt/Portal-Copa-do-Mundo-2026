import React, { useState } from 'react'
import styles from './PainelTatico.module.css'

// Posições dos jogadores titulares e numeração de camisa informada pelo usuário
const ESQUEMAS = {
  '4-3-3': [
    { id: 1, numero: 1, nome: 'Alisson', pos: 'GK', top: 88, left: 50, clube: 'Liverpool', rating: 89 },
    { id: 2, numero: 13, nome: 'Danilo', pos: 'LD', top: 68, left: 85, clube: 'Juventus', rating: 81 },
    { id: 3, numero: 4, nome: 'Marquinhos', pos: 'ZAG', top: 72, left: 62, clube: 'PSG', rating: 87 },
    { id: 4, numero: 3, nome: 'G. Magalhães', pos: 'ZAG', top: 72, left: 38, clube: 'Arsenal', rating: 85 },
    { id: 5, numero: 16, nome: 'D. Santos', pos: 'LE', top: 68, left: 15, clube: 'Zenit', rating: 78 },
    { id: 6, numero: 5, nome: 'Casemiro', pos: 'VOL', top: 48, left: 50, clube: 'Manchester United', rating: 86 },
    { id: 7, numero: 8, nome: 'B. Guimarães', pos: 'VOL', top: 40, left: 30, clube: 'Newcastle', rating: 85 },
    { id: 8, numero: 20, nome: 'L. Paquetá', pos: 'MEI', top: 40, left: 70, clube: 'West Ham', rating: 84 },
    { id: 9, numero: 11, nome: 'Raphinha', pos: 'ATA', top: 18, left: 80, clube: 'Barcelona', rating: 85 },
    { id: 10, numero: 9, nome: 'M. Cunha', pos: 'ATA', top: 12, left: 50, clube: 'Wolverhampton', rating: 80 },
    { id: 11, numero: 7, nome: 'Vinicius Jr.', pos: 'ATA', top: 18, left: 20, clube: 'Real Madrid', rating: 91 }
  ],
  '4-4-2': [
    { id: 1, numero: 1, nome: 'Alisson', pos: 'GK', top: 88, left: 50, clube: 'Liverpool', rating: 89 },
    { id: 2, numero: 13, nome: 'Danilo', pos: 'LD', top: 68, left: 85, clube: 'Juventus', rating: 81 },
    { id: 3, numero: 4, nome: 'Marquinhos', pos: 'ZAG', top: 72, left: 62, clube: 'PSG', rating: 87 },
    { id: 4, numero: 3, nome: 'G. Magalhães', pos: 'ZAG', top: 72, left: 38, clube: 'Arsenal', rating: 85 },
    { id: 5, numero: 16, nome: 'D. Santos', pos: 'LE', top: 68, left: 15, clube: 'Zenit', rating: 78 },
    { id: 6, numero: 5, nome: 'Casemiro', pos: 'VOL', top: 52, left: 60, clube: 'Manchester United', rating: 86 },
    { id: 7, numero: 8, nome: 'B. Guimarães', pos: 'VOL', top: 52, left: 40, clube: 'Newcastle', rating: 85 },
    { id: 8, numero: 20, nome: 'L. Paquetá', pos: 'MEI', top: 35, left: 75, clube: 'West Ham', rating: 84 },
    { id: 9, numero: 11, nome: 'Raphinha', pos: 'MEI', top: 35, left: 25, clube: 'Barcelona', rating: 85 },
    { id: 10, numero: 9, nome: 'M. Cunha', pos: 'ATA', top: 14, left: 65, clube: 'Wolverhampton', rating: 80 },
    { id: 11, numero: 7, nome: 'Vinicius Jr.', pos: 'ATA', top: 14, left: 35, clube: 'Real Madrid', rating: 91 }
  ],
  '3-5-2': [
    { id: 1, numero: 1, nome: 'Alisson', pos: 'GK', top: 88, left: 50, clube: 'Liverpool', rating: 89 },
    { id: 3, numero: 4, nome: 'Marquinhos', pos: 'ZAG', top: 74, left: 65, clube: 'PSG', rating: 87 },
    { id: 4, numero: 3, nome: 'G. Magalhães', pos: 'ZAG', top: 75, left: 50, clube: 'Arsenal', rating: 85 },
    { id: 2, numero: 13, nome: 'Danilo', pos: 'ZAG', top: 74, left: 35, clube: 'Juventus', rating: 81 },
    { id: 9, numero: 11, nome: 'Raphinha', pos: 'ALA', top: 48, left: 88, clube: 'Barcelona', rating: 85 },
    { id: 6, numero: 5, nome: 'Casemiro', pos: 'VOL', top: 54, left: 62, clube: 'Manchester United', rating: 86 },
    { id: 7, numero: 8, nome: 'B. Guimarães', pos: 'VOL', top: 54, left: 38, clube: 'Newcastle', rating: 85 },
    { id: 5, numero: 16, nome: 'D. Santos', pos: 'ALA', top: 48, left: 12, clube: 'Zenit', rating: 78 },
    { id: 8, numero: 20, nome: 'L. Paquetá', pos: 'MEI', top: 34, left: 50, clube: 'West Ham', rating: 84 },
    { id: 10, numero: 9, nome: 'M. Cunha', pos: 'ATA', top: 14, left: 60, clube: 'Wolverhampton', rating: 80 },
    { id: 11, numero: 7, nome: 'Vinicius Jr.', pos: 'ATA', top: 14, left: 40, clube: 'Real Madrid', rating: 91 }
  ]
}

function PainelTatico() {
  const [esquemaAtivo, setEsquemaAtivo] = useState('4-3-3')
  const [jogadorSelecionado, setJogadorSelecionado] = useState(null)

  const jogadores = ESQUEMAS[esquemaAtivo]

  return (
    <div className={styles.container}>
      <div className={styles.intro}>
        <h2 className={styles.titulo}>⚽ Prancheta Tática - Titulares vs Marrocos</h2>
        <p className={styles.desc}>
          Estes foram os 11 titulares escalados para a partida contra o Marrocos. Selecione os esquemas táticos ou clique nos atletas para analisar seus atributos.
        </p>

        {/* Seleção do Esquema */}
        <div className={styles.esquemasBotoes}>
          {Object.keys(ESQUEMAS).map((esquema) => (
            <button
              key={esquema}
              className={`${styles.btnEsquema} ${
                esquemaAtivo === esquema ? styles.btnEsquemaAtivo : ''
              }`}
              onClick={() => {
                setEsquemaAtivo(esquema)
                setJogadorSelecionado(null) // Fecha ficha técnica ao mudar esquema
              }}
            >
              {esquema}
            </button>
          ))}
        </div>
      </div>

      <div className={styles.painelLayout}>
        {/* O Campo de Futebol 2D */}
        <div className={styles.campoWrapper}>
          <div className={styles.campoFutebol}>
            <div className={styles.linhaMeio}></div>
            <div className={styles.circuloCentral}></div>
            <div className={styles.grandeAreaAtaque}></div>
            <div className={styles.grandeAreaDefesa}></div>

            {/* Renderização dos Jogadores (Pinos Interativos) */}
            {jogadores.map((jogador) => (
              <button
                key={jogador.id}
                className={`${styles.pinoJogador} ${
                  jogadorSelecionado?.id === filenameId(jogador.id) ? styles.pinoJogadorAtivo : ''
                }`}
                style={{
                  top: `${jogador.top}%`,
                  left: `${jogador.left}%`
                }}
                onClick={() => setJogadorSelecionado(jogador)}
              >
                <div className={styles.pinoIcon}>
                  <span className={styles.pinoNumero}>{jogador.numero}</span>
                </div>
                <span className={styles.pinoNome}>{jogador.nome}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Ficha Técnica Lateral */}
        <div className={styles.fichaTecnica}>
          {jogadorSelecionado ? (
            <div className={styles.cardFicha}>
              <div className={styles.fichaHeader}>
                <span className={styles.fichaNumero}>{jogadorSelecionado.numero}</span>
                <div>
                  <h3 className={styles.fichaNome}>{jogadorSelecionado.nome}</h3>
                  <span className={styles.fichaPosicao}>{jogadorSelecionado.pos}</span>
                </div>
              </div>
              <div className={styles.fichaBody}>
                <div className={styles.fichaInfo}>
                  <span className={styles.fichaLabel}>Clube atual:</span>
                  <span className={styles.fichaValor}>{jogadorSelecionado.clube}</span>
                </div>
                <div className={styles.fichaInfo}>
                  <span className={styles.fichaLabel}>Pontuação Geral:</span>
                  <span className={styles.fichaValor}>
                    <span className={styles.ratingBadge}>{jogadorSelecionado.rating}</span>
                  </span>
                </div>
                <div className={styles.fichaStatus}>
                  <span className={styles.fichaLabel}>Status na Copa:</span>
                  <span className={styles.statusConfirmado}>✅ Titular vs Marrocos</span>
                </div>
              </div>
              <button
                className={styles.btnCloseFicha}
                onClick={() => setJogadorSelecionado(null)}
              >
                Fechar Ficha
              </button>
            </div>
          ) : (
            <div className={styles.fichaPlaceholder}>
              <span className={styles.placeholderIcon}>🖱️</span>
              <p>Selecione um jogador no gramado para visualizar seus atributos táticos.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
  
  // Função interna para comparação segura
  function filenameId(id) {
    return id;
  }
}

export default PainelTatico
