const Company = function(name, salary) {
  Company.addStaff({ name, salary });

  this.name =  name;
  this.salary = salary;

  this.income = function(value) {
    Company.store.money += value - this.salary;

    Company.store.staffList.map((element) => {
      if (element.name === this.name) {
        element.income += value - this.salary;
      }
    })
  }

  this.spend = function(value) {
    Company.store.money -= value;

    Company.store.staffList.map((element) => {
      if (element.name === this.name) {
        element.income -= value;
      }
    })
  }

  Object.defineProperty(this, "name", {
    writable: false
  });

  Object.defineProperty(this, "salary", {
    writable: false
  });
}

Company.store = {
  staffList: [],
  countStaff: 0,
  money: 0,
};

Company.addStaff = function({name, income = 0}) {
  this.store.staffList.push({name, income});
  this.store.countStaff++;
};

Company.getLeaders = function() {
  const staffList = this.store.staffList;
  const incomes = staffList.map((element) => element.income);
  const maxValue = Math.max(...incomes);

  return staffList.filter((element) => element.income === maxValue);
};
