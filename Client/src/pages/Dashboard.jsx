import { useEffect, useState } from "react";
import { dummyAdminDashboardData } from "../assets/assets";
import Loading from "../components/Loading";
import EmployeeDashboard from "../components/EmployeeDashboard";
import AdminDashboard from "../components/AdminDashboard";

const Dashboard = () => {
  const [data, setData] = useState(null);
  const [loading, setloading] = useState(true);

  useEffect(() => {
    setData(dummyAdminDashboardData);
    setTimeout(() => {
      setloading(false);
    }, 1000);
  }, []);

  if (loading) return <Loading />;
  if (!data)
    return (
      <p className="text-center text-slate-500 py-12">
        Faild to load Dashboard!
      </p>
    );

  if (data.role === "ADMIN") {
    return <AdminDashboard data={data} />;
  } else {
    return <EmployeeDashboard data={data} />;
  }

  return <div>Dashbord</div>;
};

export default Dashboard;
