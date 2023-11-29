import React from "react";
import Home from "./pages/Home";
import InsuranceCompany from "./pages/ServiceProvider/CustomBroker/InsuranceCompany";
import CustomBrokerAccount from "./pages/ServiceProvider/CustomBroker/customBrokerAccount";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Faq from "./pages/common/Faq";
import Blog from "./pages/common/Blog";
import About from "./pages/common/About";
import Service from "./pages/common/Service";
import Quote from "./pages/common/Quote";
import PAH from "./pages/common/PAH";
import WareHouse from "./pages/common/Warehouse";
import JobCenter from "./pages/common/JobCenter";
import ServiceProviderRole from "./pages/ServiceProvider/ServiceProviderRole";
import IndDriverAccount from "./pages/ServiceProvider/IndividualDriver/indDriverAccount";
import IndDriverAccount2 from "./pages/ServiceProvider/IndividualDriver/indDriverAccount2";
import IndDriverAccount3 from "./pages/ServiceProvider/IndividualDriver/indDriverAccount3";
import VechicleDetails from "./pages/ServiceProvider/IndividualDriver/vechicleDetails";
import CompanyInfo from "./pages/ServiceProvider/CustomBroker/companyInfo";
import CompanyInfo2 from "./pages/ServiceProvider/CustomBroker/companyInfo2";
import CustomsBroker from "./pages/ServiceProvider/CustomBroker/CustomsBroker";
import CustomsBroker2 from "./pages/ServiceProvider/CustomBroker/CustomsBroker2";
import CustomerRole from "./pages/BecomeCustomer/CustomerRole";
import OwnerCreateAccount from "./pages/BecomeCustomer/BusinessOwner/OwnerCreateAccount";
import OwnerCreateAccount2 from "./pages/BecomeCustomer/BusinessOwner/OwnerCreateAccount2";
import NonOwnerCreateAccount from "./pages/BecomeCustomer/NonBusinessOwner/NonOwnerCreateAccount";
import NonOwnerCreateAccount2 from "./pages/BecomeCustomer/NonBusinessOwner/NonOwnerCreateAccount2";
import PaymentMode from "./pages/BecomeCustomer/NonBusinessOwner/PaymentMode";
import { useRoutes } from "react-router-dom";
import VechicleDetails2 from "./pages/ServiceProvider/IndividualDriver/vechicleDetails2";
import RoadFrieghtAccount from "./pages/ServiceProvider/RoadFrieght/RoadFrieghtAccount";
import CompanyAccount from "./pages/ServiceProvider/RoadFrieght/CompanyAccount";
import CompanyAccount2 from "./pages/ServiceProvider/RoadFrieght/CompanyAccount2";
import CompanyAccount3 from "./pages/ServiceProvider/RoadFrieght/CompanyAccount3";
import CompanyAccount4 from "./pages/ServiceProvider/RoadFrieght/CompanyAccount4";
import CompanyAccount5 from "./pages/ServiceProvider/RoadFrieght/CompanyAccount5";
import AirFreightPage from "./pages/ServiceProvider/RoadFrieght/AirFreight/AirFreightPage";
import RailwayOperator from "./pages/ServiceProvider/RoadFrieght/RailwayOperator/RailwayOperator";
import WareHousePage from "./pages/ServiceProvider/RoadFrieght/WareHouse/WareHousePage";
import Logistics from "./pages/ServiceProvider/RoadFrieght/4PL/Logistics";
import SeaFreight from "./pages/ServiceProvider/RoadFrieght/SeaFreight/SeaFreight";
import RoadFreightPage from "./pages/ServiceProvider/RoadFrieght/Road-Freight/RoadFreightPage";

const Routes = () => {
  const routes = useRoutes([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/signup",
      element: <Signup />,
    },
    {
      path: "/faq",
      element: <Faq />,
    },
    {
      path: "/blog",
      element: <Blog />,
    },
    {
      path: "/about",
      element: <About />,
    },
    {
      path: "/service",
      element: <Service />,
    },
    {
      path: "/quote",
      element: <Quote />,
    },
    {
      path: "/pah",
      element: <PAH />,
    },
    {
      path: "/warehouse",
      element: <WareHouse />,
    },
    {
      path: "job-center",
      element: <JobCenter />,
    },
    {
      path: "/signup/customer",
      element: <CustomerRole />,
    },
    {
      path: "/signup/serviceProvider",
      element: <ServiceProviderRole />,
    },
    {
      path: "/signup/RoadFrieght/RoadFrieghtAccount",
      element: <RoadFrieghtAccount />,
    },
    {
      path: "/signup/RoadFrieght/companyAccount",
      element: <CompanyAccount />,
    },
    {
      path: "/signup/RoadFrieght/companyAccount2",
      element: <CompanyAccount2 />,
    },
    {
      path: "/signup/RoadFrieght/companyAccount3",
      element: <CompanyAccount3 />,
    },
    {
      path: "/signup/RoadFrieght/companyAccount4",
      element: <CompanyAccount4 />,
    },
    {
      path: "/signup/RoadFrieght/companyAccount5",
      element: <CompanyAccount5 />,
    },
    {
      path: "/signup/RoadFrieght/Airfreight",
      element: <AirFreightPage />,
    },
    {
      path: "/signup/RoadFrieght/Railway-operator",
      element: <RailwayOperator />,
    },
    {
      path: "/signup/RoadFrieght/Road-Freight",
      element: <RoadFreightPage />,
    },
    {
      path: "/signup/RoadFrieght/Warehouse",
      element: <WareHousePage />,
    },
    {
      path: "/signup/RoadFrieght/Sea-Freight",
      element: <SeaFreight />,
    },
    {
      path: "/signup/RoadFrieght/4PL",
      element: <Logistics />,
    },
    {
      path: "/signup/individualDriver/indDriverAccount",
      element: <IndDriverAccount />,
    },
    {
      path: "/signup/individualDriver/indDriverAccount2",
      element: <IndDriverAccount2 />,
    },
    {
      path: "/signup/individualDriver/indDriverAccount3",
      element: <IndDriverAccount3 />,
    },
    {
      path: "/signup/individualDriver/vechicleDetails",
      element: <VechicleDetails />,
    },
    {
      path: "/signup/individualDriver/vechicleDetails2",
      element: <VechicleDetails2 />,
    },
    {
      path: "/signup/cutomBroker/customBrokerAccount",
      element: <CustomBrokerAccount />,
    },
    {
      path: "/signup/cutomBroker/insurance-Company",
      element: <InsuranceCompany />,
    },
    {
      path: "/signup/cutomBroker/companyInfo",
      element: <CompanyInfo />,
    },
    {
      path: "/signup/cutomBroker/companyInfo2",
      element: <CompanyInfo2 />,
    },
    {
      path: "/signup/cutomBroker/insurance-comapny",
      element: <InsuranceCompany />,
    },
    {
      path: "/signup/cutomBroker/customs-broker",
      element: <CustomsBroker />,
    },
    {
      path: "/signup/cutomBroker/customs-broker2",
      element: <CustomsBroker2 />,
    },
    {
      path: "/signup/owner/createAccount",
      element: <OwnerCreateAccount />,
    },
    {
      path: "/signup/owner/createAccount2",
      element: <OwnerCreateAccount2 />,
    },
    {
      path: "/signup/non-owner/createAccount",
      element: <NonOwnerCreateAccount />,
    },
    {
      path: "/signup/non-owner/createAccount2",
      element: <NonOwnerCreateAccount2 />,
    },
    {
      path: "/signup/non-owner/payment-mode",
      element: <PaymentMode />,
    },
  ]);

  return routes;
};

export default Routes;
