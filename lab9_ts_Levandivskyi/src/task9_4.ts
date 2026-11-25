
interface Identifiable {
    id: number | string;
}

class DataStorage<T extends Identifiable> {
    private items: T[] = [];

    // Додавання елемента
    addItem(item: T): void {
        this.items.push(item);
        console.log(`[Storage] Елемент з ID=${item.id} успішно додано.`);
    }

    // Отримання елемента за ID
    getItemById(id: number | string): T | undefined {
        return this.items.find(item => item.id === id);
    }

    // Видалення елемента за ID
    removeItem(id: number | string): boolean {
        const index = this.items.findIndex(item => item.id === id);

        if (index !== -1) {
            this.items.splice(index, 1);
            return true;
        }

        return false;
    }

    // Отримання всіх елементів
    getAllItems(): T[] {
        return [...this.items];
    }
}

// 1. Сховище для користувачів
interface User extends Identifiable {
    name: string;
    email: string;
}

const userStorage = new DataStorage<User>();

userStorage.addItem({
    id: 101,
    name: "Олена",
    email: "olena@example.com"
});

userStorage.addItem({
    id: 102,
    name: "Максим",
    email: "maksim@example.com"
});

const foundUser = userStorage.getItemById(101);
console.log("Знайдений користувач:", foundUser);

// 2. Сховище для налаштувань
interface AppConfig extends Identifiable {
    key: string;
    value: string | boolean | number;
}

const configStorage = new DataStorage<AppConfig>();

configStorage.addItem({
    id: "theme",
    key: "darkMode",
    value: true
});

configStorage.addItem({
    id: "lang",
    key: "language",
    value: "uk-UA"
});

console.log("Всі налаштування:", configStorage.getAllItems());
