// const App = () => {
//   const middlewares = [];
//   const use = (fn) => middlewares.push(fn);

//   const runMiddlewares = (index) => {

//     const count = middlewares.length;

//     if (index < count) {

//       middlewares[index].call(null, () => runMiddlewares(index + 1));

//     }
//   };
//   const get = () => {
//     console.log(middlewares);
//     runMiddlewares(0);
//     console.log("get");
//   };

//   return {
//     get,
//     use,
//   };
// };
// const app = App();

// app.use((next) => {
//   console.log("first one");
//   next();
// });

// app.use((next) => {
//   console.log("second one");
//   next();
// });
// app.use((next) => {
//   console.log("therd one");
//   next();
// });
// app.get();

// function client(fn, next) {
//   console.log("client");
//   fn(next);
// }

// client(
//   (fn) => {
//     console.log("say hi");
//     fn();
//   },
//   () => {
//     console.log("the end function");
//   }
// );

const gulp = require("gulp");

gulp.task("move", () => {
  return gulp.src("./test.html").pipe(gulp.dest("./dest"));
});
