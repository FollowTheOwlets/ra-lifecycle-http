import { INote } from "../models/models";


export default class Controller {

    static async get() {
        const response = await fetch("http://localhost:7070/notes");
        return await response.json() as INote[];
    }

    static async append(content: string) {
        const response = await fetch("http://localhost:7070/notes", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify({ id: 0, content })
        });
        return await Controller.get();
    }

    static async delete(id: number) {
        const response = await fetch(`http://localhost:7070/notes/${id}`, {
            method: 'DELETE'
        });
        return await Controller.get();
    }

    static async update() {
        return await Controller.get();
    }
}