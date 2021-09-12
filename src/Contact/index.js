import showdown from 'showdown'
import '../base.scss';
import './index.css'
import './dial.jpg'
const converter = new showdown.Converter()


async function loadModules() {
  const API = await import('../API')
  const { website } = API
}

// loadModules()