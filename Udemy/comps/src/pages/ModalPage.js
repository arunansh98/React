import Modal from "../components/Modal";
import Button from "../components/Button";
import { useState } from "react";

function ModalPage() {
  const [showModal, setShowModal] = useState(false);

  const handleClick = () => {
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
  };

  const actionBar = (
    <div>
      <Button onClick={handleClose} primary>
        I Accept
      </Button>
    </div>
  );

  const modal = (
    <Modal onClose={handleClose} actionBar={actionBar}>
      <p>Here is an important agreement for you to accept</p>
    </Modal>
  );

  return (
    <div>
      <Button primary onClick={handleClick}>
        Open Modal
      </Button>
      {showModal && modal}
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eget
        ligula vitae odio interdum pretium non a elit. Nulla tristique, elit
        dictum tempus elementum, mauris sem vestibulum tellus, eu scelerisque
        quam ligula sed ante. Curabitur facilisis dictum ligula vel pretium. Sed
        pretium, ipsum ut ullamcorper molestie, velit nisl porttitor sem, non
        volutpat tortor odio nec nisi. Duis sit amet imperdiet ex. Nam euismod
        pulvinar nisi, sit amet pulvinar purus imperdiet at. Praesent dignissim
        malesuada odio vel consectetur. Pellentesque ut orci ut quam pretium
        gravida. Class aptent taciti sociosqu ad litora torquent per conubia
        nostra, per inceptos himenaeos. Vestibulum ante ipsum primis in faucibus
        orci luctus et ultrices posuere cubilia curae;
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eget
        ligula vitae odio interdum pretium non a elit. Nulla tristique, elit
        dictum tempus elementum, mauris sem vestibulum tellus, eu scelerisque
        quam ligula sed ante. Curabitur facilisis dictum ligula vel pretium. Sed
        pretium, ipsum ut ullamcorper molestie, velit nisl porttitor sem, non
        volutpat tortor odio nec nisi. Duis sit amet imperdiet ex. Nam euismod
        pulvinar nisi, sit amet pulvinar purus imperdiet at. Praesent dignissim
        malesuada odio vel consectetur. Pellentesque ut orci ut quam pretium
        gravida. Class aptent taciti sociosqu ad litora torquent per conubia
        nostra, per inceptos himenaeos. Vestibulum ante ipsum primis in faucibus
        orci luctus et ultrices posuere cubilia curae;
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eget
        ligula vitae odio interdum pretium non a elit. Nulla tristique, elit
        dictum tempus elementum, mauris sem vestibulum tellus, eu scelerisque
        quam ligula sed ante. Curabitur facilisis dictum ligula vel pretium. Sed
        pretium, ipsum ut ullamcorper molestie, velit nisl porttitor sem, non
        volutpat tortor odio nec nisi. Duis sit amet imperdiet ex. Nam euismod
        pulvinar nisi, sit amet pulvinar purus imperdiet at. Praesent dignissim
        malesuada odio vel consectetur. Pellentesque ut orci ut quam pretium
        gravida. Class aptent taciti sociosqu ad litora torquent per conubia
        nostra, per inceptos himenaeos. Vestibulum ante ipsum primis in faucibus
        orci luctus et ultrices posuere cubilia curae;
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eget
        ligula vitae odio interdum pretium non a elit. Nulla tristique, elit
        dictum tempus elementum, mauris sem vestibulum tellus, eu scelerisque
        quam ligula sed ante. Curabitur facilisis dictum ligula vel pretium. Sed
        pretium, ipsum ut ullamcorper molestie, velit nisl porttitor sem, non
        volutpat tortor odio nec nisi. Duis sit amet imperdiet ex. Nam euismod
        pulvinar nisi, sit amet pulvinar purus imperdiet at. Praesent dignissim
        malesuada odio vel consectetur. Pellentesque ut orci ut quam pretium
        gravida. Class aptent taciti sociosqu ad litora torquent per conubia
        nostra, per inceptos himenaeos. Vestibulum ante ipsum primis in faucibus
        orci luctus et ultrices posuere cubilia curae;
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eget
        ligula vitae odio interdum pretium non a elit. Nulla tristique, elit
        dictum tempus elementum, mauris sem vestibulum tellus, eu scelerisque
        quam ligula sed ante. Curabitur facilisis dictum ligula vel pretium. Sed
        pretium, ipsum ut ullamcorper molestie, velit nisl porttitor sem, non
        volutpat tortor odio nec nisi. Duis sit amet imperdiet ex. Nam euismod
        pulvinar nisi, sit amet pulvinar purus imperdiet at. Praesent dignissim
        malesuada odio vel consectetur. Pellentesque ut orci ut quam pretium
        gravida. Class aptent taciti sociosqu ad litora torquent per conubia
        nostra, per inceptos himenaeos. Vestibulum ante ipsum primis in faucibus
        orci luctus et ultrices posuere cubilia curae;
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eget
        ligula vitae odio interdum pretium non a elit. Nulla tristique, elit
        dictum tempus elementum, mauris sem vestibulum tellus, eu scelerisque
        quam ligula sed ante. Curabitur facilisis dictum ligula vel pretium. Sed
        pretium, ipsum ut ullamcorper molestie, velit nisl porttitor sem, non
        volutpat tortor odio nec nisi. Duis sit amet imperdiet ex. Nam euismod
        pulvinar nisi, sit amet pulvinar purus imperdiet at. Praesent dignissim
        malesuada odio vel consectetur. Pellentesque ut orci ut quam pretium
        gravida. Class aptent taciti sociosqu ad litora torquent per conubia
        nostra, per inceptos himenaeos. Vestibulum ante ipsum primis in faucibus
        orci luctus et ultrices posuere cubilia curae;
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eget
        ligula vitae odio interdum pretium non a elit. Nulla tristique, elit
        dictum tempus elementum, mauris sem vestibulum tellus, eu scelerisque
        quam ligula sed ante. Curabitur facilisis dictum ligula vel pretium. Sed
        pretium, ipsum ut ullamcorper molestie, velit nisl porttitor sem, non
        volutpat tortor odio nec nisi. Duis sit amet imperdiet ex. Nam euismod
        pulvinar nisi, sit amet pulvinar purus imperdiet at. Praesent dignissim
        malesuada odio vel consectetur. Pellentesque ut orci ut quam pretium
        gravida. Class aptent taciti sociosqu ad litora torquent per conubia
        nostra, per inceptos himenaeos. Vestibulum ante ipsum primis in faucibus
        orci luctus et ultrices posuere cubilia curae;
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eget
        ligula vitae odio interdum pretium non a elit. Nulla tristique, elit
        dictum tempus elementum, mauris sem vestibulum tellus, eu scelerisque
        quam ligula sed ante. Curabitur facilisis dictum ligula vel pretium. Sed
        pretium, ipsum ut ullamcorper molestie, velit nisl porttitor sem, non
        volutpat tortor odio nec nisi. Duis sit amet imperdiet ex. Nam euismod
        pulvinar nisi, sit amet pulvinar purus imperdiet at. Praesent dignissim
        malesuada odio vel consectetur. Pellentesque ut orci ut quam pretium
        gravida. Class aptent taciti sociosqu ad litora torquent per conubia
        nostra, per inceptos himenaeos. Vestibulum ante ipsum primis in faucibus
        orci luctus et ultrices posuere cubilia curae;
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eget
        ligula vitae odio interdum pretium non a elit. Nulla tristique, elit
        dictum tempus elementum, mauris sem vestibulum tellus, eu scelerisque
        quam ligula sed ante. Curabitur facilisis dictum ligula vel pretium. Sed
        pretium, ipsum ut ullamcorper molestie, velit nisl porttitor sem, non
        volutpat tortor odio nec nisi. Duis sit amet imperdiet ex. Nam euismod
        pulvinar nisi, sit amet pulvinar purus imperdiet at. Praesent dignissim
        malesuada odio vel consectetur. Pellentesque ut orci ut quam pretium
        gravida. Class aptent taciti sociosqu ad litora torquent per conubia
        nostra, per inceptos himenaeos. Vestibulum ante ipsum primis in faucibus
        orci luctus et ultrices posuere cubilia curae;
      </p>
    </div>
  );
}

export default ModalPage;
