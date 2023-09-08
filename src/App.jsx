import RenderImg from "../components/Image";
import RenderName from "../components/Name";
import RenderButtons from "../components/Buttons";
import RenderAbout from "../components/About";
import RenderInterests from "../components/Interests";
import RenderFooter from "../components/Footer";

export default function App() {
  return (
    <div className="container">
      <RenderImg />
      <div className="info-container">
        <RenderName />
        <RenderButtons />
        <RenderAbout />
        <RenderInterests />
      </div>
      <RenderFooter />
    </div>
  );
}
