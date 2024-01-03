export const docs = (path: string) => `/docs/${path}`

export const parseDocId = (path: string[]) => {
    const joined = path.join('/')
    return {
        root: path[0],
        sideValue: joined
    }
}