import Header from "../components/Header";
import Meta from "../components/Meta";

class Page extends React.Component {
  render() {
    return (
      <div>
        <Meta />
        <Header />
        <hr />
        {this.props.children}
      </div>
    );
  }
}

export default Page;
