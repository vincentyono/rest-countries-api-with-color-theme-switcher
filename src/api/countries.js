export const getCountries = async () => {
    try {
        const response = await fetch("all")
        
        if(response.ok) {
            const data = await response.json();
            return data;
        }

        throw new Error(response.status);
    } catch (error) {
        return error;
    }
}