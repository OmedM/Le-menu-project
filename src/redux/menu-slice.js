import { createSlice } from '@reduxjs/toolkit';

const menuSlice = createSlice({
    name: 'menu',
    initialState: {
        menuList:[
            {
                id: 0, name: "Coffee Shop", description: "Coffee of various types, notably espresso, latte, and cappuccino.", url: "https://images.unsplash.com/photo-1529676468696-f3a47aba7d5d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
            },
            {
                id: 1, name: "Italian Restaurant", description: "Italian restaurants are stylish and elegant high-class establishments.", url: "https://images.unsplash.com/photo-1533777324565-a040eb52facd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1672&q=80"
            },
            {
                id: 2, name: "French Restaurant", description: "French dishes often use simple ingredients transformed by artful techniques.", url: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
            },
        ]
    },
    reducers: {
        addMenu(state, action) {
            const newMenu = action.payload;

            state.menuList.push({
                name: newMenu.name,
                description: newMenu.description,
                url: newMenu.url
            })
        }
    }
});

export const menuActions = menuSlice.actions;

export default menuSlice;