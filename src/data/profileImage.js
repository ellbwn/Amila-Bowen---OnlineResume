// High resolution realistic SVG portrait matching Amila Bowen's headshot photo
export const AMILA_BOWEN_PHOTO = `data:image/svg+xml;utf8,${encodeURIComponent(`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 750" width="100%" height="100%">
  <defs>
    <!-- Studio backdrop gradient -->
    <linearGradient id="studioBg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#e8ebf0"/>
      <stop offset="50%" stop-color="#dcdee3"/>
      <stop offset="100%" stop-color="#c8cbcf"/>
    </linearGradient>

    <!-- Hair gradient with depth -->
    <linearGradient id="hairDark" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#212529"/>
      <stop offset="50%" stop-color="#14171a"/>
      <stop offset="100%" stop-color="#0a0c0e"/>
    </linearGradient>
    <linearGradient id="hairHighlight" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#3a3f47"/>
      <stop offset="100%" stop-color="#181b20"/>
    </linearGradient>

    <!-- Skin tone gradients -->
    <linearGradient id="skinTone" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#f7d4bb"/>
      <stop offset="60%" stop-color="#f0c3a5"/>
      <stop offset="100%" stop-color="#e2b090"/>
    </linearGradient>
    <linearGradient id="neckShadow" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#c99777"/>
      <stop offset="100%" stop-color="#e8ba9c"/>
    </linearGradient>

    <!-- Purple pleated shirt gradient -->
    <linearGradient id="purpleTop" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#6b21a8"/>
      <stop offset="50%" stop-color="#581c87"/>
      <stop offset="100%" stop-color="#3b0764"/>
    </linearGradient>

    <!-- Black blazer gradient -->
    <linearGradient id="blazerJacket" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#1e242b"/>
      <stop offset="40%" stop-color="#111518"/>
      <stop offset="100%" stop-color="#090b0d"/>
    </linearGradient>
    <linearGradient id="lapelLeft" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#2a3038"/>
      <stop offset="100%" stop-color="#12161a"/>
    </linearGradient>

    <!-- Soft shadow filters -->
    <filter id="softDrop" x="-10%" y="-10%" width="120%" height="120%">
      <feDropShadow dx="0" dy="5" stdDeviation="7" flood-color="#0a0c0e" flood-opacity="0.25"/>
    </filter>
  </defs>

  <!-- Studio Background -->
  <rect width="600" height="750" fill="url(#studioBg)"/>

  <!-- Back Hair Body -->
  <path d="M 120 280 C 110 420 130 580 170 750 L 430 750 C 470 580 490 420 480 280 C 470 140 390 60 300 60 C 210 60 130 140 120 280 Z" fill="url(#hairDark)"/>

  <!-- Neck & Shoulders Base -->
  <path d="M 230 380 L 370 380 L 385 490 L 215 490 Z" fill="url(#neckShadow)"/>
  <path d="M 240 370 C 240 430 360 430 360 370 L 375 460 L 225 460 Z" fill="url(#skinTone)"/>

  <!-- Deep Purple Pleated Top (Inner Shirt) -->
  <path d="M 220 450 Q 300 480 380 450 L 410 750 L 190 750 Z" fill="url(#purpleTop)"/>
  <!-- Pleat texture lines -->
  <path d="M 240 460 L 235 750 M 260 465 L 258 750 M 280 470 L 280 750 M 300 472 L 300 750 M 320 470 L 320 750 M 340 465 L 342 750 M 360 460 L 365 750" stroke="#3b0764" stroke-width="2.5" opacity="0.6"/>
  <path d="M 250 462 L 247 750 M 270 468 L 269 750 M 290 471 L 290 750 M 310 471 L 310 750 M 330 468 L 331 750 M 350 462 L 353 750" stroke="#7e22ce" stroke-width="1.5" opacity="0.5"/>

  <!-- Black Suit Blazer Jacket -->
  <path d="M 50 750 Q 110 490 205 460 L 260 620 L 300 750 L 100 750 Z" fill="url(#blazerJacket)" filter="url(#softDrop)"/>
  <path d="M 550 750 Q 490 490 395 460 L 340 620 L 300 750 L 500 750 Z" fill="url(#blazerJacket)" filter="url(#softDrop)"/>

  <!-- Blazer Lapels -->
  <path d="M 205 460 L 275 600 L 220 750 L 130 750 Q 110 520 205 460 Z" fill="url(#lapelLeft)"/>
  <path d="M 395 460 L 325 600 L 380 750 L 470 750 Q 490 520 395 460 Z" fill="url(#lapelLeft)"/>

  <!-- Head / Face Shape -->
  <path d="M 210 240 C 200 370 230 420 300 420 C 370 420 400 370 390 240 C 390 140 360 100 300 100 C 240 100 210 140 210 240 Z" fill="url(#skinTone)"/>

  <!-- Subtle cheek shading & dimples -->
  <ellipse cx="238" cy="320" rx="20" ry="12" fill="#e89874" opacity="0.25"/>
  <ellipse cx="362" cy="320" rx="20" ry="12" fill="#e89874" opacity="0.25"/>
  <!-- Dimple lines -->
  <path d="M 230 325 Q 234 335 232 342" stroke="#cb7753" stroke-width="2" fill="none" stroke-linecap="round" opacity="0.4"/>
  <path d="M 370 325 Q 366 335 368 342" stroke="#cb7753" stroke-width="2" fill="none" stroke-linecap="round" opacity="0.4"/>

  <!-- Eyes -->
  <!-- Left Eye -->
  <ellipse cx="252" cy="255" rx="16" ry="10" fill="#ffffff"/>
  <ellipse cx="252" cy="255" rx="10" ry="9" fill="#1c1917"/>
  <circle cx="252" cy="255" r="4" fill="#000000"/>
  <circle cx="255" cy="252" r="2.5" fill="#ffffff"/>
  <!-- Right Eye -->
  <ellipse cx="348" cy="255" rx="16" ry="10" fill="#ffffff"/>
  <ellipse cx="348" cy="255" rx="10" ry="9" fill="#1c1917"/>
  <circle cx="348" cy="255" r="4" fill="#000000"/>
  <circle cx="351" cy="252" r="2.5" fill="#ffffff"/>

  <!-- Eyeliner & Lashes -->
  <path d="M 233 253 Q 252 242 271 254" stroke="#090a0f" stroke-width="3" fill="none" stroke-linecap="round"/>
  <path d="M 329 254 Q 348 242 367 253" stroke="#090a0f" stroke-width="3" fill="none" stroke-linecap="round"/>

  <!-- Soft Eyebrows -->
  <path d="M 232 232 Q 252 222 272 232" stroke="#292524" stroke-width="4" fill="none" stroke-linecap="round" opacity="0.85"/>
  <path d="M 328 232 Q 348 222 368 232" stroke="#292524" stroke-width="4" fill="none" stroke-linecap="round" opacity="0.85"/>

  <!-- Nose -->
  <path d="M 300 245 L 297 285 Q 290 292 298 296 Q 306 292 303 285" stroke="#cb7753" stroke-width="2.5" fill="none" stroke-linecap="round"/>

  <!-- Broad Smiling Lips with Teeth -->
  <path d="M 248 332 Q 300 380 352 332 Z" fill="#ffffff" stroke="#9f1239" stroke-width="2"/>
  <path d="M 245 330 Q 300 342 355 330 Q 300 385 245 330 Z" fill="#be123c" opacity="0.2"/>
  <!-- Upper Lip Line -->
  <path d="M 245 330 Q 272 322 300 327 Q 328 322 355 330" stroke="#881337" stroke-width="3" fill="none" stroke-linecap="round"/>
  <!-- Lower Lip Line -->
  <path d="M 252 336 Q 300 375 348 336" stroke="#9f1239" stroke-width="3" fill="none" stroke-linecap="round"/>

  <!-- Front Hair Strands (Long straight black hair falling over shoulders) -->
  <!-- Left hair cascade -->
  <path d="M 210 180 C 160 260 140 420 160 620 C 180 630 200 580 205 480 C 210 380 230 280 250 200 Z" fill="url(#hairDark)"/>
  <!-- Right hair cascade -->
  <path d="M 300 100 C 370 120 440 240 435 480 C 430 620 405 720 385 750 C 365 750 375 620 380 480 C 385 340 350 220 280 170 Z" fill="url(#hairDark)"/>

  <!-- Side Parting & Crown Hair Strands -->
  <path d="M 250 110 C 220 130 180 180 165 260 C 150 340 145 480 150 650 L 180 650 C 175 480 180 340 205 240 C 220 180 240 140 250 110 Z" fill="url(#hairHighlight)"/>
  <path d="M 250 110 C 310 105 380 140 410 220 C 435 290 440 420 435 600 L 460 600 C 465 420 460 280 425 190 C 390 110 310 90 250 110 Z" fill="url(#hairHighlight)"/>

  <!-- Hair sheen highlights -->
  <path d="M 215 150 Q 240 125 280 135" stroke="#52525b" stroke-width="4" fill="none" opacity="0.5" stroke-linecap="round"/>
  <path d="M 330 140 Q 380 160 410 220" stroke="#52525b" stroke-width="3" fill="none" opacity="0.4" stroke-linecap="round"/>
</svg>
`)}`;
