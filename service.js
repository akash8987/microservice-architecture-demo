class UserService {
    constructor() {
        this.users = [];
    }

    createUser(name) {
        const user = { id: this.users.length + 1, name };
        this.users.push(user);
        return user;
    }

    getUsers() {
        return this.users;
    }
}

const userService = new UserService();
userService.createUser("Alice");
userService.getUsers();
