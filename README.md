# Kakao Chatbot Builder

A React-based template builder that allows you to create and preview Kakao Chatbot message templates in real-time. This project supports various message types and provides a side-by-side view for JSON editing and UI rendering.

---
## Table of Contents
- [Features](#features)
- [Supported Templates](#supported-templates)
  - [Simple Text](#1-simple-text)
  - [Simple Image](#2-simple-image)
  - [Basic Card](#3-basic-card)
  - [List Card](#4-list-card)
  - [Item Card](#5-item-card)
  - [Commerce Card](#6-commerce-card)
  - [Text Card](#7-text-card)
- [How to Use](#how-to-use)
- [Getting Started](#getting-started)
- [Contributing](#contributing)
- [License](#license)

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


### 2. Simple Image
Displays an image with optional alt text.

- **JSON Example**:
  ```json
  {
    "type": "simpleImage",
    "imageUrl": "https://via.placeholder.com/150",
    "altText": "Example Image"
  }

### 3. Basic Card
Displays a card with a title, description, and image.

- **JSON Example**:
  ```json
  {
    "type": "basicCard",
    "title": "Card Title",
    "description": "Card Description",
    "thumbnail": {
      "imageUrl": "https://via.placeholder.com/150"
    }
  }
  
### 4. List Card
Displays a list of items with titles, descriptions, and images.

- **JSON Example**:
  ```json
  {
    "type": "listCard",
    "header": {
      "title": "List Card Header"
    },
    "items": [
      {
        "title": "Item 1",
        "description": "Item 1 Description",
        "imageUrl": "https://via.placeholder.com/150"
      },
      {
        "title": "Item 2",
        "description": "Item 2 Description",
        "imageUrl": "https://via.placeholder.com/150"
      }
    ]
  }
  
### 5. Item Card
Displays a single item with a title, description, and image.

- **JSON Example**:
  ```json
  {
    "type": "itemCard",
    "item": {
      "title": "Item Title",
      "description": "Item Description",
      "imageUrl": "https://via.placeholder.com/150"
    }
  }
  
### 6. Commerce Card
Displays a commerce item with a title, description, image, and price.

- **JSON Example**:
  ```json
  {
    "type": "commerceCard",
    "commerce": {
      "productName": "Product Name",
      "description": "Product Description",
      "imageUrl": "https://via.placeholder.com/150",
      "currency": "KRW",
      "price": 10000
    }
  }
  

### 7. Text Card
Displays a card with a title and text content.

- **JSON Example**:
  ```json
  {
    "type": "textCard",
    "title": "Text Card Title",
    "description": "Text Card Description"
  }
---


## How to Use
1. **Select a Template**:
  - Click on the buttons for `simpleText`, `basicCard`, `listCard`, etc., to load a corresponding JSON template.
2. **Edit JSON**:
  - Modify the JSON in the text editor or use the UI fields to adjust the data.
3. **Preview Changes**:
  - The UI Preview section updates in real-time as you edit the JSON.

## Getting Started

### Prerequisites
- Node.js and npm installed on your system.

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/your-repo/kakao-chatbot-builder.git
   cd kakao-chatbot-builder
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

4. Open your browser and navigate to:
   ```
   http://localhost:3000
   ```
---

## Contributing

Contributions are welcome! To contribute:
1. Fork the repository.
2. Create a new feature branch:
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add your message here"
   ```
4. Push the branch and open a pull request:
   ```bash
   git push origin feature/your-feature-name
   ```

---

## License
This project is licensed under the MIT License. See the [LICENSE](LICENSE.txt) file for details.

---

## Demo
![Kakao Chatbot Builder Preview](https://via.placeholder.com/800x400)


## Screenshots


---
## Contact
For any inquiries or support, contact:
- Email: jhshim0131@gmail.com
- GitHub: [My Github](https://github.com/jhshim0131)
