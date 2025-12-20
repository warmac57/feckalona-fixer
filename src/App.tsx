import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import SavingEnergy from "./pages/SavingEnergy";
import WaysToSave from "./pages/WaysToSave";
import Rebates from "./pages/Rebates";
import Grants from "./pages/Grants";
import GreenPower from "./pages/GreenPower";
import CustomerGeneration from "./pages/CustomerGeneration";
import SafetyOutages from "./pages/SafetyOutages";
import Services from "./pages/Services";
import News from "./pages/News";
import About from "./pages/About";
import Contact from "./pages/Contact";
import History from "./pages/History";
import Frytown from "./pages/Frytown";
import Blog from "./pages/Blog";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/saving-energy" element={<SavingEnergy />} />
          <Route path="/ways-to-save" element={<WaysToSave />} />
          <Route path="/rebates" element={<Rebates />} />
          <Route path="/grants" element={<Grants />} />
          <Route path="/green-power" element={<GreenPower />} />
          <Route path="/customer-generation" element={<CustomerGeneration />} />
          <Route path="/safety-outages" element={<SafetyOutages />} />
          <Route path="/services" element={<Services />} />
          <Route path="/news" element={<News />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/history" element={<History />} />
          <Route path="/frytown" element={<Frytown />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
