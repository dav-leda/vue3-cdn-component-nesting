

import DiscordIcon from "./icons/DiscordIcon.js"
import LinkedInIcon from "./icons/LinkedInIcon.js"

export default {

  components: {
    DiscordIcon,
    LinkedInIcon
  },

  template: /*html*/ `
  
  <section>

    <h2>Contacto ☎️ 🙂️</h2>
    
    <p class="mt-1">
      Hola 🙋‍♂️️ Mi nombre es David Leda y soy desarrollador web.
    </p>
    <p>
      Si quieren contactarme pueden hacerlo por Discord o LinkedIn:
    </p>

    <div class="flex-center mt-2">
      <a href="https://discordapp.com/users/83386417271865346" target="_blank">
        <discord-icon/>
      </a>
      <a href="https://www.linkedin.com/in/david-leda/" target="_blank">
        <linked-in-icon/>
      </a>
    </div>
  
  </section>
`
}