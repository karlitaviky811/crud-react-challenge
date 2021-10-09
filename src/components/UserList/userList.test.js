import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import UserList from "./UserList";

test('renders content', () => {

const component = render(<UserList />)

component.getByText('Name');
})

// describe("Render UserList", () => {
//   beforeEach(() =>
//     render(
//       <UserList />
//     )
//   );

//   it("Render Header Name Table", () => {
//     expect(screen.getByText('Name')).toBeInTheDocument();
//   });

//   it("Render Header Email Table", () => {
//     expect(screen.getByText('Email')).toBeInTheDocument();
//   });

//   it("Render Header Phone Table", () => {
//     expect(screen.getByText('Phone')).toBeInTheDocument();
//   });

//   it("Render Header Country Table", () => {
//     expect(screen.getByText('Country')).toBeInTheDocument();
//   });
  
// });