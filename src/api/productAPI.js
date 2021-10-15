import Instance from "./instance";


export const getAll = () => {
    const url = "/products"
    return Instance.get(url)
}