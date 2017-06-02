let inputUrl = ''
let inputCaption = ''

$(document).ready(function(){
  inputUrlListener()
})


function inputUrlListener() {
  $('#photo-form').on('submit', function(e){
    e.preventDefault()
    inputUrl = this.children[1].value
    inputCaption = this.children[3].value
    renderUrl()
    renderCaption()
    $('#photo-form').trigger('reset')
  })
}

function renderCaption() {
  let captionHtml = `<div>${inputCaption}</div>`

  $('#photo-list').append(inputCaption)
}

function renderUrl() {
  let urlHtml = `<div><image src=${inputUrl}></image></div>`

  $('#photo-list').append(urlHtml)
}
