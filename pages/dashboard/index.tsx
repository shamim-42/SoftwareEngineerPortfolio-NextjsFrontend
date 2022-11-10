import DashboardLayout from '@/components/layouts/dasboard-layout';

const Dashboard = () => {
  return (
    <DashboardLayout>
      <div className="flex h-full w-full items-center justify-center">
        <h1 className="text-center text-4xl font-bold">Welcome to Dashboard</h1>
      </div>
    </DashboardLayout>
  );
};

Dashboard.authenticationRequired = true;

export default Dashboard;
