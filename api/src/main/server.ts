import { server } from "./application";

(async () => {
  try {
    server.listen(3333, async () => {
      console.log("Running on port: 3333");
    });
  } catch (error) {
    console.log(error);
  }
})();
