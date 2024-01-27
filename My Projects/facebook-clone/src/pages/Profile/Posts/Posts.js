import Card from "../../../shared/components/Card";
import "./Posts.css";

function Posts() {
  const leftCards = (
    <div className="left-cards">
      <Card className="p-[15px]">
        <h1>Intro</h1>
        <button className="grey-button">Add Bio</button>
        <button className="grey-button">Edit details</button>
        <button className="grey-button">Add Featured</button>
      </Card>
      <Card className="p-[15px] flex flex-row justify-between items-center">
        <h1>Photos</h1>
        <button className="transparent-button">See All Photos</button>
      </Card>
      <Card className="p-[15px] flex flex-row justify-between items-center">
        <h1>Friends</h1>
        <button className="transparent-button">See All Friends</button>
      </Card>
    </div>
  );

  const rightCards = (
    <div className="right-cards">
      <Card className="p-[15px]">Right card</Card>
      <Card className="p-[15px]">Another Right card!</Card>
    </div>
  );

  return (
    <div className="posts">
      {leftCards}
      {rightCards}
    </div>
  );
}

export default Posts;
