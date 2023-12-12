import React, { useState, useEffect } from "react";
import { Button, TextareaAutosize } from "@mui/material";
import { Container, Typography, Paper } from "@material-ui/core";

export default function WordCloudPage() {
  const [inputText, setInputText] = useState("");

  useEffect(() => {
    // Dynamically load the wordcloud2.js script
    const script = document.createElement("script");
    script.src =
      "https://cdnjs.cloudflare.com/ajax/libs/wordcloud2.js/1.1.0/wordcloud2.min.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Remove the script when the component unmounts
      document.body.removeChild(script);
    };
  }, []);

  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };

  const generateWordCloud = () => {
    const ignoreWords = [
      "about",
      "which",
      "and",
      "there",
      "where",
      "short",
      "things",
    ];
    const text = inputText.toLowerCase().replace(/[^a-z0-9\s]/gi, " ");
    const wordCounts = {};
    const words = text.split(/\s+/);

    words.forEach((word) => {
      if (word.length >= 5 && !ignoreWords.includes(word)) {
        wordCounts[word] = (wordCounts[word] || 0) + 1;
      }
    });

    const wordList = Object.entries(wordCounts);

    if (window.WordCloud) {
      window.WordCloud(document.getElementById("wordCloudCanvas"), {
        list: wordList,
        gridSize: 16,
        weightFactor: 10,
        minSize: 0,
      });
    }
  };

  return (
    <div>
      <Container>
        <Paper style={{ padding: "20px", marginTop: "20px" }}>
          <Typography variant="h2" component="div">
            Word Cloud Generator
          </Typography>

          {/* How It Works Section */}
          <Typography
            variant="body1"
            component="div"
            style={{ marginBottom: "20px" }}
          >
            <h3>How It Works</h3>
            <p>
              This tool generates a word cloud from the text you input. Common
              words like 'and', 'the', 'about', etc., are ignored to highlight
              the most significant words. Words are sized based on their
              frequency in your text.
            </p>
          </Typography>

          {/* How to Use Section */}
          <Typography
            variant="body1"
            component="div"
            style={{ marginBottom: "20px" }}
          >
            <h3>How to Use</h3>
            <p>
              Simply enter your text into the box below and click 'Generate Word
              Cloud'. Your word cloud will appear on the canvas. Words with five
              or more characters and not in the common words list will be
              included. To save your word cloud, right-click on the canvas and
              select 'Save image as...'. Choose the desired location on your
              computer and save the image in your preferred format.
            </p>
          </Typography>

          {/* Generate Word Cloud Section */}
          <Typography
            variant="body1"
            component="div"
            style={{ marginBottom: "20px" }}
          >
            <Button variant="contained" onClick={generateWordCloud}>
              Generate Word Cloud
            </Button>
            <TextareaAutosize
              aria-label="input text"
              minRows={4}
              maxRows={4}
              placeholder="Enter text here"
              style={{ width: "100%", height: 150 }}
              value={inputText}
              onChange={handleInputChange}
            />
          </Typography>

          {/* Word Cloud Display */}
          <canvas id="wordCloudCanvas" width="800" height="600"></canvas>
        </Paper>
      </Container>
    </div>
  );
}
