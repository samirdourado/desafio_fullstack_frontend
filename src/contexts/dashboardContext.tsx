import api from "@/service/api";
import axios from "axios";
import { parseCookies } from "nookies";
import { ReactNode, useEffect } from "react";

interface Props {
  children: ReactNode;
}

interface iPerson {
    accessToken: string;
    userData: iUserData;
}

export interface iUserData {
    id: string;
    name: string;
    email: string;
    phone: string;
    registredAt: string;    
    Contacts: iContacts
}

export interface iContacts {
  map(arg0: (contact: any) => import("react").JSX.Element): import("react").ReactNode;
  id: string;
  name: string;
  email: string;
  phone: string;
  type: string;
  registredAt: string;
  userId: string;
}



export async function getStaticProps() {
    try {      
      const token = localStorage.getItem('agendaweb');
      
      const config = {
        headers: {
          Authorization: `Bearer ${token}`
        }
      };

      const response = await axios.get(`${api}/users`, config);
      const userData = response.data;

      return {
        props: {
          userData
        }
      };
    } catch (error) {
      console.error(error);
      return {
        props: {
          userData: null
        }
      };
    }
}
