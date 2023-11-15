import Button from "../components/Button";
import { GoBell, GoDesktopDownload, GoDatabase } from "react-icons/go";

function ButtonPage() {
  const handleClick = () => {
    console.log("clicked !");
  };
  return (
    <div>
      <div>
        <Button primary rounded outline className="mb-5" onClick={handleClick}>
          <GoBell />
          Click here!
        </Button>
      </div>
      <div>
        <Button danger outline onMouseEnter={handleClick}>
          <GoDesktopDownload />
          Buy Now!
        </Button>
      </div>
      <div>
        <Button warning onMouseLeave={handleClick}>
          <GoDatabase />
          See Deal!
        </Button>
      </div>
      <div>
        <Button secondary outline>
          Hide Ads!
        </Button>
      </div>
      <div>
        <Button success rounded outline>
          Something!
        </Button>
      </div>
    </div>
  );
}

export default ButtonPage;
