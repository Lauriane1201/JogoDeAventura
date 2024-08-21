  const avanca = document.querySelectorAll('.btn-proximo');

avanca.forEach(button => {
  button.addEventlistener9'click', function(){
      const atual = document.querySelector('.ativo');
      const proximoPasso = 'passo-'+this.getAttribute('data-proximo');

      atual.classList.remove('ativo');
      document.getElementById(proximoPasso0.classList.add('ativo');
  })
})

      
