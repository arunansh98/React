import Accordion from "../components/Accordion";

function AccordionPage() {
  const items = [
    {
      id: "sh11",
      label: "Can I Use React on a project ?",
      content: "You can use React on any project you want",
    },
    {
      id: "df123",
      label: "Can I Use JS on a project ?",
      content: "You can use JS on any project you want",
    },
    {
      id: "jkshf4",
      label: "Can I Use CSS on a project ?",
      content: "You can use CSS on any project you want",
    },
  ];
  return <Accordion items={items} />;
}
export default AccordionPage;
