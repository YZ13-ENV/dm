import { DocData } from "api"

export type Team = {
  name: string
  bio: string
  photoURL?: string
  founder: string
  members: string[] // userId[]
  createdAt: number
  updatedAt?: number
  links?: {
    web?: string
  }
}

export type TeamScratch = {
  name: string
  bio: string
  photoURL?: string
  founder: string
  members: string[] // userId[]
}

export type DocTeam = DocData<Team>