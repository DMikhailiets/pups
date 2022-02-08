import Iroute from "../interfaces/route"
import RootComponent from "../pages/rootComponent/component/rootComponent"

const routes: Iroute[] = [
  {
    path: '/',
    name: 'Home page',
    component: RootComponent,
    props: {}
  }
]

export default routes