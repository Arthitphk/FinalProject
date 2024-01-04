import ResponsiveAppBar from "../Components/ResponsiveAppBar";
import Background from "../Components/Background";
import { Stack } from "@mui/material";
import Heading from "../Components/Heading";


const Home = () => {
  return (
    <>
      <ResponsiveAppBar/>
      <Background/>
      <Heading title="Recommend Courses"/>
    </>
  )
}

export default Home