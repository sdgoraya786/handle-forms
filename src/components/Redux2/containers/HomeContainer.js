import Home from "../components/Home";
import { connect } from "react-redux";
import { addToCart, romoveCartItem } from "../Services/Actions/action";

const mapStateToProps = (state) => ({
  data: state.cartItems.cartData,
});
const mapDispatchToProps = (dispatch) => ({
  addToCartHandler: (data) => dispatch(addToCart(data)),
  removeToCartHandler: (data) => dispatch(romoveCartItem(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
