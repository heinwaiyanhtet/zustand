import { create } from 'zustand';

const useUserManagementStore = create((set) => ({

    users: [],

    addUser: (newUser: any) => set((state: { users: any; }) => ({ users: [...state.users, newUser] })),

    updateUser: (updatedUser: { id: any; }) => set((state: { users: any[]; }) => ({
        users: state.users.map((user: { id: any; }) =>
            user.id === updatedUser.id ? updatedUser : user
        ),
    })),

    deleteUser: (userId: any) => set((state: { users: any[]; }) => ({
        users: state.users.filter((user: { id: any; }) => user.id !== userId),
    })),


    setUsers: (userList: any) => set({ users: userList }),


}));

export default useUserManagementStore;
