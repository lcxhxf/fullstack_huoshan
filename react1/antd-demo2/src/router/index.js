import Topic from '../view/topic/index';
import UnfinedPage from '../view/page404/index';
const route = [
  {
    path: "/topic/:id",
    exact: true,
    render(props) {
      return <Topic {...props} />
    }
  },
  {
    path: "",
    exact: false,
    render(props) {
      return <UnfinedPage {...props}/>
    }
  }
]

export { route }