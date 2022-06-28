import Footer from "../components/Footer"
import Header from "../components/Header"

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex justify-center bg-contentBg">
        <section className="about-content w-main_w ">
          About
        </section>
      </main>
      {/* <pre>
        <code>
          Coding with Didem = Prism code hightlights
        </code>
      </pre> */}
      <Footer />
    </>
  )
}
