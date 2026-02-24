import {render, screen} from "@testing-library/react";
import Counter from "./Counter";
import Alert from "./Alert";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";

const mockStore = configureStore({
    reducer: {
        counter : () => ({value : 0})
    }
});

test("test alert component", async () => {
    render(<Alert/>);
    expect(screen.getByText("Alert count !")).toBeInTheDocument();
});

test("test counter component", async () => {
    render(
        <Provider store={mockStore}>
            <Counter/>
        </Provider>
    );
    expect(screen.getByText("Count is 0")).toBeInTheDocument();
})