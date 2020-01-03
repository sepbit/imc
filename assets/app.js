/**
 * @licstart  The following is the entire license notice for the
 * JavaScript code in this page.
 *
 * Flex - Calculadora IMC
 * Copyright (C) 2020  Sepbit
 *
 * The JavaScript code in this page is free software: you can
 * redistribute it and/or modify it under the terms of the GNU
 * General Public License (GNU GPL) as published by the Free Software
 * Foundation, either version 3 of the License, or (at your option)
 * any later version.  The code is distributed WITHOUT ANY WARRANTY;
 * without even the implied warranty of MERCHANTABILITY or FITNESS
 * FOR A PARTICULAR PURPOSE.  See the GNU GPL for more details.
 *
 * As additional permission under GNU GPL version 3 section 7, you
 * may distribute non-source (e.g., minimized or compacted) forms of
 * that code without the copy of the GNU GPL normally required by
 * section 4, provided you include this license notice and a URL
 * through which recipients can access the Corresponding Source.
 *
 * @licend  The above is the entire license notice
 * for the JavaScript code in this page.
 */
/* global $ */

const app = {
  init: function () {
    window.addEventListener('hashchange', this.router)
    window.addEventListener('load', this.router)
    this.toggler()
    this.form()
  },

  router: function () {
    const home = document.getElementById('home')
    const about = document.getElementById('about')

    if (window.location.hash === '#/about') {
      home.style.display = 'none'
      about.style.display = ''
      document.body.scrollTop = 0
      document.documentElement.scrollTop = 0
    } else {
      home.style.display = ''
      about.style.display = 'none'
      document.body.scrollTop = 0
      document.documentElement.scrollTop = 0
    }
  },

  toggler: function () {
    if (window.innerWidth < 992) {
      $('.navbar-nav a').on('click', function () {
        $('.navbar-toggler').click()
      })
    }
  },

  form: function () {
    const calculator = document.getElementById('calculator')
    calculator.addEventListener('submit', function (e) {
      e.preventDefault()

      $('#loading').modal('toggle')

      const result = document.getElementById('resultMsg')
      const height = document.getElementById('height').value
      const weight = document.getElementById('weight').value
      const imc = Number(weight) / Math.pow(height, 2)

      setTimeout(function () {
        if (imc < 18.5) {
          result.innerHTML = '<p>IMC: ' + imc.toFixed(2) + ', você está com</p>' +
            '<h1 class="text-success">Baixo peso</h1>'
        } else if (imc >= 18.5 && imc < 25) {
          result.innerHTML = '<p>IMC: ' + imc.toFixed(2) + ', você está com</p>' +
            '<h1 class="text-success">Peso adequado</h1>'
        } else if (imc >= 25 && imc < 30) {
          result.innerHTML = '<p>IMC: ' + imc.toFixed(2) + ', você está com</p>' +
            '<h1 class="text-success">Sobrepeso</h1>'
        } else if (imc >= 30) {
          result.innerHTML = '<p>IMC: ' + imc.toFixed(2) + ', você está com</p>' +
            '<h1 class="text-success">Obesidade</h1>'
        }

        $('#loading').modal('toggle')
        $('#resultModal').modal('toggle')
      }, 1000)
    })
  }
}

app.init()
