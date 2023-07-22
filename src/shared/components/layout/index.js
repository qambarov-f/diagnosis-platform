
import { Component, Fragment } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
// import { Container } from "react-bootstrap";

class Layout extends Component {
  render() {
    console.log(this.props.children);
    return (
      <Fragment>
        {/* <Header />
        <main style={{ minHeight: "100vh" }}>
          <Container>{this.props.children}</Container>
        </main>
        <Footer /> */}

        <Fragment>
          <Header />
          <main>
            <div>{this.props.children}</div>
          </main>
          <Footer />
        </Fragment>
      </Fragment>
    );
  }
}

export default Layout;
