export const fetchTodo = async (id) => {
    try {
        let response = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);
        if (!response.ok) throw new Error(`Erreur HTTP ${response.status}`);

        let data = await response.json();
        return data;
    } catch (error) {
        console.error("Erreur lors de la récupération des données :", error);
        return null;
    }
};
