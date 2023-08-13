# mmmdb

An ongoing library of movies watched with my son.

---
#### 13/08/23 update

Currently built using a standard index.html and style.css file setup. I have manually downloaded, resized and optimised the images for the page, from IMDB. I have also manually created the JSON file for the data. I am using Tailwind CSS to style the page, using the following command in the terminal to optimise the outputted CSS file:

` npx tailwindcss -i ./styles.css -o ./styles/style.css --watch`

As this is a simple .html page I am using the Live Server extension in VS Code to run the page locally.

---

#### Future Plans

- Use the IMDB API to automatically pull in the images, titles and any other future information that may be used as this is expanded. This will also avoid overheads of having to manually store the images and JSON file.
- Consider converting to a NextJS project