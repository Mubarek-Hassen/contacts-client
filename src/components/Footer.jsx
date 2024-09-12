

const Footer = () => {
  const year = new Date().getFullYear()
  return (
    <footer className=" inset-x-0 bottom-0 p-4  ">
    <p>By - Mubarek Hassen</p>
      <p>{year}</p>
    </footer>
  )
}

export default Footer