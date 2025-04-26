function handleErrors() {
  // 1. ReferenceError (accessing a variable that doesn't exist)
  try {
    console.log(notDefinedVariable);
  } catch (error) {
    if (error instanceof ReferenceError) {
      console.log("ReferenceError:", error.message);
    }
  }

  // 2. TypeError (calling a non-function or wrong type usage)
  try {
    let num = 5;
    num(); // num is not a function
  } catch (error) {
    if (error instanceof TypeError) {
      console.log("TypeError:", error.message);
    }
  }

  // 3. SyntaxError (usually happens during eval or parsing code strings)
  try {
    eval("let a == 5"); // invalid syntax
  } catch (error) {
    if (error instanceof SyntaxError) {
      console.log("SyntaxError:", error.message);
    }
  }

  // 4. RangeError (invalid length, stack overflow, etc.)
  try {
    let arr = new Array(-1); // invalid array length
  } catch (error) {
    if (error instanceof RangeError) {
      console.log("RangeError:", error.message);
    }
  }

  // 5. URIError (wrong use of encodeURI/decodeURI)
  try {
    decodeURIComponent('%'); // malformed URI sequence
  } catch (error) {
    if (error instanceof URIError) {
      console.log("URIError:", error.message);
    }
  }

  // 6. Custom Error
  try {
    throw new Error("This is a custom error");
  } catch (error) {
    console.log("Custom Error:", error.message);
  }
}

handleErrors();
