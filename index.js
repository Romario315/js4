let myStr =
  'Lorem". ipsum, dolor! sit? amet: consectetur; adipisicing elit. Dolores quas alias animi inventore delectus quo non, fugit officiis a repellendus facere quae perferendis quos doloremque in, accusantium eum sint corrupti similique voluptatibus omnis mollitia id ex. Adipisci temporibus laborum fugit aperiam, minima recusandae nemo! Voluptas, fugiat sunt saepe dignissimos quam possimus vero voluptatibus quas commodi ipsa vitae, est error voluptate ex cum? Ab, numquam doloremque sunt id molestias explicabo tenetur? Corporis, quisquam voluptatem doloremque itaque est quod impedit, commodi illo eius dicta, enim reiciendis quidem minus tempora sapiente ratione. Repudiandae tempora officia voluptate nam cum dolore corrupti dolorem asperiores quisquam dicta, officiis distinctio ad possimus earum rerum ipsam veritatis enim voluptatum ea numquam doloremque deleniti sapiente velit maxime. Temporibus nostrum perspiciatis molestiae tempora, quo molestias numquam atque obcaecati unde quos itaque modi fugiat dolorem non rerum harum, esse, impedit voluptas minus? Deleniti atque reiciendis voluptate aut consequuntur blanditiis dolores dolorem magni adipisci eius unde, rerum explicabo labore molestias non et exercitationem mollitia iure. Est libero recusandae et, animi sunt a blanditiis consequuntur nemo iste laudantium quos sint ipsa ad possimus sequi dolor ipsum mollitia facilis? Officia quasi rerum atque esse voluptatum quae eos! Sequi eum repellat, molestiae enim soluta quos, tempora recusandae nulla facere quae assumenda harum modi laboriosam. Earum error aspernatur explicabo? Earum non, nesciunt distinctio quod dolores facere, placeat consectetur illum omnis eligendi ullam! Totam laudantium voluptates esse inventore molestias sapiente corrupti temporibus iure! Explicabo laudantium repellendus ullam laboriosam. Odit nostrum sit autem at laboriosam? Autem cupiditate facilis dolore nemo perferendis facere! Maiores iure voluptas obcaecati nihil. Rerum dignissimos fugit a dolorem earum soluta, ut at ullam repudiandae sunt';

let wordList = (str, subStr) => {
  let reg = new RegExp('\\.|,|\\?|!|:|;|"', "gui");
  let arr = str
    .replace(reg, "")
    .toLowerCase()
    .split(" ")
    .filter((item) => item.indexOf(subStr) > -1);
  let res = new Set();

  arr.array.forEach((item) => {
    res.add(item);
  });
  return res;
};

let myDate = new Date();
let getLocalDate = (date, isSeconds = false, isISO = false) => {
  const reg = new RegExp(":\\d{2}$", "gui");
  let res;

  if (!isISO) {
    res = isSeconds
      ? date.toLocaleString()
      : date.toLocaleString().replace(reg, "");
  } else {
    const year = date.getFullYear();
    const month =
      date.getMonth() + 1 < 9 ? `0${date.getMonth() + 1}` : date.getMonth() + 1;
    const day = date.getDate() < 9 ? `0${date.getDate()}` : date.getDate();
    const hour = date.getHours() < 9 ? `0${date.getHours()}` : date.getHours();
    const minutes =
      date.getMinutes() < 9 ? `0${date.getMinutes()}` : date.getMinutes();
    const seconds =
      date.getSeconds() < 9 ? `0${date.getSeconds()}` : date.getSeconds();

    res = isSeconds
      ? `${year}-${month}-${day}, ${hour}:${minutes}:${seconds}`
      : `${year}-${month}-${day}, ${hour}:${minutes}`;
  }

  return res;
};

let getWeekDay = (d) => {
  const date = new Date(d);
  const days = [
    "воскресенье",
    "понедельник",
    "вторник",
    "среда",
    "четверг",
    "пятница",
    "суббота",
  ];

  return days[date.getDay()];
};

let getLocalDay = (d) => {
  const date = new Date(d);
  let day = date.getDay();

  if (day === 0) day = 7;

  return day;
};

let Car = function (engine, model, name, year) {
  this.engine = engine;
  this.model = model;
  this.name = name;
  this.year = year;
};

Object.defineProperties(Car.prototype, {
  used: {
    get() {
      const yearNow = new Date().getFullYear();

      return yearNow - this.year > 1 ? "used" : "new";
    },
    set(value) {
      const yearNow = new Date().getFullYear();

      if (value === "new" && this.year < yearNow) this.year = yearNow;
    },
  },
});

Car.prototype.info = function () {
  return `${this.name} ${this.model}, ${this.engine}cc, year ${this.year}, ${this.used}`;
};

let car = new Car(2000, "Lacetti", "Chevrolet", 2010);
let car2 = new Car(5000, "FX50 AWD", "Infinite", 2019);

let testPerformance = (iterations, func) => {
  let time = Date.now();

  if (typeof func === "function") for (let i = iterations; i--; ) func();

  return Date.now() - time;
};

function test1() {
  let str = myLongStr;

  while (str.indexOf("o") !== -1) str = str.replace("o", "");
  while (str.indexOf("a") !== -1) str = str.replace("a", "");
  while (str.indexOf("e") !== -1) str = str.replace("e", "");
  while (str.indexOf("u") !== -1) str = str.replace("u", "");
  while (str.indexOf("i") !== -1) str = str.replace("i", "");
}

function test2() {
  const reg = new RegExp("[oaeui]", "gui");

  myLongStr.replace(reg, "");
}
