// import Product from './product'
//
// export default Product

export default {
  functional: true,
  render () {
    return (
      <div>
        <div> render function with jsx </div>
        <div> <button onClick={() => alert('you click me!')}>click me</button> </div>
      </div>
    )
  }
}
