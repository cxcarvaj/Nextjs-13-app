// Creating a folder and using () to name it we group the files together and create a shared/common layout.
export default function CommonLayout ({ children }) {
  return (
    <div>
      {/* <h1>This is post layout</h1> */}
      <h1>This is a common layout</h1>
      {/* <Counter/> */}
      {/* <small>Home &bull; Posts</small>   */}
      <marquee>
        <h1>Next.js is awesome!</h1>
        <p>cxcarvaj</p>
      </marquee>
      {children}
    </div>
  )
}
