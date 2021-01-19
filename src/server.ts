import { app } from "./app";

const PORT = process.env.PORT || 9998;

// Server Startup
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
