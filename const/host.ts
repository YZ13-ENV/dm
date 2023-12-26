export const api_host: string = 
// 'https://www.api.v2.darkmaterial.space'
process.env.NODE_ENV === 'development' 
? 'http://localhost:8000' 
: 'https://www.api.v2.darkmaterial.space'
export const yz13_host: string = 'https://www.yz13.darkmaterial.space'
export const dm_family_host: string = 'https://www.darkmaterial.space'
export const notes_host: string = 'https://www.notes.darkmaterial.space'