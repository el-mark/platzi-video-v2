// Funciones y otros snippets utilitarios
// Da formato de 00 a un número n

export const pad = n => `0${n}`.substr(-2)

// Da formato 00 : 00 (min : seg) a una cantidad de segundos dada

export const formatTime = secs => `${pad(parseInt(secs/60))}:${pad(parseInt(secs%60))}`

// --- Validar document is fullscreen
export const isFullScreen = () => document.fullscreen || document.webkitIsFullScreen || document.mozFullScreen

// --- solicitar FullScreen al navegador para el elemento dado
export const requestFullScreen = element => {
  try{ element.requestFullscreen()        } catch(e){
  try{ element.webkitRequestFullscreen()  } catch(e){
  try{ element.mozRequestFullscreen()     } catch(e){
  try{ element.msRequestFullscreen()      } catch(e){
    console.log(e)
  }}}}
}

// --- salir del FullScreen
export const exitFullScreen = () => {
  try { document.exitFullscreen()       } catch(e){
  try { document.webkitExitFullscreen() } catch(e){
  try { document.mozCancelFullscreen()  } catch(e){
  try { document.msExitFullscreen()     } catch(e){
    console.log(e)
  }}}}
}