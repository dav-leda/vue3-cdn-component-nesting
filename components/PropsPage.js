

export default {

  template: /*html*/ `
  
    <section>

      <h2>Usando props</h2>
      <br>
      <p>
        Para enviar información desde un componente padre (en realidad podría llamarse componente madre, pero la convención es decirle padre 🤷‍♂️️)
        a un componente hijo podemos usar <strong>props</strong>.
        <br><br>
        Por ejemplo, el componente App contiene un array en el método <strong>data</strong>:

<pre>
data: () => ({
  pages: [
    { title: 'Vue CDN', show: true },
    { title: 'Contacto', show: false },
    { title: 'Props', show: false },
    { title: 'Router', show: false }
  ]
}),
</pre>
      <br>
      Y luego el componente hijo de App (en este caso, NavBar) recibe la data como una <strong>prop</strong>:

<pre>
props: {
  pages: Array
},
</pre>
      Y puede acceder a estas props en cualquiera de las <strong>options</strong> del componente (methods, computed, etc)
      usando <strong>this</strong> (this.pages). Este <strong>this</strong> hace referencia al componente 
      (ya que cada componente es un objeto de JS).
      </p>
<pre>
methods: {
  showPage(title) {
    this.pages.forEach(page => page.show = (page.title === title))
  },
  isVisible(title) {
    return ( this.pages.find(page => page.title === title) ).show
  }
},
template: &#96;

  &lt;nav&gt;

    &lt;h3 v-for=&quot;page in pages&quot; :key=&quot;page.title&quot; 
      @click=&quot;showPage(page.title)&quot;
    &gt; &#123;&#123;page.title&#125;&#125; &lt;/h3&gt; 
  
  &lt;/nav&gt;

  &lt;home-page v-show="isVisible('Vue CDN')"/&gt;  
  &lt;router-page v-show="isVisible('Router')"/&gt;
  &lt;props-page v-show="isVisible('Props')"/&gt;
  &lt;contact-page v-show="isVisible('Contacto')"/&gt;
&#96;
</pre>
    </section>
  `
}