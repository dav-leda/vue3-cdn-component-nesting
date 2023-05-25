

export default {

  template: /*html*/ `
  
    <section>

      <h2>Usando props</h2>
      <br>
      <p>
        Para enviar información desde un componente padre (en realidad podría llamarse componente <strong>madre</strong>, pero la convención es decirle padre 🤷‍♂️️)
        podemos usar <strong>props</strong>.
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
      Recuerden que si no necesitan usar <strong>this</strong> dentro del método <strong>data</strong>
      (y la gran mayoría de las veces no es necesario usar this)
      pueden declararlo con una <strong>arrow function</strong> que retorna un objeto.
      <br><br>
      Luego, el componente hijo de App (en este caso, NavBar) recibe la data como una <strong>prop</strong>:

<pre>
props: {
  pages: Array
},
</pre>
      Y puede acceder a estas props en cualquiera de las <strong>options</strong> del componente (methods, computed, etc). En este caso sí, debe usarse <strong>this</strong>:
      </p>
<pre>
methods: {
  showPage(title) {
    this.pages.forEach( page => 
      page.show = page.title === title 
    )
  }
}
</pre>
    </section>
  `
}