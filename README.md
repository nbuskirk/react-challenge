#### Installation

Install with npm i

#### Starting Vite

Start the dev server with npm run dev by default it will be located on https://localhost:5173

#### Guidelines

You may install or add any packages, files, or folders which help accomplish the accompanying requirements:

#### Requirements

- Use TypeScript for the project
- Use Material UI for the iconography
- Fetch data from the following API: https://pokeapi.co/docs/v2
- Refer to the necessary documentation there
- Using the results from the pokemon API, draw a table with the pokemon names.

![alt text](images/list-view.png 'Pokemon List View')

- Limit the number of rows per page to 5
- Make pagination buttons work, this includes showing page number of max pages

  - First page will disable the previous page button and skip to first page button
  - Last page will disable the next page button and skip to last page button
  - Next and previous page buttons will change page by 1

- Selecting (Clicking on) a pokemon from the table should swap the list view with another table showing the abilities for this specific pokemon.

![alt text](images/details-view.png 'Pokemon List View')

- This table should have a link back to the list view
- CSS for the tables should match the mockups
