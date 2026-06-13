import React from 'react'
import styles from './Flag.module.css'

export function getFlagUrl(emoji) {
  if (!emoji || emoji === '🏳️') return null
  
  if (emoji === '🏴󠁧󠁢󠁥󠁮󠁧󠁿') return 'https://flagcdn.com/w40/gb-eng.png'
  if (emoji === '🏴󠁧󠁢󠁳󠁣󠁴󠁿') return 'https://flagcdn.com/w80/gb-sct.png'
  if (emoji === '🏴󠁧󠁢󠁷󠁬󠁳󠁿') return 'https://flagcdn.com/w40/gb-wls.png'
  
  const codePoints = Array.from(emoji).map(char => char.codePointAt(0))
  const countryCode = codePoints
    .filter(cp => cp >= 0x1F1E6 && cp <= 0x1F1FF)
    .map(cp => String.fromCharCode(cp - 0x1F1E6 + 65))
    .join('')
    
  if (countryCode && countryCode.length === 2) {
    return `https://flagcdn.com/w40/${countryCode.toLowerCase()}.png`
  }
  
  return null
}

function Flag({ emoji, className = '', alt = 'flag' }) {
  const flagUrl = getFlagUrl(emoji)

  if (!flagUrl) {
    return <span className={`${styles.flagEmoji} ${className}`}>{emoji || '🏳️'}</span>
  }

  return (
    <img
      src={flagUrl}
      alt={alt}
      className={`${styles.flagImage} ${className}`}
      loading="lazy"
      onError={(e) => {
        e.target.style.display = 'none'
        const sibling = e.target.nextSibling
        if (sibling) sibling.style.display = 'inline-block'
      }}
    />
  )
}

export default Flag
