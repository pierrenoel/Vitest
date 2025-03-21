import { expect, test, vi } from 'vitest';
import { fetchTodo } from '../src/components/fetchTodo';

// Simuler `fetch()` pour éviter de faire un appel réel
global.fetch = vi.fn();

test("fetchTodo récupère une tâche correctement", async () => {
    // 🔹 ARRANGE → Corriger `mockData`
    const mockData = { userId: 1, id: 1, title: "Test Todo" }; // ✅ Correction ici

    fetch.mockResolvedValue({
        ok: true,
        json: async () => mockData
    });

    // 🔹 ACT → Exécuter la fonction
    const result = await fetchTodo(1);

    // 🔹 ASSERT → Vérifier le contenu et la structure
    expect(result).toEqual(mockData);
    expect(result).toHaveProperty("title"); // Vérifie si la clé "title" existe
    expect(typeof result.title).toBe("string"); // Vérifie le type
});
