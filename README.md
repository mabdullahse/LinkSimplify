 

# Node.js URL Shortener

## About

Node.js URL Shortener is a simple yet powerful tool for creating and managing short URLs. Built with Node.js and leveraging JWT for secure user authentication, this application uses Mongoose for efficient MongoDB data handling. It's designed for ease of use, providing a quick way to shorten long URLs.

## Features

- Secure user registration and login using JWT (JSON Web Tokens)
- Ability to shorten URLs to more manageable lengths
- MongoDB database integration with Mongoose for storing user and URL data
- Simple and clean user interface for easy interaction

## Getting Started

### Prerequisites

- Node.js
- MongoDB
- npm (Node package manager)

### Installation

1. **Clone the repository**

   ```sh
   git clone https://github.com/your-username/nodejs-url-shortener.git
   ```

2. **Navigate to the project directory**

   ```sh
   cd nodejs-url-shortener
   ```

3. **Install dependencies**

   ```sh
   npm install
   ```

4. **Set up environment variables**

   Create a `.env` file in the root directory with the following content:

   ```
   DATABASE_URL=mongodb://localhost:27017/yourShortUrlDB
   PORT=3000
   JWT_SECRET=XXXXXX
   ```

5. **Run the application**

   ```sh
   npm start
   ```

   The server will start on [http://localhost:3000](http://localhost:3000).

## Usage

After launching the application, users can register and log in to create and manage their short URLs. The interface provides a straightforward way to shorten new URLs and track existing ones.

## Contributing

Contributions to improve Node.js URL Shortener are welcomed. Please follow these steps to contribute:

1. Fork the repository
2. Create a new branch (`git checkout -b feature/main`)
3. Commit your changes (`git commit -m 'Add some main'`)
4. Push to the branch (`git push origin feature/main`)
5. Open a pull request

## License

This project is licensed under the MIT License - see the `LICENSE` file for details.

## Contact

Email - mabdullah.se@gmail.com

Project Link: [https://github.com/mabdullahse/LinkSimplify](https://github.com/mabdullahse/LinkSimplify)

---

Remember to replace placeholders like `your-username`, `yourShortUrlDB`, `your_jwt_secret`, etc., with the actual details relevant to your project.
