# Kakao Chatbot Builder

A React-based template builder that allows you to create and preview Kakao Chatbot message templates in real-time. This project supports various message types and provides a side-by-side view for JSON editing and UI rendering.

---

## Features

- **Template Selection**:  
  Choose from pre-defined templates like `simpleText`, `simpleImage`, `basicCard`, `listCard`, `itemCard`, and `commerceCard`. Use example buttons to quickly load JSON templates for modification.

- **Real-Time UI Preview**:  
  Automatically render templates based on the JSON input and view them in a side-by-side layout.

- **Two-Way Data Binding**:  
  Update JSON directly in the editor or modify template fields in the UI preview. Both JSON and UI stay synchronized.

- **Interactive Fields**:  
  Modify template fields such as `title`, `description`, `imageUrl`, and more directly in the UI. Dynamically update nested fields like `header.title` or `items[0].title`.

---

## Supported Templates

### 1. Simple Text
Displays plain text messages.

- **JSON Example**:
  ```json
  {
    "type": "simpleText",
    "text": "Hello, Kakao Work!"
  }
