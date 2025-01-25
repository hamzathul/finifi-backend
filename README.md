## Installation

1.Clone this Repository

```bash
  git clone https://github.com/hamzathul/finifi-backend.git
```
2.Navigate to the project folder:
```bash
  cd finifi-backend
```
To run this project, add the following environment variable to your .env file in the root directory of this project.
<br>
So, create a '.env' file, and add the following:



`MONGO_URI = <your-mongodb-uri>`




3.Install dependencies for the backend and run backend server:
```bash
  npm install
  npm run dev
```
The backend will run on http://localhost:5000.

<br>

Note: Update the CORS origin in the server.js file to match the frontend server's URL.
