export const getApis = () => {
  return(
      {
          categories:wrapPromise(fetchCategories()),
          products:wrapPromise(fetchProducts())
        }
  ) 

  
};

const fetchCategories = () => {
    return fetch("https://api-xiaominario.herokuapp.com/categories", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        authorization:
          "bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9sb2NhbGhvc3Q6ODAwMFwvbG9naW4iLCJpYXQiOjE1OTMwMjM2NDgsIm5iZiI6MTU5MzAyMzY0OCwianRpIjoiWDZYU3BLemhhUjd1aFYzSiIsInN1YiI6MSwicHJ2IjoiODdlMGFmMWVmOWZkMTU4MTJmZGVjOTcxNTNhMTRlMGIwNDc1NDZhYSJ9.iYMa9nqazn_X4tM0cosUhGmtnGJMVrl7thJodXjhUl4",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        return(data)
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const fetchProducts = () => {
    return fetch(`https://api-xiaominario.herokuapp.com/products`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        authorization:
          "bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9sb2NhbGhvc3Q6ODAwMFwvbG9naW4iLCJpYXQiOjE1OTMwMjM2NDgsIm5iZiI6MTU5MzAyMzY0OCwianRpIjoiWDZYU3BLemhhUjd1aFYzSiIsInN1YiI6MSwicHJ2IjoiODdlMGFmMWVmOWZkMTU4MTJmZGVjOTcxNTNhMTRlMGIwNDc1NDZhYSJ9.iYMa9nqazn_X4tM0cosUhGmtnGJMVrl7thJodXjhUl4",
      },
    })
      .then((response) => response.json())
      .then((products) => {
          return products
      })
      .catch((err) => {
        console.log(err);
      });
  };
  


  function wrapPromise(promise) {
    let status = "pending";
    let result;
    let suspender = promise.then(
      r => {
        status = "success";
        result = r;
      },
      e => {
        status = "error";
        result = e;
      }
    );
    return {
      read() {
        if (status === "pending") {
          throw suspender;
        } else if (status === "error") {
          throw result;
        } else if (status === "success") {
          return result;
        }
      }
    };
  }