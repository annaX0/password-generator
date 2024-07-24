import AsyncStorage from '@react-native-async-storage/async-storage'
const useStorage = () => {
    const getItem = async (key: string) => {
        try {
            const password = await AsyncStorage.getItem(key)

            if(password){

                return JSON.parse(password) ;
            }else{
                return []
            }
        } catch (error) {
            console.log('erro ao buscar', error)
            return[]
        }
    }

    const saveItem = async (key: string, value: string) => {
        try {
            let passwords = await getItem(key)
            passwords.push(value)

            await AsyncStorage.setItem(key, JSON.stringify(passwords))
        } catch (error) {
            console.log('erro ao salvar', error)
            return[]
        }
    }
    const removeItem = async (key: string, value: string) => {
        try {
            let passwords = await getItem(key)
            let myPass = passwords.filter((pass: string)=> {
                return (pass != value)
            })

            await AsyncStorage.setItem(key, JSON.stringify(myPass))
            return myPass

        } catch (error) {
            console.log('erro ao remover', error)
            return[]
        }
    }

    return{
        getItem,saveItem,removeItem
    }
}
export default useStorage