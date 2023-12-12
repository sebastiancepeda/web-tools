# WordCloud React Component

## Overview
The `WordCloudPage` component is a React-based application designed for dynamic word cloud generation from user-input text. It emphasizes significant words by filtering out common words and sizes the remaining words based on their frequency.
You can use it here: https://educatbild.com/tools/word-cloud-generation

## Features
- **Dynamic Word Cloud Generation:** Creates word clouds from the text input by the user.
- **Interactive User Input Area:** Provides a text area for users to input their text.
- **Common Words Exclusion:** Filters out common English words to emphasize more significant words.
- **Frequency-based Sizing:** Sizes words based on their frequency in the input text.
- **Image Saving Option:** Allows users to save the generated word cloud as an image.

## Installation
1. **Prerequisites:**
   Ensure you have Node.js and npm installed.
2. **Clone the Repository:**
   Clone the repository containing the `WordCloudPage` component.
3. **Install Dependencies:**
   Navigate to the repository directory and run `npm install` to install dependencies.

## Usage
1. **Start the Application:**
   Run `npm start` from the project directory. This should launch the application in your web browser.
2. **Input Text:**
   Enter your text in the text area provided.
3. **Generate Word Cloud:**
   Click the 'Generate Word Cloud' button to create a word cloud from your input.
4. **View and Save Word Cloud:**
   The generated word cloud will be displayed on a canvas. To save, right-click on the canvas and choose 'Save image as...', then select the save location and format.

## Dependencies
- `react`, `react-dom` - For the React framework.
- `@mui/material`, `@material-ui/core` - For UI components.
- `wordcloud2.js` - For word cloud generation.

## Additional Notes
- The component dynamically loads `wordcloud2.js` when rendered.
- Includes a cleanup function to remove the script when the component unmounts, preventing memory leaks.
- Utilizes React hooks (`useState`, `useEffect`) for state management and lifecycle events.

## Contributing
1. **Fork the Repository:**
   Fork the repository to your own GitHub account.
2. **Create a Feature Branch:**
   Create a new branch for your feature or bug fix.
3. **Implement Changes:**
   Add your feature or bug fix.
4. **Test Your Changes:**
   Write and run tests to ensure functionality.
5. **Commit and Push:**
   Commit your changes and push them to your GitHub account.
6. **Create a Pull Request:**
   Open a pull request for your changes in the original repository.

---
For more detailed documentation on React or the libraries used, please refer to their respective documentation.
