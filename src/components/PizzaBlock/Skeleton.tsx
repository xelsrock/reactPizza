import React from "react"
import ContentLoader from "react-content-loader"

const Sceleton: React.FC = () => (
  <ContentLoader
    className="pizza-block"
    speed={2}
    width={250}
    height={450}
    viewBox="0 0 250 450"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <circle cx="125" cy="125" r="125" /> 
    <rect x="0" y="262" rx="10" ry="10" width="250" height="20" /> 
    <rect x="0" y="292" rx="10" ry="10" width="250" height="60" /> 
    <rect x="0" y="367" rx="10" ry="10" width="70" height="39" /> 
    <rect x="131" y="369" rx="10" ry="10" width="111" height="35" />
  </ContentLoader>
)

export default Sceleton

