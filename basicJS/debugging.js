function exercise1() {
  function sum(a, b) {
    return a + b;
  }

  console.log(sum(2, 3));
}

function exercise2() {
  const first = "10";
  const second = "5";

  console.log(first + " " + second);
}

function exercise3() {
  const numbers = [1, 2, 3];

  const result = numbers.map((num) => {
    return num * 2;
  });

  console.log(result);
}

function exercise4() {
  const numbers = [1, 2, 3, 4];

  const evens = numbers.filter((num) => {
    return num % 2 === 0;
  });

  console.log(evens);
}

function exercise5() {
  let total = 0;

  for (let i = 1; i <= 3; i++) {
    total += i;
  }

  console.log(total);
}

function exercise6() {
  const user = {
    name: "Hanan",
    age: 30
  };

  console.log(user.name);
}

function exercise7() {
  const arr = [10, 20, 30];

  console.log(arr[2].toString());
}

function exercise8() {
  function greet(name) {
    if (!name) {
      return;
    }

    console.log("Hello " + name);
  }

  greet("David");
}

function exercise9() {
  function multiply(a, b) {
    return (a * b);
  }

  const result = multiply(2, 4);

  console.log(result );
}

function exercise10() {
  for (let i = 0; i < 3; i++) {
    setTimeout(() => {
      console.log(i);
    }, 100);
  }
}

function exercise11() {
  function change(user) {
    user.name = "Moshe";
  }

  const user = { name: "Hanan" };

  change(user);

  console.log(user.name);
}

function exercise12() {
  const user = { name: "Hanan" };
  const copy = {...user};

  copy.name = "Ruth";

  console.log(user.name);
}

function exercise13() {
  function getFullName(user) {
    return user.firstName + " " + user.lastName;
  }

  const user = {
    firstName: "Hanan",
    lastName: "wu"
  };

  console.log(getFullName(user));
}

function exercise14() {
  function divide(a, b) {
    if (b === 0) {
      console.log("Cannot divide");
      return
    }

    return a / b;
  }

  console.log(divide(10, 0));
}

function exercise15() {
  const items = [1, 2, 3];

  items.forEach((item) => {
    if (item === 2) {
      return;
    }

    console.log(item);
  });
}
exercise15()

function exercise16() {
  const obj = {
    value: 10,
    getValue: function () {
      return this.value;
    }
  };

  const fn = obj.getValue;

  console.log(fn());
}

function exercise17() {
  function counter() {
    let count = 0;

    return {
      increment: () => count++,
      get: () => count
    };
  }

  const c = counter();

  c.increment();
  c.increment();

  const get = c.get;

  console.log(get);
}

async function exercise18() {
  function fetchNumber() {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log("done");
      }, 300);
    });
  }

  const result = await fetchNumber();

  console.log(result * 2);
}

async function exercise19() {
  function getUser(id) {
    return new Promise((resolve) => {
      if (id === 1) {
        resolve({ name: "Hanan" });
      }
    });
  }

  const user = await getUser(2);

  console.log(user.name);
}

async function exercise20() {
  const numbers = [1, 2, 3];

  numbers.forEach(async (num) => {
    await new Promise((resolve) => setTimeout(resolve, 100));
    console.log(num);
  });

  console.log("finished");
}

async function exercise21() {
  async function doubleNumbers() {
    const nums = [1, 2, 3];

    const result = nums.map(async (num) => {
      return num * 2;
    });

    console.log(result);
  }

  await doubleNumbers();
}

async function exercise22() {
  function getData() {
    return Promise.resolve({
      items: [1, 2, 3]
    });
  }

  const data = getData();

  console.log(data.items.length);
}

function exercise23() {
  let total = 0;

  function add(num) {
    total += num;
  }

  add(5);
  add("10");
  add(3);

  console.log(total);
}

function exercise24() {
  function calc(items) {
    let sum = 0;

    function add(item) {
      if (item.price) {
        sum += item.price;
      }
    }

    items.forEach(add);

    return sum;
  }

  const items = [
    { price: 10 },
    { price: 20 },
    { cost: 30 }
  ];

  console.log(calc(items));
}

function exercise25() {
  function canEnter(user) {
    if (user.isAdmin || user.isLoggedIn && user.age > 18) {
      return true;
    }

    return false;
  }

  const user = {
    isAdmin: false,
    isLoggedIn: true,
    age: 16
  };

  console.log(canEnter(user));
}

function exercise26() {
  function updateCart(cart) {
    const item = cart.items.find((i) => i.id === 3);
    item.price = 999;
  }

  const cart = {
    items: [
      { id: 1, price: 10 },
      { id: 2, price: 20 }
    ]
  };

  updateCart(cart);

  console.log(cart.items[0].price);
}

function exercise27() {
  function processUsers(users) {
    return users.map((user) => {
      if (user.active) {
        return {
          ...user,
          score: calculate(user)
        };
      }
    });
  }

  function calculate(user) {
    if (!user.points) return;

    return user.points.reduce((a, b) => a + b);
  }

  const users = [
    { active: true, points: [10, 20] },
    { active: true },
    { active: false, points: [5] }
  ];

  console.log(processUsers(users));
}

function exercise28() {
  function runTasks(tasks) {
    const result = [];

    tasks.forEach(async (task) => {
      const value = await task();
      result.push(value);
    });

    return result;
  }

  const tasks = [
    () => Promise.resolve(1),
    () => Promise.resolve(2),
    () => Promise.resolve(3)
  ];

  console.log(runTasks(tasks));
}

function exercise29() {
  const text = "hello";

  for (let i = 0; i <= text.length; i++) {
    console.log(text[i].toUpperCase());
  }
}

function exercise30() {
  function createUser(name, age) {
    return
    {
      name: name,
      age
    };
  }

  const user = createUser("Hanan", 30);

  console.log(user.name);
}