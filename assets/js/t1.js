document.addEventListener('DOMContentLoaded', function() {
    let db = coDesConnect('https://codes-daniel.firebaseio.com')
    let params = coDesExtract()
    let value = params['key']
    let proj = params['pro']

    db.download('/', function(data) {
    
    //   context = data
    //   console.log(data)
    //   coDesReplace('.k1', context)


      context = data['portfolio'][value]
      console.log(context)
      coDesReplace('.cat1', context)


      context = data['portfolio'][value]['projetos'][proj]
      console.log(context)
      coDesReplace('.k1', context)


    })
  })
  
  