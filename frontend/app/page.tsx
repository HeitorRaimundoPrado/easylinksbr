import Content from "@/components/Content"
import Section from "@/components/Section"
import ExtraText from "@/components/ExtraText"
import NavBar from "@/components/NavBar"
import Footer from "@/components/Footer"

const homePageStructured = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Como usar nosso encurtador",
  description: "Tutorial para te ajudar a usar nosso encurtador",
  datePublished: new Date("2023-08-08T18:11:01.340Z").toISOString(),
  author: {
    "@type": "Organization",
    name: "easylinksbr",
    url: "https://easylinksbr.web.app"
  }
};


const HomePage = () => {
  return (
    <div className="home_page">
      <NavBar />
      <Content />
      <Section />
      <ExtraText />
      <Footer />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homePageStructured) }}
      />
    </div>
  )
}

export default HomePage;
