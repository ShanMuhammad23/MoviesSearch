import React from 'react'

const Footer = () => {
  return (
    <footer class="footer">
    <div class="waves">
      <div class="wave" id="wave1"></div>
      <div class="wave" id="wave2"></div>
      <div class="wave" id="wave3"></div>
      <div class="wave" id="wave4"></div>
    </div>
    <ul class="social-icon">
      <li class="social-icon__item"><a class="social-icon__link" href="https://www.facebook.com/Shanijoiya2374/" target='_blank'>
          <ion-icon name="logo-facebook"></ion-icon>
        </a></li>
      <li class="social-icon__item"><a class="social-icon__link" href="https://github.com/ShanMuhammad23" target='_blank'>
          <ion-icon name="logo-github"></ion-icon>
        </a></li>
      <li class="social-icon__item"><a class="social-icon__link" href="https://www.linkedin.com/in/shan-muhammad-joiya/" target='_blank'>
          <ion-icon name="logo-linkedin"></ion-icon>
        </a></li>
      
    </ul>
  
    <p>&copy;2024 Shan Muhammad| All Rights Reserved</p>
  </footer>
  )
}

export default Footer
