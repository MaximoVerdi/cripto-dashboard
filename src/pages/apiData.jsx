import "boxicons/css/boxicons.min.css";
import {
  Header,
  HeroSection,
  Bento,
  Coins,
  InfoSection,
  FAQ,
  OrdersCrypto,
  ThemeProvider
} from "../components/components.jsx";
import { DashboardLayout } from "../components/dashboardLayout";
import "../components/index.css";

const ApiData = () => {
  return (
    <>
      <ThemeProvider >
        <DashboardLayout />
      </ThemeProvider>
    </>
  );
};

export { ApiData };
