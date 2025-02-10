import Header from "./header/Header"
import Section from "./section/Section"
import Footer from '../../components/Footer'
import { useState,useEffect } from "react"
import axios from "axios"

export default function Index() {
  // const [data, setData] = useState({})

  // const API_BASE_URL = 'https://bcd-cogip.tidjee-dev.eu/api';

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await axios.get(`${API_BASE_URL}/users`,{
  //         headers: {
  //           'Access-Control-Allow-Origin': '*',
  //           'Content-Type': 'application/json',
  //         },
  //       });
  //       setData(response.data);
  //       console.log("Utilisateurs récupérés :", data);
  //     } catch (error) {
  //       console.error("Erreur lors de la récupération des utilisateurs :", error);
  //       throw error;
  //     }
  //   };

  //   fetchData();
  // },)
  return (
    <>
        <Header />
        <Section />
        <Footer />
    </>
  )
}
