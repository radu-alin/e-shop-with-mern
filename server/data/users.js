import bcrypt from 'bcryptjs';

const users = [
  {
    name: 'Admin User',
    email: 'admin@test.io',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
  },
  {
    name: 'John1',
    email: 'john1@test.io',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'John2',
    email: 'john2@test.io',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'John3',
    email: 'john3@test.io',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'John4',
    email: 'john4@test.io',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'John5',
    email: 'john5@test.io',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'John6',
    email: 'john6@test.io',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'John7',
    email: 'john7@test.io',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'John8',
    email: 'john8@test.io',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'John9',
    email: 'john9@test.io',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'John10',
    email: 'john10@test.io',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'John11',
    email: 'john11@test.io',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'John12',
    email: 'john12@test.io',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'John13',
    email: 'john13@test.io',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'John14',
    email: 'john14@test.io',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'John15',
    email: 'john15@test.io',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'John16',
    email: 'john16@test.io',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'John17',
    email: 'john17@test.io',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'John18',
    email: 'john18@test.io',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'John19',
    email: 'john19@test.io',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'John20',
    email: 'john20@test.io',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'John21',
    email: 'john21@test.io',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'John22',
    email: 'john22@test.io',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'John23',
    email: 'john23@test.io',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'John24',
    email: 'john24@test.io',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'John25',
    email: 'john25@test.io',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'John26',
    email: 'john26@test.io',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'John27',
    email: 'john27@test.io',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'John28',
    email: 'john28@test.io',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'John29',
    email: 'john29@test.io',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'John30',
    email: 'john30@test.io',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'John31',
    email: 'john31@test.io',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'John32',
    email: 'john32@test.io',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'John33',
    email: 'john33@test.io',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'John34',
    email: 'john34@test.io',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'John35',
    email: 'john35@test.io',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'John36',
    email: 'john36@test.io',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'John37',
    email: 'john37@test.io',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'John38',
    email: 'john38@test.io',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'John39',
    email: 'john39@test.io',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'John40',
    email: 'john40@test.io',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'John41',
    email: 'john41@test.io',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'John42',
    email: 'john42@test.io',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'John43',
    email: 'john43@test.io',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'John44',
    email: 'john44@test.io',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'John45',
    email: 'john45@test.io',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'John46',
    email: 'john46@test.io',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'John47',
    email: 'john47@test.io',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'John48',
    email: 'john48@test.io',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'John49',
    email: 'john49@test.io',
    password: bcrypt.hashSync('123456', 10),
  },
];

export default users;
