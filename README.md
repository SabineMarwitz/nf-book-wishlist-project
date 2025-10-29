# Project: Book Wishlist

This is a TypeScript React Exercise from the AWD training (NF).

## Objective:

Build a small React + TypeScript app where users can manage a wishlist of books.

## Core Requirements

### 1. Data Model

Define a Book type that includes:

- id (number)
- title (string)
- author (string)
- read (boolean)

### 2. App Component

Create the main App component that:

- Initializes a list of books in state
- Provides functionality to:
  - Add a book
  - Mark a book as read/unread
  - Remove a book

### 3. Book Form Component

Create a form component that:

- Accepts input for title and author
- On submit, calls a callback (from parent) to add a new book
- Validates that neither field is empty before submission

### 4. Book Item Component

Create a component that:

- Displays the book’s title and author
- Shows a checkbox for toggling the “read” status
- Shows a delete button to remove the book

## Bonus Tasks (Optional, Intermediate)

### 5. Filter Books

- Add a dropdown or buttons to filter the book list by:
  - All
  - Read
  - Unread

### 6. Styling (Optional)

- Use Tailwind CSS, CSS Modules, or Styled Components
- Highlight read books with strikethrough or dimmed style
