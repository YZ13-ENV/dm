import { api_host } from "@/const/host";
import { authorizationHeader } from "api";

const prefix = `${api_host}/default`;
export type Project = {
  name: string;
  createAt: number;
  iconUrl: string;
  access: {
    desktop: boolean;
    tablet: boolean;
    mobile: boolean;
  };
  description?: string;
  updateAt?: number;
  theme?: {
    dark: string;
    light: string;
  };
};
export type ProjectScratch = {
  name: string;
  iconUrl: string;
  access: {
    desktop: boolean;
    tablet: boolean;
    mobile: boolean;
  };
  description?: string;
};
export type DocProject = { doc_id: string } & Project;
export const default_api = {
  all: async (): Promise<DocProject[]> => {
    try {
      const headers = new Headers();
      const authHeader = authorizationHeader();
      headers.append("authorization", authHeader || "");
      const url = prefix + "/projects";
      const res = await fetch(url, { method: "GET", headers: headers });
      if (res.ok) return await res.json();
      return [];
    } catch (e) {
      return [];
    }
  },
};
