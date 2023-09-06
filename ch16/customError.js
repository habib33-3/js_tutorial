class CustomErrors extends Error {
  constructor(message) {
    super(message);

    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, CustomErrors);
    }
  }
}

try {
  console.log(1);
  throw new Error("error");
} catch(e) {
  console.log(e.message);
} finally {
  console.log("finally");
}
