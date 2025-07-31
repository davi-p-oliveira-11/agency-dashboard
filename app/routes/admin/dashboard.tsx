import Header from "components/Header"

const Dashboard = () => {
  const user = { name: 'John '}

  return (
     <main className="dashboard wrapper">
       <Header
         title={`Welcome ${user?.name ?? 'Guest'}`}
         description="Track activity, trends and popular destinations in real time"
       />

       Dashboards Page Content
     </main>
  )
}

export default Dashboard