# YouTube Video Data - API

## Description
This application provides endpoints to download YouTube video thumbnails and video data.

## Installation
To install dependencies, run:
```sh
bun install
```

## Running the Application
To run the application, use:
```sh
bun run dev
```

Then open [http://localhost:3000](http://localhost:3000) in your browser.

## Endpoints
### Download Thumbnail
- **URL:** `/download-thumbnail/:videoId`
- **Method:** GET
- **Description:** Downloads the thumbnail of the specified YouTube video.
- **Response:**
  ```json
  {
    "ok": true,
    "message": "File downloaded successfully"
  }
  ```

### Download Video Data
- **URL:** `/download-video-data/:videoId`
- **Method:** GET
- **Description:** Downloads the HTML content of the specified YouTube video and extracts the title, channel name, and view count.
- **Response:**
  ```json
  {
    "ok": true,
    "message": "File HTML downloaded successfully"
  }
  ```

## License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
