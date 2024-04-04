**Implementation - I**

```tsx
Function.prototype.myBind = function (...args) {
  let functObj = this;
  let context = args[0];
  let params = args.slice(1);

  return function (...args) {
    functObj.apply(context, [...params, ...args]);
  };
};

function travel(greet, from, to) {
  console.log(
    `${greet}, ${this.firstName} ${this.lastName} is going to ${to} from ${from}`
  );
}

let details = {
  firstName: "vinay",
  lastName: "kumar",
};

let result = travel.myBind(details, "hello");
result("AP", "TG");
```