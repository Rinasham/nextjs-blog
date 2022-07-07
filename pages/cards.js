import Card from "../components/Card";
import Layout from "../components/Layout";

const teamD = [
  { name: "Terrelien", position: "Team Leader" },
  { name: "Nishi", position: "Infra" },
  { name: "Kobakichi", position: "Client Side" },
  { name: "Dai", position: "Server Side" },
  { name: "Rina", position: "Design" },
];

// Card practice
export default function cards() {
  return (
    <Layout title="Blog">
      <div className="flex flex-wrap gap-4 ">
        {teamD.map((member) => {
          return <Card key={member.name} member={member} />;
        })}
      </div>
    </Layout>
  );
}
