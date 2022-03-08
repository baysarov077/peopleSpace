window.addEventListener('DOMContentLoaded', () => {
  fetch("http://api.open-notify.org/astros.json")
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      console.log(data.people[0])
      const count = document.getElementById('count')
      count.textContent = data.people.length
      for(let i = 0; i < data.people.length; i++){
        const number = document.createElement('th')
        const place = document.createElement('th')
        const name = document.createElement('th')
        const mainRow = document.createElement('tr')
        number.textContent = i + 1
        place.textContent = data.people[i].craft
        name.textContent = data.people[i].name
        mainRow.append(number, place, name)
        document.getElementById('table').append(mainRow)
      
      }
      // ТВОЕ РЕШЕНИЕ


    })
    .catch((err) => {
      const table = document.getElementById('table')
      const errBlock = document.createElement('div')
      const container = document.getElementById('container')
      count.textContent = err
      table.style.display = 'none'
      errBlock.className = 'error'
      errBlock.textContent = 'Возникла ошибка'
      container.append(errBlock)
      // ОБРАБОТКА ОШИБОК

    })
});